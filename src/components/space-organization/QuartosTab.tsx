
import { Bed } from "lucide-react";

interface QuartosTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const QuartosTab = ({ openImageModal }: QuartosTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Bed className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Quartos</h2>
      </div>
      
      {/* Quarto do Casal */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-warm-brown-800 mb-4 flex items-center">
          <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
          Quarto do Casal
        </h3>
        
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/e9ed53e7-522f-460f-a69c-b6e33983665b.png" 
            alt="Quarto casal do Residencial Magnólia - Opção 1" 
            className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openImageModal(
              "/lovable-uploads/e9ed53e7-522f-460f-a69c-b6e33983665b.png", 
              "Quarto casal do Residencial Magnólia - Opção 1",
              "Quarto casal com cama queen size e decoração moderna"
            )}
          />
          <div className="bg-blue-50 p-3 text-center">
            <p className="text-blue-700 text-sm">Quarto casal com cama queen size e decoração moderna</p>
          </div>
        </div>
      </div>

      {/* Quarto dos Filhos */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-warm-brown-800 mb-4 flex items-center">
          <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
          Quarto dos Filhos
        </h3>
        
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/a95f743f-5dec-4ec9-9909-030001d0ca4d.png" 
            alt="Quarto com beliche do Residencial Magnólia - Opção 2" 
            className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openImageModal(
              "/lovable-uploads/a95f743f-5dec-4ec9-9909-030001d0ca4d.png", 
              "Quarto com beliche do Residencial Magnólia - Opção 2",
              "Quarto com beliche e decoração colorida para crianças"
            )}
          />
          <div className="bg-green-50 p-3 text-center">
            <p className="text-green-700 text-sm">Quarto com beliche e decoração colorida para crianças</p>
          </div>
        </div>
      </div>

      {/* Medidas Adequadas dos Móveis - Quartos */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis</h3>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <Bed className="w-5 h-5 mr-2 text-blue-600" />
              Opções de Cama
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-sage-green-700 font-medium">Opção 1 - Queen Size:</span>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento: <span className="font-semibold">1,98m</span></div>
                  <div>• Largura: <span className="font-semibold">1,58m</span></div>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-sage-green-700 font-medium">Opção 2 - Cama Solteiro e Beliche:</span>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Beliche: 1,98m x 0,95m</div>
                  <div>• Cama solteiro: 1,88m x 0,88m</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
              <span className="text-xl mr-2">👕</span>
              Móveis de Apoio
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-sage-green-700 font-medium">Guarda-Roupas:</span>
                <div className="ml-4 space-y-1 text-sage-green-600">
                  <div>• Comprimento máximo: <span className="font-semibold">1,40m</span></div>
                  <div>• Profundidade máxima: <span className="font-semibold">0,60m</span></div>
                  <div>• Altura máxima: <span className="font-semibold">2,60m</span></div>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-sage-green-700 font-medium">Mesa de Cabeceira:</span>
                <div className="ml-4 text-sage-green-600">
                  <div>• Largura máxima: <span className="font-semibold">0,50m</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
          <p className="text-amber-700 text-sm">
            <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
            e a circulação adequada nos quartos do Residencial Magnólia.
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🛏️ Otimização do Espaço:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Beliches maximizam o espaço em quartos compartilhados</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Camas com gavetas oferecem armazenamento extra</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Aproveite nichos e cantoneiras para decoração</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Móveis multifuncionais economizam espaço</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <h4 className="font-semibold text-purple-800 mb-3">💜 Ambiente Acolhedor:</h4>
          <p className="text-purple-700 mb-3">
            Crie um ambiente relaxante com:
          </p>
          <ul className="space-y-1 text-purple-700 text-sm">
            <li>• Iluminação suave e indireta</li>
            <li>• Cores neutras e tons pastéis</li>
            <li>• Tecidos macios e confortáveis</li>
            <li>• Plantas pequenas para purificar o ar</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6">
        <h4 className="font-semibold text-green-800 mb-2">🌱 Dica Sustentável:</h4>
        <p className="text-green-700">
          Organize roupas por estação e doe aquelas que não usa mais. 
          Isso libera espaço e ajuda outras famílias.
        </p>
      </div>
    </div>
  );
};
