import CommentCard from "./CommentCard";
import ReplySection from "./ReplySection";

function CommentList() {
  return (
    <div className="flex flex-col gap-4">
      <CommentCard />

      <CommentCard />
      <ReplySection />
    </div>
  )
}

export default CommentList;