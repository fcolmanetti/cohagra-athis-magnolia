
import { ArrowLeft, Phone, Mail, MapPin, Clock, Building2, Users, AlertTriangle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Contacts = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ← Voltar para o início
          </Link>
          <div className="flex items-center mb-4">
            <Phone className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Contatos Úteis</h1>
          </div>
          <p className="text-xl text-white/90">
            Todos os contatos importantes para sua vida no Morada das Magnólias
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Imagem da COHAGRA */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ea4cfe7c-3a48-49dc-923a-fe4d3169deec.png" 
              alt="Fachada da COHAGRA - Companhia de Habitação do Vale do Rio Grande" 
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>

          {/* COHAGRA - Contato Principal */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">COHAGRA - Companhia de Habitação do Vale do Rio Grande</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Telefone Principal</p>
                    <p className="text-sage-green-700">(34) 3326-3100</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">E-mail</p>
                    <p className="text-sage-green-700">controleinterno.cohagra@uberaba.mg.gov.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Endereço</p>
                    <p className="text-sage-green-700">
                      Av. das Acácias, 43 - Vila Olimpica<br />
                      Uberaba - MG
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <p className="font-semibold text-warm-brown-800">Horário de Atendimento</p>
                    <p className="text-sage-green-700">
                      Segunda a Sexta: 7h às 13h<br />
                      Sábado, Domingo e Feriados: Fechado
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Emergências e Urgências */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Emergências</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 p-6 rounded-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-red-800 mb-2">Bombeiros</h3>
                <p className="text-2xl font-bold text-red-600">193</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Polícia Militar</h3>
                <p className="text-2xl font-bold text-blue-600">190</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-green-800 mb-2">SAMU</h3>
                <p className="text-2xl font-bold text-green-600">192</p>
              </div>
            </div>
          </div>

          {/* Serviços Públicos */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-sage-green-100 p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-sage-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Serviços Públicos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">CEMIG (Energia Elétrica)</h4>
                  <p className="text-sage-green-700">📞 116</p>
                  <p className="text-sm text-sage-green-600">Emergências: 116</p>
                </div>
                
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">CODAU (Água, Esgoto e Limpeza Urbana)</h4>
                  <p className="text-sage-green-700">📞 (34) 3318-5200</p>
                  <p className="text-sm text-sage-green-600">Uberaba - MG</p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Defesa Civil - Uberaba</h4>
                  <p className="text-sage-green-700">📞 199</p>
                  <p className="text-sm text-sage-green-600">(34) 3318-1199</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Procon Municipal - Uberaba</h4>
                  <p className="text-sage-green-700">📞 (34) 3318-1600</p>
                  <p className="text-sm text-sage-green-600">Uberaba - MG</p>
                </div>
                
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-warm-brown-800">Ouvidoria Municipal - Uberaba</h4>
                  <p className="text-sage-green-700">📞 (34) 3318-1000</p>
                  <p className="text-sm text-sage-green-600">Uberaba - MG</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Links Úteis</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <a href="https://www.cohagra.com.br/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Site da COHAGRA</span>
                </a>
                
                <a href="https://www.cemig.com.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">CEMIG - 2ª Via</span>
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="https://www.codau.com.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">CODAU - 2ª Via</span>
                </a>
                
                <a href="https://www.uberaba.mg.gov.br" target="_blank" rel="noopener noreferrer"
                   className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <ExternalLink className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-blue-700 font-medium">Prefeitura de Uberaba</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-sage-green-600 text-white rounded-lg hover:from-blue-600 hover:to-sage-green-700 transition-all duration-300 text-lg font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
