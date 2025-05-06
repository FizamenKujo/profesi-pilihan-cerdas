
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const FlowchartPage = () => {
  const [step, setStep] = useState<number>(0);
  const [identity, setIdentity] = useState<string>("");
  const [answers, setAnswers] = useState<{interest: string, talent: string}>({interest: "", talent: ""});
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (step === 0) {
      if (!identity) {
        toast.error("Silakan masukkan identitas Anda terlebih dahulu");
        return;
      }
      setStep(1);
    } else if (step === 1) {
      if (!answers.interest || !answers.talent) {
        toast.error("Silakan pilih minat dan bakat Anda terlebih dahulu");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Check if inputs are complete
      if (!identity || !answers.interest || !answers.talent) {
        toast.error("Data tidak lengkap, silakan kembali ke langkah sebelumnya");
        setStep(1);
        return;
      }
      setStep(3);
      // Simulate processing
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(4);
      }, 2000);
    } else if (step === 4) {
      // Navigate to results page
      navigate('/results', { 
        state: { 
          professions: ["Desainer Grafis", "Animator"], 
          description: "Berdasarkan minat Anda di bidang " + answers.interest + " dan bakat " + answers.talent + ", Anda cocok untuk profesi berikut:", 
          interest: answers.interest, 
          talent: answers.talent 
        } 
      });
    }
  };

  const handleGoBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="container py-12">
          <h1 className="text-3xl font-bold text-expert-blue mb-8 text-center">
            Alur Sistem Pakar
          </h1>
          
          <div className="max-w-5xl mx-auto mb-12">
            {/* Flowchart visualization */}
            <div className="relative w-full h-[400px] mb-16">
              {/* Start node */}
              <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 rounded-full border-2 ${step === 0 ? 'border-expert-accent bg-expert-accent/10' : 'border-gray-300'} flex items-center justify-center transition-all duration-300`}>
                <span className="font-semibold">Start</span>
              </div>
              
              {/* Arrow 1 */}
              <div className="absolute left-32 top-1/2 transform -translate-y-1/2 w-[100px] h-0 border-t-2 border-gray-300">
                <ChevronRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300" />
              </div>
              
              {/* Input identitas node */}
              <div className={`absolute left-[calc(32px+100px+80px)] top-1/2 transform -translate-y-1/2 w-52 h-20 border-2 ${step === 1 ? 'border-expert-accent bg-expert-accent/10' : step > 1 ? 'border-green-500 bg-green-50' : 'border-gray-300'} flex items-center justify-center skew-x-[20deg]`}>
                <span className="font-semibold skew-x-[-20deg]">Input identitas</span>
              </div>
              
              {/* Arrow 2 */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px)] top-1/2 transform -translate-y-1/2 w-[100px] h-0 border-t-2 border-gray-300">
                <ChevronRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300" />
              </div>
              
              {/* Input jawaban node */}
              <div className={`absolute left-[calc(32px+100px+80px+52px+80px+100px+80px)] top-1/2 transform -translate-y-1/2 w-52 h-20 border-2 ${step === 2 ? 'border-expert-accent bg-expert-accent/10' : step > 2 ? 'border-green-500 bg-green-50' : 'border-gray-300'} flex items-center justify-center skew-x-[20deg]`}>
                <span className="font-semibold skew-x-[-20deg]">Input jawaban</span>
              </div>
              
              {/* Arrow 3 */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+80px)] top-1/2 transform -translate-y-1/2 w-[100px] h-0 border-t-2 border-gray-300">
                <ChevronRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-300" />
              </div>
              
              {/* Decision node - Apakah inputnya lengkap? */}
              <div className={`absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+80px+100px)] top-1/2 transform -translate-y-1/2 w-40 h-40 border-2 ${step === 2 ? 'border-expert-accent bg-expert-accent/10' : step > 2 ? 'border-green-500 bg-green-50' : 'border-gray-300'} flex items-center justify-center rotate-45`}>
                <span className="font-semibold -rotate-45 text-center px-2">Apakah inputnya lengkap?</span>
              </div>
              
              {/* Arrow No (back to input jawaban) */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+40px+40px)] top-[calc(50%-80px)] w-0 h-[80px] border-l-2 border-gray-300"></div>
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+40px+40px-100px)] top-[calc(50%-80px)] w-[100px] h-0 border-t-2 border-gray-300 flex items-center justify-center">
                <span className="bg-white px-1 -mt-3 text-xs">NO</span>
              </div>
              
              {/* Arrow Yes (down) */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+80px+100px+20px)] top-[calc(50%+70px)] w-0 h-[80px] border-l-2 border-gray-300">
                <span className="absolute right-0 bottom-0 transform translate-x-2 text-gray-300">YES</span>
              </div>
              
              {/* Proses forward chaining node */}
              <div className={`absolute left-[calc(32px+100px+80px+52px+80px+100px+80px+52px+80px+100px-40px)] top-[calc(50%+150px)] w-52 h-20 border-2 ${step === 3 ? 'border-expert-accent bg-expert-accent/10' : step > 3 ? 'border-green-500 bg-green-50' : 'border-gray-300'} flex items-center justify-center`}>
                <span className="font-semibold">Proses forward chaining</span>
              </div>
              
              {/* Arrow 4 (left) */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px-120px)] top-[calc(50%+160px)] w-[120px] h-0 border-t-2 border-gray-300">
                <ChevronRight className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-180 text-gray-300" />
              </div>
              
              {/* Hasil forward chaining node */}
              <div className={`absolute left-[calc(32px+100px+80px+52px+80px+100px+80px-120px-120px)] top-[calc(50%+150px)] w-52 h-20 border-2 ${step === 4 ? 'border-expert-accent bg-expert-accent/10' : 'border-gray-300'} flex items-center justify-center skew-x-[20deg]`}>
                <span className="font-semibold skew-x-[-20deg]">Hasil forward chaining</span>
              </div>
              
              {/* Arrow 5 (left) */}
              <div className="absolute left-[calc(32px+100px+80px+52px+80px+100px+80px-120px-120px-120px)] top-[calc(50%+160px)] w-[120px] h-0 border-t-2 border-gray-300">
                <ChevronRight className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-180 text-gray-300" />
              </div>
              
              {/* Selesai node */}
              <div className={`absolute left-[calc(32px+100px+80px+52px+80px-80px-80px)] top-[calc(50%+150px)] w-32 h-32 rounded-full border-2 ${step === 5 ? 'border-expert-accent bg-expert-accent/10' : 'border-gray-300'} flex items-center justify-center`}>
                <span className="font-semibold">Selesai</span>
              </div>
            </div>
            
            {/* Interactive content based on current step */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                {step === 0 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Langkah 1: Mulai</h2>
                    <p className="text-gray-600">Silakan masukkan identitas Anda untuk memulai proses rekomendasi profesi.</p>
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                      <input
                        type="text"
                        id="name"
                        value={identity}
                        onChange={(e) => setIdentity(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expert-blue focus:border-expert-blue"
                        placeholder="Masukkan nama Anda"
                      />
                    </div>
                  </div>
                )}
                
                {step === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Langkah 2: Input Jawaban</h2>
                    <p className="text-gray-600">Silakan pilih minat dan bakat Anda.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Pilih Minat</label>
                        <select 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expert-blue focus:border-expert-blue"
                          value={answers.interest}
                          onChange={(e) => setAnswers({...answers, interest: e.target.value})}
                        >
                          <option value="">-- Pilih Minat --</option>
                          <option value="Seni">Seni</option>
                          <option value="Teknologi">Teknologi</option>
                          <option value="Sains">Sains</option>
                          <option value="Sosial">Sosial</option>
                          <option value="Bisnis">Bisnis</option>
                          <option value="Pendidikan">Pendidikan</option>
                          <option value="Olahraga">Olahraga</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Pilih Bakat</label>
                        <select 
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-expert-blue focus:border-expert-blue"
                          value={answers.talent}
                          onChange={(e) => setAnswers({...answers, talent: e.target.value})}
                        >
                          <option value="">-- Pilih Bakat --</option>
                          <option value="Kreativitas Tinggi">Kreativitas Tinggi</option>
                          <option value="Problem Solving">Problem Solving</option>
                          <option value="Komunikasi">Komunikasi</option>
                          <option value="Empati">Empati</option>
                          <option value="Manajemen">Manajemen</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Langkah 3: Verifikasi Input</h2>
                    <p className="text-gray-600">Pastikan semua input sudah lengkap sebelum melanjutkan.</p>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Nama:</span>
                        <span>{identity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Minat:</span>
                        <span>{answers.interest}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Bakat:</span>
                        <span>{answers.talent}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Langkah 4: Proses Forward Chaining</h2>
                    <p className="text-gray-600">Sistem sedang memproses rekomendasi berdasarkan input Anda...</p>
                    <div className="flex justify-center py-4">
                      <div className="w-12 h-12 border-4 border-expert-blue border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-center text-sm text-gray-500">Mohon tunggu sebentar...</p>
                  </div>
                )}
                
                {step === 4 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Langkah 5: Hasil Forward Chaining</h2>
                    <p className="text-gray-600">Berdasarkan minat Anda di bidang {answers.interest} dan bakat {answers.talent}, berikut adalah rekomendasi profesi untuk Anda:</p>
                    <div className="bg-expert-blue/10 p-4 rounded-lg">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Desainer Grafis</li>
                        <li>Animator</li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-500">Klik tombol "Lihat Hasil Lengkap" untuk melihat detail rekomendasi.</p>
                  </div>
                )}
                
                <div className="flex justify-between mt-6">
                  {step > 0 && (
                    <Button variant="outline" onClick={handleGoBack}>
                      Kembali
                    </Button>
                  )}
                  <div className="flex-1"></div>
                  <Button 
                    onClick={handleNextStep} 
                    disabled={isProcessing}
                    className="bg-expert-blue hover:bg-expert-blue/90"
                  >
                    {step === 4 ? 'Lihat Hasil Lengkap' : 'Lanjutkan'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FlowchartPage;
