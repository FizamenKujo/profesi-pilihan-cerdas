
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Interest, Talent, interests } from "@/data/expertData";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterestCard from "@/components/InterestCard";
import TalentSelector from "@/components/TalentSelector";
import { inferProfessions } from "@/utils/expertSystem";

const RecommendationForm = () => {
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [step, setStep] = useState<1 | 2>(1);
  const navigate = useNavigate();

  const handleSelectInterest = (interest: Interest) => {
    setSelectedInterest(interest);
    setSelectedTalent(null); // Reset talent when interest changes
  };

  const handleSelectTalent = (talent: Talent) => {
    setSelectedTalent(talent);
  };

  const handleProceedToTalents = () => {
    if (!selectedInterest) {
      toast.error("Silakan pilih minat Anda terlebih dahulu");
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGetRecommendation = () => {
    if (!selectedInterest || !selectedTalent) {
      toast.error("Silakan pilih minat dan bakat Anda terlebih dahulu");
      return;
    }

    // Get profession recommendations
    const { professions, description } = inferProfessions(selectedInterest, selectedTalent);
    
    if (professions.length === 0) {
      toast.error("Tidak ditemukan rekomendasi profesi untuk kombinasi minat dan bakat yang dipilih");
      return;
    }

    // Navigate to results page with the data
    navigate('/results', { 
      state: { 
        professions, 
        description, 
        interest: selectedInterest, 
        talent: selectedTalent 
      } 
    });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-expert-blue mb-8 text-center">
              {step === 1 ? "Pilih Minat Anda" : "Pilih Bakat Anda"}
            </h1>

            {step === 1 ? (
              <>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Langkah pertama adalah memilih minat utama Anda dari opsi berikut:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {interests.map((interest) => (
                    <InterestCard
                      key={interest.name}
                      interest={interest}
                      isSelected={selectedInterest === interest.name}
                      onClick={handleSelectInterest}
                    />
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <Button
                    onClick={handleProceedToTalents}
                    className="bg-expert-blue hover:bg-expert-blue/90 text-lg px-8 py-6"
                  >
                    Lanjutkan ke Bakat
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8">
                  <div className="bg-expert-blue/10 p-4 rounded-lg mb-6">
                    <p className="text-expert-blue">
                      <strong>Minat yang dipilih:</strong> {selectedInterest}
                    </p>
                  </div>
                  
                  <TalentSelector
                    selectedInterest={selectedInterest}
                    selectedTalent={selectedTalent}
                    onSelectTalent={handleSelectTalent}
                  />
                </div>

                <div className="mt-10 flex justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="px-6 py-2"
                  >
                    Kembali
                  </Button>
                  
                  <Button
                    onClick={handleGetRecommendation}
                    className="bg-expert-blue hover:bg-expert-blue/90 px-6 py-2"
                    disabled={!selectedTalent}
                  >
                    Dapatkan Rekomendasi
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecommendationForm;
