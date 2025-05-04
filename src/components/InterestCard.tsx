
import { Interest, InterestInfo } from "../data/expertData";
import IconComponent from "./IconComponent";

interface InterestCardProps {
  interest: InterestInfo;
  isSelected: boolean;
  onClick: (interest: Interest) => void;
}

const InterestCard = ({ interest, isSelected, onClick }: InterestCardProps) => {
  return (
    <div 
      className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all ${
        isSelected ? "border-2 border-expert-blue ring-2 ring-expert-blue/20" : "border border-gray-200 hover:border-expert-lightBlue"
      }`}
      onClick={() => onClick(interest.name)}
    >
      <div className="flex items-center mb-2">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isSelected ? "bg-expert-blue text-white" : "bg-expert-lightBlue/10 text-expert-blue"
        }`}>
          <IconComponent name={interest.name} size={20} />
        </div>
        <h3 className="text-lg font-medium ml-3">{interest.name}</h3>
      </div>
      <p className="text-sm text-gray-600">{interest.description}</p>
    </div>
  );
};

export default InterestCard;
