import { useComments } from "../context/CommentsContext";
import CommentCard from "./CommentCard";
import ReplySection from "./ReplySection";
import React from "react";

function CommentList() {
  const { comments } = useComments();

  return (
    <div className="flex flex-col gap-4">
      {comments.map(comment => (
        comment.replies.length ? (
          <React.Fragment key={comment.id}>
            <CommentCard comment={comment} />
            <ReplySection replies={comment.replies} />
          </React.Fragment>
        ) : (
          <CommentCard
            key={comment.id} 
            comment={comment} 
          />
        )
      ))}
    </div>
  )
}

export default CommentList;