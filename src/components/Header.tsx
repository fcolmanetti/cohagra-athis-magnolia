
import { Home, Phone, QrCode, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Chatbot from "./Chatbot";

const Header = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-warm-brown-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center space-x-2 sm:space-x-4 justify-center sm:justify-start">
              <img 
                src="/lovable-uploads/e556b43c-41f7-4a9f-97fe-893d2dcf632b.png" 
                alt="Logo COHAGRA" 
                className="h-8 sm:h-10 w-auto flex-shrink-0"
              />
              
              <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-warm-brown-500 to-sage-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-warm-brown-800">Portal Magnólia</h1>
                  <p className="text-xs sm:text-sm text-sage-green-600">Manual para Morar Bem</p>
                </div>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 flex-shrink-0">
              <button 
                onClick={() => setIsChatbotOpen(true)}
                className="flex items-center justify-center space-x-1 sm:space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ajuda</span>
              </button>
              
              <Link 
                to="/contatos" 
                className="flex items-center justify-center space-x-1 sm:space-x-2 px-4 py-2 bg-sage-green-100 text-sage-green-700 rounded-lg hover:bg-sage-green-200 transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Contatos</span>
              </Link>
              
              <button className="flex items-center justify-center space-x-1 sm:space-x-2 px-4 py-2 bg-warm-brown-100 text-warm-brown-700 rounded-lg hover:bg-warm-brown-200 transition-colors w-full sm:w-auto">
                <QrCode className="w-4 h-4" />
                <span>QR Code</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  );
};

export default Header;
