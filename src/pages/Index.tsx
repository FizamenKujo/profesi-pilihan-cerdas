
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-gradient py-16 md:py-24 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Temukan Profesi yang Sesuai dengan Minat dan Bakat Anda
              </h1>
              <p className="text-lg mb-8 text-gray-100">
                Sistem pakar berbasis aturan dengan metode forward chaining untuk rekomendasi profesi yang tepat berdasarkan minat dan bakat Anda.
              </p>
              <Button 
                onClick={() => navigate('/recommendation')} 
                className="bg-white text-expert-blue hover:bg-gray-100 text-lg px-8 py-6"
              >
                Mulai Sekarang
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="section-heading text-center">Sistem Pakar Rekomendasi Profesi</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="w-16 h-16 bg-expert-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-expert-blue text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Pilih Minat</h3>
                <p className="text-gray-600">
                  Tentukan bidang yang paling sesuai dengan ketertarikan Anda, seperti Seni, Teknologi, atau Bisnis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="w-16 h-16 bg-expert-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-expert-blue text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Pilih Bakat</h3>
                <p className="text-gray-600">
                  Tentukan bakat alami yang Anda miliki, seperti Kreativitas, Problem Solving, atau Komunikasi.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="w-16 h-16 bg-expert-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-expert-blue text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Dapatkan Rekomendasi</h3>
                <p className="text-gray-600">
                  Sistem akan menganalisis pilihan Anda dan memberikan rekomendasi profesi yang paling sesuai.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Use Section */}
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="section-heading text-center">Mengapa Menggunakan Sistem Ini?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-expert-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Berbasis Pengetahuan Pakar</h3>
                  <p className="text-gray-600">
                    Sistem ini dirancang berdasarkan pengetahuan dan pengalaman pakar dalam bidang karir dan pengembangan profesional.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-expert-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Metode Forward Chaining</h3>
                  <p className="text-gray-600">
                    Menggunakan metode inferensi maju (forward chaining) yang dimulai dari input minat dan bakat untuk menghasilkan rekomendasi profesi.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-expert-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">25 Aturan Tervalidasi</h3>
                  <p className="text-gray-600">
                    Sistem ini mengandung 25 aturan yang telah divalidasi untuk memberikan rekomendasi profesi yang akurat dan relevan.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-expert-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mudah Digunakan</h3>
                  <p className="text-gray-600">
                    Antarmuka yang intuitif memungkinkan Anda mendapatkan rekomendasi profesi hanya dalam beberapa langkah sederhana.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigate('/recommendation')} 
                className="bg-expert-blue hover:bg-expert-blue/90 text-lg px-8 py-6"
              >
                Coba Sekarang
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
