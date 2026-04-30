import CommentHeader from "./CommentHeader";
import CommentActions from "./CommentActions";

function CommentCard({ comment }) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
      <CommentHeader createdAt={comment.createdAt} user={comment.user} />

      <p>{comment.content}</p>

      <CommentActions score={comment.score} />
    </div>
  )
}

export default CommentCard;