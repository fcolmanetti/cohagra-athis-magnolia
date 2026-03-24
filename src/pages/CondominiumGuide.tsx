
import { ArrowLeft, Building2, TreePine } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const CondominiumGuide = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold">Conhecendo o Condomínio</h1>
          </div>
          <p className="text-xl text-white/90">
            Conheça a infraestrutura e o paisagismo do seu condomínio
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Perspectivas 3D */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Visão Geral do Condomínio</h2>
            </div>

            <p className="text-sage-green-700 mb-6 text-lg">
              Conheça a infraestrutura disponível no seu condomínio, com destaque para o paisagismo e as áreas comuns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-lg overflow-hidden">
                <img src="/images/condominio-perspectiva-2.png" alt="Perspectiva aérea do condomínio Morada das Magnólias com paisagismo" className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center text-green-700 bg-green-50 p-2">Perspectiva aérea - Vista geral</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/condominio-perspectiva-1.png" alt="Perspectiva aérea do condomínio com destaque para áreas comuns" className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center text-green-700 bg-green-50 p-2">Perspectiva aérea - Áreas comuns</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/condominio-paisagismo-1.png" alt="Paisagismo interno do condomínio com jardins e piso tátil" className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center text-green-700 bg-green-50 p-2">Paisagismo e acessibilidade</p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img src="/images/condominio-paisagismo-2.png" alt="Vias internas do condomínio com paisagismo" className="w-full h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity" />
                <p className="text-sm text-center text-green-700 bg-green-50 p-2">Vias internas e paisagismo</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden mb-6">
              <img src="/images/condominio-implantacao.jpg" alt="Planta de implantação geral do condomínio Morada das Magnólias" className="w-full h-auto object-contain bg-gray-50 cursor-pointer hover:opacity-90 transition-opacity" />
              <p className="text-sm text-center text-green-700 bg-green-50 p-2">Planta de Implantação Geral</p>
            </div>
          </div>

          {/* Infraestrutura */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <TreePine className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Infraestrutura Disponível</h2>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <ul className="space-y-3 text-green-700">
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Centro Comunitário</strong></li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Sala do Síndico</strong></li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Biblioteca</strong></li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Espaço Descoberto para Lazer e Recreação Infantil</strong></li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Bicicletário</strong> (60 unidades)</li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Depósito de Lixo</strong></li>
                <li className="flex items-start"><span className="font-bold mr-2">•</span><strong>Guarita</strong></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/apartamento" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-warm-brown-500 to-sage-green-600 text-white rounded-lg hover:from-warm-brown-600 hover:to-sage-green-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Conhecendo seu Apartamento
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CondominiumGuide;
