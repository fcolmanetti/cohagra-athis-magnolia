
export const MoveisPlanjados = () => {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold text-orange-800 mb-6 flex items-center">
        <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">🪑</span>
        Móveis Planejados
      </h3>
      
      {/* Opção 1 - Layout Compacto */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">1</span>
          Opção 1 - Layout Compacto
        </h4>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
          <h5 className="text-md font-semibold text-orange-800 mb-4 flex items-center">
            <span className="text-2xl mr-3">🗄️</span>
            Gabinete Inferior
          </h5>
          <ul className="space-y-3 text-sm text-orange-700">
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span><strong>Altura padrão:</strong> 85cm com gavetas para utensílios</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span><strong>Profundidade:</strong> 60cm para espaço adequado</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span><strong>Material:</strong> MDF ou MDP com acabamento resistente à umidade</span>
            </li>
            <li className="flex items-start">
              <span className="text-orange-500 mr-2 mt-1">•</span>
              <span><strong>Funcionalidade:</strong> Gavetas são mais funcionais que prateleiras</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Opção 2 - Layout Moderno */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
          <span className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">2</span>
          Opção 2 - Layout Moderno
        </h4>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Armário Superior */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <h5 className="text-md font-semibold text-blue-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">📦</span>
              Armário Superior
            </h5>
            <ul className="space-y-3 text-sm text-blue-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Altura:</strong> 60-80cm, ideal para louças e mantimentos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Profundidade:</strong> 35-40cm para armários superiores</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                <span><strong>Instalação:</strong> Aproveite altura até o teto</span>
              </li>
            </ul>
          </div>

          {/* Gabinete Inferior */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 border border-orange-200">
            <h5 className="text-md font-semibold text-orange-800 mb-4 flex items-center">
              <span className="text-2xl mr-3">🗄️</span>
              Gabinete Inferior
            </h5>
            <ul className="space-y-3 text-sm text-orange-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Altura padrão:</strong> 85cm com gavetas para utensílios</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Profundidade:</strong> 60cm para espaço adequado</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">•</span>
                <span><strong>Material:</strong> MDF ou MDP com acabamento resistente à umidade</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dicas Importantes */}
      <div className="mt-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-6 rounded-r-lg">
        <h4 className="text-lg font-semibold text-amber-800 mb-3 flex items-center">
          <span className="text-xl mr-2">💡</span>
          Dicas Importantes para Móveis Planejados
        </h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-700">
          <div>
            <p className="mb-2"><strong>Aproveitamento do Espaço:</strong></p>
            <ul className="space-y-1 ml-4">
              <li>• Use cantos com sistemas de canto-reto</li>
              <li>• Aproveite altura até o teto</li>
              <li>• Gavetas são mais funcionais que prateleiras</li>
            </ul>
          </div>
          <div>
            <p className="mb-2"><strong>Funcionalidade:</strong></p>
            <ul className="space-y-1 ml-4">
              <li>• Organize por zona de uso (preparo, cocção, limpeza)</li>
              <li>• Deixe espaço livre para circulação (90cm)</li>
              <li>• Considere iluminação interna nos armários</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
