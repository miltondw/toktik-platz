import { useState } from "react";

export const LogicActionBar = (likesCount, commentsCount, sharesCount) => {
  const [active, setActive] = useState(false);
  const [likes, setLikes] = useState(likesCount);
  const [comments, setComments] = useState(commentsCount);
  const [shares, setShares] = useState(sharesCount);
  const handleLike = () => {
    setActive(!active);
    if (!active) {
      setLikes(likes + 1);
    } else {
      setLikes(likesCount);
    }
  };
  return {
    active,
    likes,
    comments,
    shares,
    handleLike,
  };
};
