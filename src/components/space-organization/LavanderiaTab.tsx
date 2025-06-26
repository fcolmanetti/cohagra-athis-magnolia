
import { Shirt } from "lucide-react";

interface LavanderiaTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const LavanderiaTab = ({ openImageModal }: LavanderiaTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 p-3 rounded-full mr-4">
          <Shirt className="w-6 h-6 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Lavanderia</h2>
      </div>
      
      {/* Imagem da lavanderia */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/2c282db3-dc17-49e8-a3e5-cbeb2469b6db.png" 
          alt="Área da lavanderia do Residencial Magnólia" 
          className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openImageModal(
            "/lovable-uploads/2c282db3-dc17-49e8-a3e5-cbeb2469b6db.png", 
            "Área da lavanderia do Residencial Magnólia",
            "Área de serviço com lavadora e organização eficiente"
          )}
        />
        <div className="bg-indigo-50 p-3 text-center">
          <p className="text-indigo-700 text-sm">Área de serviço com lavadora e organização eficiente</p>
        </div>
      </div>

      {/* Medidas Adequadas dos Móveis - Lavanderia */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <Shirt className="w-5 h-5 mr-2 text-blue-600" />
              Armário Alto
            </h4>
            <div className="space-y-2 text-sm">
              <div className="ml-4 space-y-1 text-sage-green-600">
                <div>• Comprimento máximo: <span className="font-semibold">2,40m</span></div>
                <div>• Profundidade máxima: <span className="font-semibold">0,35m</span></div>
                <div>• Altura máxima: <span className="font-semibold">2,60m</span></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <span className="text-xl mr-2">🌀</span>
              Máquina de Lavar
            </h4>
            <div className="space-y-2 text-sm">
              <div className="ml-4 space-y-1 text-sage-green-600">
                <div>• Largura máxima: <span className="font-semibold">0,65m</span></div>
                <div>• Profundidade máxima: <span className="font-semibold">0,792m</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
          <p className="text-amber-700 text-sm">
            <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
            e a circulação adequada na lavanderia do Residencial Magnólia.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">👕 Equipamentos Essenciais:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Varal retrátil economiza espaço quando não usado</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Tanques com armário inferior aumentam armazenamento</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Prateleiras para produtos de limpeza</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">•</span>
              <span>Cesto organizador para roupas sujas</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-orange-50 p-6 rounded-lg">
          <h4 className="font-semibold text-orange-800 mb-3">☀️ Secagem Eficiente:</h4>
          <p className="text-orange-700 mb-3">
            Aproveite a ventilação natural:
          </p>
          <ul className="space-y-1 text-orange-700 text-sm">
            <li>• Estenda roupas logo após lavar</li>
            <li>• Use todo o espaço do varal</li>
            <li>• Evite sobrepor peças</li>
            <li>• Aproveite o sol da manhã</li>
          </ul>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
        <h4 className="font-semibold text-red-800 mb-2">💧 Mantenha Sempre Seco:</h4>
        <p className="text-red-700">
          Água acumulada pode causar infiltrações e danificar a estrutura. 
          Seque sempre a área após uso e verifique se não há vazamentos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-indigo-600 text-xl">🧺</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Organização</h4>
          <p className="text-sm text-sage-green-600">Separe roupas por cor e tipo de tecido</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-indigo-600 text-xl">🧴</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Produtos</h4>
          <p className="text-sm text-sage-green-600">Mantenha detergentes em local seco e arejado</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-indigo-600 text-xl">🌱</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Sustentabilidade</h4>
          <p className="text-sm text-sage-green-600">Use produtos ecológicos quando possível</p>
        </div>
      </div>
    </div>
  );
};
