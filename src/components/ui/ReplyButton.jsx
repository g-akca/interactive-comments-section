import ReplyIcon from "./icons/ReplyIcon";

function ReplyButton({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="flex gap-2 items-center text-purple-600 hover:text-purple-200 cursor-pointer transition-all">
      <ReplyIcon />
      <span className="font-medium">Reply</span>
    </button>
  )
}

export default ReplyButton;