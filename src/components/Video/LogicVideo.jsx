import { useRef } from "react";

export const LogicVideo = () => {
  const videoRef = useRef(null);
  const btnRef = useRef(null);
  const togglePlay = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      btnRef.current.classList.add("invisible");
    } else {
      videoRef.current.pause();
      btnRef.current.classList.remove("invisible");
    }
  };
  return {
    videoRef,
    btnRef,
    togglePlay,
  };
};
