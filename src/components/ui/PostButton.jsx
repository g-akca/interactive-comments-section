function PostButton({ isDisabled, innerText, className }) {
  return (
    <button 
      type="submit" 
      disabled={isDisabled}
      className={`bg-purple-600 w-26 h-12 rounded-lg flex justify-center items-center 
        font-medium text-white uppercase transition-all ${className}
        ${isDisabled 
          ? "opacity-50 cursor-not-allowed" 
          : "cursor-pointer hover:bg-purple-200"
        }
      `}
    >
      {innerText}
    </button>
  )
}

export default PostButton;