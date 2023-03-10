import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CommentsContext } from "../../context/CommentsContext";
import { Comment } from "../Comment";
import styles from "./styles.module.scss";

export const Comments = () => {
  const { currentCommentsState, toggleComments } = useContext(CommentsContext);
  if (currentCommentsState) {
    return (
      <ul className={styles.comments}>
        <button
          onClick={() => toggleComments((prev) => !prev)}
          className={styles.btnClose}>
          <span>
            <IoMdClose />
          </span>
        </button>
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="1 hours now"
          likes={1}
          profilePic="https://picsum.photos/50"
          user="miltondw"
        />
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="2 hours now"
          likes={12}
          profilePic="https://picsum.photos/51"
          user="charlyBr"
        />
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="4 hours now"
          likes={21}
          profilePic="https://picsum.photos/52"
          user="JoselAa"
        />
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="1 hours now"
          likes={1}
          profilePic="https://picsum.photos/50"
          user="miltondw"
        />
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="2 hours now"
          likes={12}
          profilePic="https://picsum.photos/51"
          user="charlyBr"
        />
        <Comment
          content="Lorem ipsum dolor sit amet consectetur."
          date="4 hours now"
          likes={21}
          profilePic="https://picsum.photos/52"
          user="JoselAa"
        />
      </ul>
    );
  }
};
