
import { useState } from "react";
import { Sofa, ChefHat } from "lucide-react";

interface SalasTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const SalasTab = ({ openImageModal }: SalasTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-warm-brown-100 p-3 rounded-full mr-4">
          <Sofa className="w-6 h-6 text-warm-brown-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Salas</h2>
      </div>
      
      {/* Sala de Estar */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-warm-brown-800 mb-4 flex items-center">
          <span className="bg-warm-brown-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
          Sala de Estar
        </h3>
        
        {/* Opção 1 - Sala de Estar */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-warm-brown-700 mb-4">Opção 1 - Layout Compacto</h4>
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/eadd1165-f0c9-4d6c-87e2-51240ade142b.png" 
              alt="Sala de estar - Layout compacto" 
              className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/eadd1165-f0c9-4d6c-87e2-51240ade142b.png", 
                "Sala de estar - Layout compacto",
                "Sala de estar com layout compacto e funcional"
              )}
            />
            <div className="bg-warm-brown-50 p-3 text-center">
              <p className="text-warm-brown-700 text-sm">Sala de estar com layout compacto e funcional</p>
            </div>
          </div>

          {/* Medidas Adequadas - Sala de Estar Opção 1 */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h5 className="text-md font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis - Opção 1</h5>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h6 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                <Sofa className="w-5 h-5 mr-2 text-blue-600" />
                Sala de Estar - Layout Compacto
              </h6>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-sage-green-700 font-medium">Sofá:</span>
                </div>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento máximo: <span className="font-semibold">2,65m</span></div>
                  <div>• Profundidade máxima: <span className="font-semibold">0,95m</span></div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-sage-green-700 font-medium">Rack TV:</span>
                </div>
                <div className="ml-4 text-sage-green-600">
                  <div>• Profundidade máxima: <span className="font-semibold">0,35m</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opção 2 - Sala de Estar */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-warm-brown-700 mb-4">Opção 2 - Layout Moderno</h4>
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/9234b11e-5542-4eb6-9723-ae0af2ed1a94.png" 
              alt="Sala de estar - Layout moderno" 
              className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/9234b11e-5542-4eb6-9723-ae0af2ed1a94.png", 
                "Sala de estar - Layout moderno",
                "Sala de estar com layout moderno e contemporâneo"
              )}
            />
            <div className="bg-warm-brown-50 p-3 text-center">
              <p className="text-warm-brown-700 text-sm">Sala de estar com layout moderno e contemporâneo</p>
            </div>
          </div>

          {/* Medidas Adequadas - Sala de Estar Opção 2 */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h5 className="text-md font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis - Opção 2</h5>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h6 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                <Sofa className="w-5 h-5 mr-2 text-blue-600" />
                Sala de Estar - Layout Moderno
              </h6>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-sage-green-700 font-medium">Sofá:</span>
                </div>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento máximo: <span className="font-semibold">2,65m</span></div>
                  <div>• Profundidade máxima: <span className="font-semibold">0,90m</span></div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-sage-green-700 font-medium">Painel TV:</span>
                </div>
                <div className="ml-4 text-sage-green-600">
                  <div>• Profundidade máxima: <span className="font-semibold">0,30m</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sala de Jantar */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-warm-brown-800 mb-4 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
          Sala de Jantar
        </h3>
        
        {/* Opção 1 - Sala de Jantar */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-orange-700 mb-4">Opção 1 - Layout Compacto</h4>
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/bc8d4448-f173-4a76-8044-664a3e5eb7d2.png" 
              alt="Sala de jantar - Layout compacto" 
              className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/bc8d4448-f173-4a76-8044-664a3e5eb7d2.png", 
                "Sala de jantar - Layout compacto",
                "Sala de jantar com mesa retangular para 4 pessoas - Layout compacto"
              )}
            />
            <div className="bg-orange-50 p-3 text-center">
              <p className="text-orange-700 text-sm">Sala de jantar com mesa retangular para 4 pessoas - Layout compacto</p>
            </div>
          </div>

          {/* Medidas Adequadas - Sala de Jantar Opção 1 */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h5 className="text-md font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis - Opção 1</h5>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h6 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                <ChefHat className="w-5 h-5 mr-2 text-blue-600" />
                Sala de Jantar - Layout Compacto
              </h6>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-sage-green-700 font-medium">Mesa Retangular 4 Lugares:</span>
                </div>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento máximo: <span className="font-semibold">1,40m</span></div>
                  <div>• Profundidade máxima: <span className="font-semibold">0,90m</span></div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-sage-green-700 font-medium">Buffet:</span>
                </div>
                <div className="ml-4 text-sage-green-600">
                  <div>• Profundidade máxima: <span className="font-semibold">0,40m</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opção 2 - Sala de Jantar */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-orange-700 mb-4">Opção 2 - Layout Moderno</h4>
          <div className="mb-6 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/f281f49f-6508-427d-9dde-1cd599e47394.png" 
              alt="Sala de jantar - Layout moderno" 
              className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/f281f49f-6508-427d-9dde-1cd599e47394.png", 
                "Sala de jantar - Layout moderno",
                "Sala de jantar com mesa retangular para 4 pessoas - Layout moderno"
              )}
            />
            <div className="bg-orange-50 p-3 text-center">
              <p className="text-orange-700 text-sm">Sala de jantar com mesa retangular para 4 pessoas - Layout moderno</p>
            </div>
          </div>

          {/* Medidas Adequadas - Sala de Jantar Opção 2 */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h5 className="text-md font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis - Opção 2</h5>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h6 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                <ChefHat className="w-5 h-5 mr-2 text-blue-600" />
                Sala de Jantar - Layout Moderno
              </h6>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-sage-green-700 font-medium">Mesa Retangular 4 Lugares:</span>
                </div>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento máximo: <span className="font-semibold">1,40m</span></div>
                  <div>• Profundidade máxima: <span className="font-semibold">0,90m</span></div>
                </div>
                <div className="flex justify-between mt-3">
                  <span className="text-sage-green-700 font-medium">Aparador:</span>
                </div>
                <div className="ml-4 text-sage-green-600">
                  <div>• Profundidade máxima: <span className="font-semibold">0,35m</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">✅ Dicas Essenciais:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-sage-green-500 mr-2">•</span>
              <span>Use móveis compactos e modulares que otimizam o espaço</span>
            </li>
            <li className="flex items-start">
              <span className="text-sage-green-500 mr-2">•</span>
              <span>Sofás modulares são ideais para apartamentos pequenos</span>
            </li>
            <li className="flex items-start">
              <span className="text-sage-green-500 mr-2">•</span>
              <span>Para suporte de TV, use buchas plásticas de expansão</span>
            </li>
            <li className="flex items-start">
              <span className="text-sage-green-500 mr-2">•</span>
              <span>Evite parafusos profundos nas paredes estruturais</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-amber-50 p-6 rounded-lg">
          <h4 className="font-semibold text-amber-800 mb-3">💡 Dica de Ouro:</h4>
          <p className="text-amber-700">
            Móveis com pés elevados criam sensação de amplitude e facilitam a limpeza. 
            Cores claras nas paredes e móveis refletem mais luz natural.
          </p>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-500 p-6">
        <h4 className="font-semibold text-red-800 mb-2">⚠️ Cuidados Importantes:</h4>
        <p className="text-red-700">
          Nunca fixe suportes pesados diretamente na parede sem consultar um técnico. 
          As paredes de concreto requerem buchas específicas.
        </p>
      </div>
    </div>
  );
};
