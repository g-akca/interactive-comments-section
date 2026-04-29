import CommentCard from "./CommentCard";
import ReplySection from "./ReplySection";
import CommentForm from "./CommentForm";

function MainSection() {
  return (
    <main className="flex flex-col gap-4">
      <CommentCard />
      
      <CommentCard />
      <ReplySection />

      <CommentForm />
    </main>
  )
}

export default MainSection;