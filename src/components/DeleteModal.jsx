function DeleteModal() {
  return (
    <div className="fixed inset-0 bg-black/50 p-4 flex justify-center items-center">
      <div className="w-full max-w-100 bg-white px-[25.5px] py-[21.5px] rounded-lg flex flex-col gap-4">
        <h2 className="text-grey-800 font-medium text-[24px] leading-[120%]">Delete comment</h2>
        <p className="text-grey-500">Are you sure you want to delete this comment? This will remove the comment and can’t be undone.</p>

        <div className="grid grid-cols-2 gap-4 text-white font-medium">
          <button type="button" className="rounded-lg bg-grey-500 h-12 uppercase">No, cancel</button>
          <button type="button" className="rounded-lg bg-pink-400 h-12 uppercase">Yes, delete</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal;