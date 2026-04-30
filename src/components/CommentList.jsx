import { useComments } from "../context/CommentsContext";
import CommentCard from "./CommentCard";
import ReplySection from "./ReplySection";

function CommentList() {
  const { comments } = useComments();

  return (
    <div className="flex flex-col gap-4">
      {comments.map(comment => (
        comment.replies.length ? (
          <ReplySection replies={comment.replies} />
        ) : (
          <CommentCard comment={comment} />
        )
      ))}
    </div>
  )
}

export default CommentList;