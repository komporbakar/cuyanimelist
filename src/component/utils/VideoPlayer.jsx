"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="text-color-primary float-right px-3 mb-1 rounded-full bg-color-secondary"
          onClick={handleVideoPlayer}
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={() => alert("Video is Broken")}
        />
      </div>
    );
  };

  const OpenTrailer = () => (
    <button
      className="fixed bottom-5 right-5 w-32 bg-color-primary rounded-xl text-lg"
      onClick={handleVideoPlayer}
    >
      Tonton Trailer
    </button>
  );
  return isOpen ? <Player /> : <OpenTrailer />;
};

export default VideoPlayer;
