
import { Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

const Header = () => {
  return (
    <header className="sticky top-0 z-50">
      <TopNav />
      <div className="bg-white/95 backdrop-blur-sm border-b border-warm-brown-200">
      <div className="container mx-auto px-4 py-6 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-2 sm:space-x-4 justify-start">
            <Link to="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="/lovable-uploads/e556b43c-41f7-4a9f-97fe-893d2dcf632b.png" 
                alt="Logo COHAGRA" 
                className="h-12 sm:h-16 w-auto flex-shrink-0"
              />
            </Link>
          </div>
          
          <div className="flex justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-warm-brown-600 to-sage-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-warm-brown-800">Morada das Magnólias</h1>
                <p className="text-xs text-warm-brown-500">Toque aqui para voltar ao início</p>
              </div>
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 flex-shrink-0">
            <Link 
              to="/contatos" 
              className="flex items-center justify-center space-x-1 sm:space-x-2 px-4 py-2 bg-sage-green-100 text-sage-green-700 rounded-lg hover:bg-sage-green-200 transition-colors w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              <span>📞 Precisa de ajuda? Ligue aqui</span>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
