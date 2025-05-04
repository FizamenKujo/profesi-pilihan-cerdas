
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfessionCard from "@/components/ProfessionCard";
import { Interest, Talent } from "@/data/expertData";

interface ResultsState {
  professions: string[];
  description: string;
  interest: Interest;
  talent: Talent;
}

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as ResultsState;

  useEffect(() => {
    // Redirect to recommendation form if no data is available
    if (!state || !state.professions) {
      navigate("/recommendation");
    }
  }, [state, navigate]);

  // If no data, show nothing until the redirect happens
  if (!state || !state.professions) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-expert-blue text-white p-8 rounded-lg shadow-lg mb-10">
              <h1 className="text-3xl font-bold mb-4 text-center">
                Rekomendasi Profesi untuk Anda
              </h1>
              
              <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-6 text-center">
                <div className="bg-white/20 px-4 py-2 rounded">
                  <span className="text-sm">Minat</span>
                  <p className="font-semibold">{state.interest}</p>
                </div>
                
                <div className="bg-white/20 px-4 py-2 rounded">
                  <span className="text-sm">Bakat</span>
                  <p className="font-semibold">{state.talent}</p>
                </div>
              </div>
              
              <p className="text-center text-lg">
                {state.description}
              </p>
            </div>
            
            <h2 className="text-2xl font-bold text-expert-blue mb-6 text-center">
              Profesi yang Direkomendasikan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {state.professions.map((profession) => (
                <ProfessionCard key={profession} profession={profession} showDetails={true} />
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
              <Button
                variant="outline"
                onClick={() => navigate("/recommendation")}
                className="px-6 py-2"
              >
                Coba Lagi
              </Button>
              
              <Button
                onClick={() => navigate("/catalog")}
                className="bg-expert-blue hover:bg-expert-blue/90 px-6 py-2"
              >
                Lihat Semua Profesi
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
