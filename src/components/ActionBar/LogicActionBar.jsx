import { useState, useContext } from "react";
import { CommentsContext } from "../../context/CommentsContext";

export const LogicActionBar = (likesCount, commentsCount, sharesCount) => {
  const [active, setActive] = useState(false);
  const [likes, setLikes] = useState(likesCount);
  const [comments, setComments] = useState(commentsCount);
  const [shares, setShares] = useState(sharesCount);
  const { toggleComments } = useContext(CommentsContext);
  const handleLike = () => {
    setActive(!active);
    if (!active) {
      setLikes(likes + 1);
    } else {
      setLikes(likesCount);
    }
  };
  const handleComment = () => {
    toggleComments((prev) => !prev);
  };
  return {
    active,
    likes,
    comments,
    shares,
    handleLike,
    handleComment,
  };
};
