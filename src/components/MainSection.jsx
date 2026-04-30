import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function MainSection() {
  return (
    <main className="grow flex flex-col gap-4">
      <CommentList />

      <CommentForm />
    </main>
  )
}

export default MainSection;