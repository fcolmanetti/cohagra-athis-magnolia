
import { Building2, Heart, Users } from "lucide-react";

const WelcomeHero = () => {
  return (
    <div className="relative bg-gradient-to-r from-warm-brown-600 via-warm-brown-700 to-sage-green-700 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Building2 className="w-12 h-12" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Bem-vindo ao seu novo lar!
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
                Morada das Magnólias - COHAGRA / Uberaba - MG
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col items-center text-center animate-scale-in">
                  <div className="bg-white/20 p-3 rounded-full mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">Primeira Entrega Vertical</h3>
                  <p className="text-xs opacity-80">Tecnologia de parede de concreto em Uberaba</p>
                </div>
                
                <div className="flex flex-col items-center text-center animate-scale-in">
                  <div className="bg-white/20 p-3 rounded-full mb-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">Conforto e Segurança</h3>
                  <p className="text-xs opacity-80">Sua nova moradia com cuidados específicos</p>
                </div>
                
                <div className="flex flex-col items-center text-center animate-scale-in">
                  <div className="bg-white/20 p-3 rounded-full mb-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">Convivência Harmoniosa</h3>
                  <p className="text-xs opacity-80">Orientações para viver bem em comunidade</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png" 
                  alt="Apartamento do Morada das Magnólias" 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="bg-white/10 backdrop-blur-sm p-4 text-center">
                  <p className="text-white/90 font-medium">Seu novo apartamento no Morada das Magnólias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
