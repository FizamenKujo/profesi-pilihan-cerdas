
const Footer = () => {
  return (
    <footer className="bg-expert-blue text-white py-8 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Profesi Pilihan Cerdas</h3>
            <p className="text-gray-300">
              Sistem pakar untuk membantu Anda menemukan profesi yang sesuai dengan minat dan bakat.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Beranda</a></li>
              <li><a href="/recommendation" className="text-gray-300 hover:text-white">Rekomendasi Profesi</a></li>
              <li><a href="/catalog" className="text-gray-300 hover:text-white">Katalog Profesi</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
            <p className="text-gray-300">
              Sistem ini menggunakan metode forward chaining untuk menganalisis minat dan bakat Anda, kemudian memberikan rekomendasi profesi yang paling sesuai.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Profesi Pilihan Cerdas. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
