import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

function MainSection() {
  return (
    <main className="grow flex flex-col gap-4">
      <h1 className="sr-only">Interactive Comment Section</h1>
      
      <CommentList />

      <CommentForm />
    </main>
  )
}

export default MainSection;