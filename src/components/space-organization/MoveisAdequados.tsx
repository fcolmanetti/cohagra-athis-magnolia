
import { Sofa } from "lucide-react";

export const MoveisAdequados = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-blue-100 p-3 rounded-full mr-4">
          <Sofa className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Móveis Adequados</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">✅ Móveis Recomendados:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Móveis planejados leves e funcionais</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Peças modulares que se adaptam ao espaço</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Móveis com pés para facilitar limpeza</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>Peças multifuncionais (mesa que vira estante)</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-red-50 p-6 rounded-lg">
          <h4 className="font-semibold text-red-800 mb-3">❌ Evite:</h4>
          <ul className="space-y-2 text-red-700">
            <li>• Armários muito pesados fixados na parede</li>
            <li>• Móveis que exigem muitos furos</li>
            <li>• Peças que sobrecarregam as paredes</li>
            <li>• Móveis sem proteção em áreas úmidas</li>
          </ul>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
        <h4 className="font-semibold text-amber-800 mb-2">💡 Dica Importante:</h4>
        <p className="text-amber-700">
          Use silicone ou borrachas de vedação em móveis próximos de áreas úmidas 
          (banheiro, cozinha, lavanderia) para proteger contra a umidade.
        </p>
      </div>
    </div>
  );
};
