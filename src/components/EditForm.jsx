function EditForm({ original }) {
  return (
    <form className="flex flex-col gap-4">
      <textarea 
        placeholder="Edit your comment..." 
        className="
          px-4 py-2 h-24 border-grey-100 border rounded-lg resize-none placeholder:text-grey-500 
          duration-150 focus:outline-none focus:border-purple-600
        "
      >
        {original}
      </textarea>

      <button 
        type="submit" 
        className="self-end bg-purple-600 w-26 h-12 rounded-lg flex justify-center items-center font-medium text-white uppercase"
      >
        Update
      </button>
    </form>
  )
}

export default EditForm;