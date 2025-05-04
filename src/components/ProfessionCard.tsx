
import { getProfessionDetails } from "../utils/expertSystem";

interface ProfessionCardProps {
  profession: string;
  showDetails?: boolean;
}

const ProfessionCard = ({ profession, showDetails = false }: ProfessionCardProps) => {
  const details = showDetails ? getProfessionDetails(profession) : null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 card-hover">
      <h3 className="text-xl font-semibold text-expert-blue mb-2">{profession}</h3>
      
      {showDetails && details && details.matchingPaths.length > 0 && (
        <div className="mt-4">
          <p className="font-medium text-sm text-gray-600 mb-2">Jalur menuju profesi ini:</p>
          <ul className="space-y-2">
            {details.matchingPaths.map((path, index) => (
              <li key={index} className="text-sm">
                <span className="bg-expert-lightBlue/10 text-expert-blue px-2 py-1 rounded mr-2">
                  {path.interest}
                </span>
                <span className="text-gray-500">+</span>
                <span className="bg-expert-accent/10 text-expert-accent px-2 py-1 rounded ml-2">
                  {path.talent}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfessionCard;
