"use client";

import React from "react";
import Hls from "hls.js";

type Props = {
  src: string;
  poster: string;
  className?: string;
  style?: React.CSSProperties;
  /** Defer attaching HLS until enabled (home hero idle-load pattern). */
  enabled?: boolean;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

const AdaptiveBackgroundVideo = ({
  src,
  poster,
  className,
  style,
  enabled = true,
  "aria-label": ariaLabel,
  "aria-hidden": ariaHidden,
}: Props) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video || !enabled) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let hls: Hls | null = null;

    const tryPlay = () => {
      void video.play().catch(() => {
        /* Autoplay may be blocked; poster remains visible. */
      });
    };

    // Prefer hls.js whenever MSE is available. Some Chromium builds report
    // native HLS via canPlayType("maybe") but cannot play remote .m3u8 files.
    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: false,
        lowLatencyMode: false,
        startLevel: -1,
        capLevelToPlayerSize: true,
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal || !hls) return;
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
          hls.startLoad();
        } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          hls.recoverMediaError();
        } else {
          console.error("[AdaptiveBackgroundVideo] fatal HLS error", data);
          hls.destroy();
          hls = null;
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      tryPlay();
    } else {
      console.error("[AdaptiveBackgroundVideo] HLS is not supported in this browser");
    }

    return () => {
      if (hls) {
        hls.destroy();
        hls = null;
      }
      video.removeAttribute("src");
      video.load();
    };
  }, [enabled, src]);

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    />
  );
};

export default AdaptiveBackgroundVideo;
