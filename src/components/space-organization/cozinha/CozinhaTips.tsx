
export const CozinhaTips = () => {
  return (
    <>
      {/* Importante */}
      <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
        <p className="text-amber-700 text-sm">
          <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
          e a circulação adequada na cozinha do Residencial Magnólia.
        </p>
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
    </>
  );
};
