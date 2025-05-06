
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Schema for identity validation
const identitySchema = z.object({
  name: z.string().min(1, "Nama tidak boleh kosong"),
});

const RecommendationForm = () => {
  // Steps: 0 = Identity Input, 1 = Interest Selection, 2 = Talent Selection, 3 = Verification, 4 = Processing, 5 = Results
  const [step, setStep] = useState<number>(0);
  const [selectedInterest, setSelectedInterest] = useState<Interest | null>(null);
  const [selectedTalent, setSelectedTalent] = useState<Talent | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const navigate = useNavigate();

  // Form for identity
  const identityForm = useForm<z.infer<typeof identitySchema>>({
    resolver: zodResolver(identitySchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSelectInterest = (interest: Interest) => {
    setSelectedInterest(interest);
    setSelectedTalent(null); // Reset talent when interest changes
  };

  const handleSelectTalent = (talent: Talent) => {
    setSelectedTalent(talent);
  };

  const handleNextStep = () => {
    if (step === 0) {
      identityForm.handleSubmit(
        (values) => {
          // Proceed to interest selection
          setStep(1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      )();
    } else if (step === 1) {
      if (!selectedInterest) {
        toast.error("Silakan pilih minat Anda terlebih dahulu");
        return;
      }
      // Proceed to talent selection
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (step === 2) {
      if (!selectedTalent) {
        toast.error("Silakan pilih bakat Anda terlebih dahulu");
        return;
      }
      // Proceed to verification
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (step === 3) {
      // Proceed to processing
      setStep(4);
      // Simulate processing with a small delay
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        // Get profession recommendations
        const { professions, description } = inferProfessions(selectedInterest!, selectedTalent!);
        
        if (professions.length === 0) {
          toast.error("Tidak ditemukan rekomendasi profesi untuk kombinasi minat dan bakat yang dipilih");
          setStep(3); // Go back to verification
          return;
        }
        
        // Navigate to results page with the data
        navigate('/results', { 
          state: { 
            professions, 
            description, 
            interest: selectedInterest, 
            talent: selectedTalent,
            name: identityForm.getValues().name
          } 
        });
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Flowchart visualization */}
            <div className="relative w-full h-16 mb-12 hidden md:block">
              <div className="absolute inset-0 flex items-center">
                <div className="h-0.5 w-full bg-gray-200"></div>
              </div>
              <div className="relative flex justify-between">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step === 0 ? 'border-expert-accent bg-expert-accent/10' : step > 0 ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <span className="text-sm font-medium">1</span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step === 1 ? 'border-expert-accent bg-expert-accent/10' : step > 1 ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <span className="text-sm font-medium">2</span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step === 2 ? 'border-expert-accent bg-expert-accent/10' : step > 2 ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <span className="text-sm font-medium">3</span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step === 3 ? 'border-expert-accent bg-expert-accent/10' : step > 3 ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <span className="text-sm font-medium">4</span>
                </div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${step === 4 ? 'border-expert-accent bg-expert-accent/10' : step > 4 ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <span className="text-sm font-medium">5</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-between mt-11 px-2">
                <div className="text-xs text-center w-12 -ml-1">Identitas</div>
                <div className="text-xs text-center w-12">Minat</div>
                <div className="text-xs text-center w-12">Bakat</div>
                <div className="text-xs text-center w-20">Verifikasi</div>
                <div className="text-xs text-center w-12">Hasil</div>
              </div>
            </div>

            {/* Step content */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              {/* Step 0: Identity Input */}
              {step === 0 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-expert-blue mb-4 text-center">
                    Masukkan Identitas Anda
                  </h1>
                  <p className="text-gray-600 mb-6 text-center">
                    Langkah pertama adalah memasukkan identitas Anda untuk memulai proses rekomendasi.
                  </p>

                  <Form {...identityForm}>
                    <form className="space-y-4">
                      <FormField
                        control={identityForm.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nama Lengkap</FormLabel>
                            <FormControl>
                              <input
                                {...field}
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expert-blue focus:border-expert-blue"
                                placeholder="Masukkan nama lengkap Anda"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </div>
              )}

              {/* Step 1: Interest Selection */}
              {step === 1 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-expert-blue mb-4 text-center">
                    Pilih Minat Anda
                  </h1>
                  <p className="text-gray-600 mb-6 text-center">
                    Langkah kedua adalah memilih minat utama Anda dari opsi berikut:
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
                </div>
              )}

              {/* Step 2: Talent Selection */}
              {step === 2 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-expert-blue mb-4 text-center">
                    Pilih Bakat Anda
                  </h1>
                  <p className="text-gray-600 mb-6 text-center">
                    Langkah ketiga adalah memilih bakat utama Anda sesuai dengan minat yang telah dipilih.
                  </p>

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
              )}

              {/* Step 3: Verification */}
              {step === 3 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-expert-blue mb-4 text-center">
                    Verifikasi Data
                  </h1>
                  <p className="text-gray-600 mb-6 text-center">
                    Pastikan data yang Anda masukkan sudah benar sebelum melanjutkan.
                  </p>

                  <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Nama:</span>
                      <span>{identityForm.getValues().name}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium">Minat:</span>
                      <span>{selectedInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bakat:</span>
                      <span>{selectedTalent}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Processing */}
              {step === 4 && (
                <div className="space-y-4">
                  <h1 className="text-2xl font-bold text-expert-blue mb-4 text-center">
                    Memproses Data
                  </h1>
                  <p className="text-gray-600 mb-6 text-center">
                    Sistem sedang memproses rekomendasi profesi berdasarkan input Anda...
                  </p>

                  <div className="flex flex-col items-center justify-center py-10">
                    <div className="w-16 h-16 border-4 border-expert-blue border-t-transparent rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-500">Sedang memproses dengan metode Forward Chaining...</p>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="mt-10 flex justify-between">
                {step > 0 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="px-6 py-2"
                    disabled={isProcessing}
                  >
                    Kembali
                  </Button>
                )}
                
                <div className="flex-1"></div>
                
                <Button
                  onClick={handleNextStep}
                  className="bg-expert-blue hover:bg-expert-blue/90 px-6 py-2"
                  disabled={isProcessing}
                >
                  {step === 3 ? 'Proses Rekomendasi' : 'Lanjutkan'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RecommendationForm;
