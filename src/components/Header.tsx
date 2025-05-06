
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-expert-blue text-white shadow-md">
      <div className="container py-4 flex flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold mb-4 md:mb-0">
          <span className="text-expert-accent">Profesi</span>
          <span>Pilihan Cerdas</span>
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-expert-accent transition-colors">
            Beranda
          </Link>
          <Link to="/recommendation" className="hover:text-expert-accent transition-colors">
            Rekomendasi
          </Link>
          <Link to="/flowchart" className="hover:text-expert-accent transition-colors">
            Alur Sistem
          </Link>
          <Link to="/catalog" className="hover:text-expert-accent transition-colors">
            Katalog Profesi
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
