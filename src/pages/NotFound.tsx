
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-expert-blue mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Halaman tidak ditemukan</p>
          <Button 
            onClick={() => navigate("/")}
            className="bg-expert-blue hover:bg-expert-blue/90"
          >
            Kembali ke Beranda
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
