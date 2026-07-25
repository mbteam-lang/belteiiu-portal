import { useEffect, useRef } from "react";

export default function YouTubePlayer({ videoId }) {
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?` +
    "rel=0&" +
    "modestbranding=1&" +
    "controls=1&" +
    "origin=" + encodeURIComponent(window.location.origin);

  return (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
}