import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./PhotoComments.module.css";
import { UserContext } from "./../../../../Contexts/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm/PhotoCommentsForm";

const PhotoComments = (props) => {
  const { login } = useContext(UserContext);
  const commentsSection = useRef();
  const [comments, setComments] = useState(() => props.comments);

  useEffect(() => {
/*     commentsSection.current.scrollTop = comments.current.scrollHeight; */
    console.log("Scroll ", commentsSection.current)
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
