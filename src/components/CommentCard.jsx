import { useComments } from "../context/CommentsContext";
import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";
import CommentForm from "./CommentForm";
import EditForm from "./EditForm";
import { useState } from "react";

function CommentCard({ comment }) {
  const { currentUser, deleteComment } = useComments();
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const isOwn = comment.user.username === currentUser.username;

  return (
    <>
      <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
        <CommentHeader createdAt={comment.createdAt} user={comment.user} isOwn={isOwn} />

        {isEditing ? (
          <EditForm original={comment.content} />
        ) : (
          <p>{comment.content}</p>
        )}

        <CommentActions score={comment.score} isOwn={isOwn} onReply={() => setIsReplying(true)} onDelete={() => deleteComment(comment.id)} onEdit={() => setIsEditing(true)} />
      </div>

      {isReplying && (
        <CommentForm topId={comment.id} closeForm={() => setIsReplying(false)} />
      )}
    </>
  )
}

export default CommentCard;