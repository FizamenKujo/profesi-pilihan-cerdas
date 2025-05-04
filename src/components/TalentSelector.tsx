
import { useState, useEffect } from "react";
import { Interest, Talent, talentsByInterest } from "../data/expertData";

interface TalentSelectorProps {
  selectedInterest: Interest | null;
  onSelectTalent: (talent: Talent) => void;
  selectedTalent: Talent | null;
}

const TalentSelector = ({
  selectedInterest,
  onSelectTalent,
  selectedTalent,
}: TalentSelectorProps) => {
  const [availableTalents, setAvailableTalents] = useState<Talent[]>([]);

  useEffect(() => {
    if (selectedInterest) {
      setAvailableTalents(talentsByInterest[selectedInterest] || []);
    } else {
      setAvailableTalents([]);
    }
  }, [selectedInterest]);

  if (!selectedInterest) {
    return (
      <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
        <p className="text-gray-500 text-center">Pilih minat terlebih dahulu</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4">Bakat yang Anda Miliki</h3>
      <p className="mb-4 text-gray-600">
        Pilih bakat yang paling cocok dengan diri Anda:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {availableTalents.map((talent) => (
          <div
            key={talent}
            className={`p-4 rounded-lg border cursor-pointer transition-all ${
              selectedTalent === talent
                ? "border-2 border-expert-blue bg-expert-blue/5"
                : "border-gray-200 hover:border-expert-lightBlue"
            }`}
            onClick={() => onSelectTalent(talent)}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full ${
                  selectedTalent === talent
                    ? "bg-expert-blue"
                    : "border border-gray-300"
                } mr-3 flex items-center justify-center`}
              >
                {selectedTalent === talent && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
              <span className="font-medium">{talent}</span>
            </div>
          </div>
        ))}
      </div>

      {availableTalents.length === 0 && (
        <p className="text-center text-gray-500 my-4">
          Tidak ada bakat tersedia untuk minat ini
        </p>
      )}
    </div>
  );
};

export default TalentSelector;
