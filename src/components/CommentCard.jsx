import { useComments } from "../context/CommentsContext";
import { useState } from "react";
import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";
import CommentForm from "./CommentForm";
import EditForm from "./EditForm";
import VoteSection from "./ui/VoteSection";

function CommentCard({ comment }) {
  const { currentUser, deleteComment, editComment } = useComments();
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const isOwn = comment.user.username === currentUser.username;

  return (
    <>
      <div className="tablet:hidden bg-white rounded-lg p-4 flex flex-col gap-4">
        <CommentHeader createdAt={comment.createdAt} user={comment.user} isOwn={isOwn} />

        {isEditing ? (
          <EditForm original={comment.content} replyingTo={comment.replyingTo} editComment={(newComment) => editComment(comment.id, newComment)} closeForm={() => setIsEditing(false)} />
        ) : (
          <p>{comment.replyingTo && <span className="font-medium text-purple-600">@{comment.replyingTo} </span>} {comment.content}</p>
        )}

        <CommentActions comment={comment} isOwn={isOwn} onReply={() => setIsReplying(prev => !prev)} onDelete={() => deleteComment(comment.id)} onEdit={() => setIsEditing(prev => !prev)} />
      </div>

      <div className="hidden tablet:flex bg-white rounded-lg p-[23.5px] flex-row gap-6 items-start">
        <VoteSection comment={comment} />
        
        <div className="grow flex flex-col gap-4">
          <CommentHeader createdAt={comment.createdAt} user={comment.user} isOwn={isOwn} onReply={() => setIsReplying(prev => !prev)} onDelete={() => deleteComment(comment.id)} onEdit={() => setIsEditing(prev => !prev)} />

          {isEditing ? (
            <EditForm original={comment.content} replyingTo={comment.replyingTo} editComment={(newComment) => editComment(comment.id, newComment)} closeForm={() => setIsEditing(false)} />
          ) : (
            <p>{comment.replyingTo && <span className="font-medium text-purple-600">@{comment.replyingTo} </span>} {comment.content}</p>
          )}
        </div>
      </div>

      {isReplying && (
        <CommentForm topId={comment.id} replyingTo={comment.user.username} closeForm={() => setIsReplying(false)} />
      )}
    </>
  )
}

export default CommentCard;