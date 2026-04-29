import plusIcon from "/images/icon-plus.svg";
import minusIcon from "/images/icon-minus.svg";

function VoteSection() {
  return (
    <div className="bg-grey-50 w-25 h-10 rounded-[10px] flex justify-center items-center gap-4">
      <img src={plusIcon} alt="Plus icon" />
      <span className="font-medium text-purple-600">12</span>
      <img src={minusIcon} alt="Minus icon" />
    </div>
  )
}

export default VoteSection;