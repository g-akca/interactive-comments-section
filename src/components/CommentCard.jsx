import { useComments } from "../context/CommentsContext";
import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";

function CommentCard({ comment }) {
  const { currentUser } = useComments();

  const isOwn = comment.user.username === currentUser.username;

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
      <CommentHeader createdAt={comment.createdAt} user={comment.user} isOwn={isOwn} />

      <p>{comment.content}</p>

      <CommentActions score={comment.score} />
    </div>
  )
}

export default CommentCard;