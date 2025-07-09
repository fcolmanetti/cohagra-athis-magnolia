
import { ArrowLeft, Building2, AlertTriangle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const ApartmentGuide = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-warm-brown-600 to-warm-brown-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Building2 className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Conhecendo seu Apartamento</h1>
          </div>
          <p className="text-xl text-white/90">
            Entenda as características únicas da sua nova moradia
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Planta Baixa do Apartamento */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Building2 className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Layout do Apartamento</h2>
            </div>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/2739f78f-ac39-496c-a1f8-ae27fb6c4c36.png" 
                alt="Planta baixa detalhada do apartamento do Residencial Magnólia" 
                className="w-full h-96 md:h-[500px] object-contain bg-gray-50"
              />
              <div className="bg-blue-50 p-3 text-center">
                <p className="text-blue-700 text-sm">Planta baixa oficial do apartamento - Residencial Magnólia com dimensões</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">📐 Entendendo o Layout:</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Sala TV:</strong> 6,12 m²</li>
                <li>• <strong>Sala Jantar:</strong> 6,58 m²</li>
                <li>• <strong>Cozinha:</strong> 6,56 m²</li>
                <li>• <strong>Quarto 1:</strong> 6,76 m²</li>
                <li>• <strong>Quarto 2:</strong> 8,07 m²</li>
                <li>• <strong>Banheiro:</strong> 3,31 m²</li>
                <li>• <strong>Lavanderia:</strong> 2,29 m²</li>
                <li>• <strong>Sacada:</strong> 1,91 m²</li>
              </ul>
            </div>
          </div>

          {/* Paredes Estruturais */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Paredes Estruturais</h2>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ ATENÇÃO IMPORTANTE</h3>
              <p className="text-red-700">
                As paredes estruturais <strong>NÃO DEVEM</strong> ser perfuradas ou alteradas. 
                Evite fixar suportes ou armários pesados sem orientação técnica.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-warm-brown-800 mb-3">❌ Não Faça:</h4>
                <ul className="space-y-2 text-sage-green-700">
                  <li>• Furos profundos nas paredes</li>
                  <li>• Fixação de armários pesados</li>
                  <li>• Alterações na estrutura</li>
                  <li>• Uso de parafusos longos</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-warm-brown-800 mb-3">✅ Alternativas Seguras:</h4>
                <ul className="space-y-2 text-sage-green-700">
                  <li>• Buchas plásticas de expansão</li>
                  <li>• Móveis apoiados no chão</li>
                  <li>• Fixadores adesivos</li>
                  <li>• Consulte sempre um técnico</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Instalações */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Instalações Integradas</h2>
            </div>
            
            <p className="text-sage-green-700 mb-6 text-lg">
              Os apartamentos têm instalações elétricas e hidráulicas integradas às paredes. 
              Consulte sempre o manual da construtora antes de qualquer intervenção.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-3">🔧 Dica Importante:</h3>
              <p className="text-blue-700">
                Antes de furar qualquer parede, localize onde passam os fios elétricos e 
                tubulações hidráulicas. Use um detector de metal ou consulte a planta baixa.
              </p>
            </div>
          </div>


          <div className="mt-12 text-center">
            <Link 
              to="/espacos" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-brown-500 to-sage-green-600 text-white rounded-lg hover:from-warm-brown-600 hover:to-sage-green-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Organização dos Espaços
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApartmentGuide;
