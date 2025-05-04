
import { useState } from "react";
import { Interest, interests } from "@/data/expertData";
import { getAllProfessions, getProfessionsByInterest } from "@/utils/expertSystem";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfessionCard from "@/components/ProfessionCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ProfessionCatalog = () => {
  const [selectedFilter, setSelectedFilter] = useState<Interest | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get all professions
  const allProfessions = getAllProfessions();
  
  // Filter professions based on selected filter
  const filteredProfessions = selectedFilter === 'all' 
    ? allProfessions 
    : getProfessionsByInterest(selectedFilter);
  
  // Further filter based on search query
  const searchedProfessions = filteredProfessions.filter(profession => 
    profession.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-expert-blue to-expert-lightBlue text-white py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Katalog Profesi
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-center">
              Jelajahi berbagai profesi berdasarkan minat dan bakat yang dibutuhkan
            </p>
          </div>
        </div>
        
        <div className="container py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div className="max-w-md">
              <Input
                type="text"
                placeholder="Cari profesi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedFilter('all')}
                className="text-sm"
              >
                Semua
              </Button>
              
              {interests.map((interest) => (
                <Button
                  key={interest.name}
                  variant={selectedFilter === interest.name ? 'default' : 'outline'}
                  onClick={() => setSelectedFilter(interest.name)}
                  className="text-sm"
                >
                  {interest.name}
                </Button>
              ))}
            </div>
          </div>
          
          {searchedProfessions.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchedProfessions.map((profession) => (
                <ProfessionCard key={profession} profession={profession} showDetails={true} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">Tidak ada profesi yang ditemukan</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfessionCatalog;
