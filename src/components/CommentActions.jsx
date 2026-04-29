import VoteSection from "./VoteSection";
import ReplyButton from "./ReplyButton";

function CommentActions() {
  return (
    <div className="flex justify-between items-center">
      <VoteSection />
      <ReplyButton />
    </div>
  )
}

export default CommentActions;