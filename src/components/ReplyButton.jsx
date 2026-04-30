import replyIcon from "/images/icon-reply.svg";

function ReplyButton() {
  return (
    <button type="button" className="flex gap-2 items-center">
      <img src={replyIcon} alt="Reply icon" className="w-3.5" />
      <span className="text-purple-600 font-medium">Reply</span>
    </button>
  )
}

export default ReplyButton;