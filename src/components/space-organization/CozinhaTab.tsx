
import { ChefHat } from "lucide-react";

interface CozinhaTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const CozinhaTab = ({ openImageModal }: CozinhaTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          <ChefHat className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Cozinha</h2>
      </div>
      
      {/* Imagem da cozinha */}
      <div className="mb-8 rounded-lg overflow-hidden">
        <img 
          src="/lovable-uploads/32edfc5d-a0fb-4f08-a9fc-2cd9f12a8a9e.png" 
          alt="Cozinha do Residencial Magnólia" 
          className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => openImageModal(
            "/lovable-uploads/32edfc5d-a0fb-4f08-a9fc-2cd9f12a8a9e.png", 
            "Cozinha do Residencial Magnólia",
            "Layout da cozinha com móveis planejados e organização vertical"
          )}
        />
        <div className="bg-orange-50 p-3 text-center">
          <p className="text-orange-700 text-sm">Layout da cozinha com móveis planejados e organização vertical</p>
        </div>
      </div>

      {/* Medidas Adequadas dos Móveis - Cozinha */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Eletrodomésticos</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <span className="text-xl mr-2">🔥</span>
              Fogão
            </h4>
            <div className="space-y-2 text-sm">
              <div className="ml-4 space-y-1 text-sage-green-600">
                <div>• Largura máxima: <span className="font-semibold">0,55m</span></div>
                <div>• Profundidade máxima: <span className="font-semibold">0,65m</span></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <span className="text-xl mr-2">❄️</span>
              Geladeira
            </h4>
            <div className="space-y-2 text-sm">
              <div className="ml-4 space-y-1 text-sage-green-600">
                <div>• Largura máxima: <span className="font-semibold">0,71m</span></div>
                <div>• Profundidade máxima: <span className="font-semibold">0,68m</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4">
          <p className="text-amber-700 text-sm">
            <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
            e a circulação adequada na cozinha do Residencial Magnólia.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🍳 Organização Vertical:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Priorize prateleiras altas para utensílios menos usados</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Use ganchos na parede para panelas e utensílios</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Organize por frequência de uso: mais usados na altura dos olhos</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2">•</span>
              <span>Aproveite o espaço interno dos armários com organizadores</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-3">🌬️ Ventilação Natural:</h4>
          <p className="text-blue-700 mb-3">
            Mantenha a janela aberta durante e após o preparo das refeições para evitar:
          </p>
          <ul className="space-y-1 text-blue-700 text-sm">
            <li>• Acúmulo de umidade</li>
            <li>• Formação de mofo</li>
            <li>• Odores persistentes</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-orange-600 text-xl">🥄</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Utensílios</h4>
          <p className="text-sm text-sage-green-600">Organize por categoria e frequência de uso</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-orange-600 text-xl">🥫</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Despensa</h4>
          <p className="text-sm text-sage-green-600">Use potes transparentes para facilitar identificação</p>
        </div>
        
        <div className="text-center p-4 bg-gray-50 rounded-lg">
          <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <span className="text-orange-600 text-xl">🧽</span>
          </div>
          <h4 className="font-semibold text-warm-brown-800 mb-2">Limpeza</h4>
          <p className="text-sm text-sage-green-600">Mantenha produtos organizados e seguros</p>
        </div>
      </div>
    </div>
  );
};
