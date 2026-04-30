import VoteSection from "./VoteSection";
import ReplyButton from "./ReplyButton";

function CommentActions({ score }) {
  return (
    <div className="flex justify-between items-center">
      <VoteSection score={score} />
      <ReplyButton />
    </div>
  )
}

export default CommentActions;