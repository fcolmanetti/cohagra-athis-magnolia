
import { Bath } from "lucide-react";

interface BanheiroTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const BanheiroTab = ({ openImageModal }: BanheiroTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-cyan-100 p-3 rounded-full mr-4">
          <Bath className="w-6 h-6 text-cyan-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Banheiro</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🚿 Soluções Inteligentes:</h3>
          <ul className="space-y-3 text-sage-green-700">
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">•</span>
              <span>Use prateleiras de pressão entre paredes</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">•</span>
              <span>Suportes adesivos evitam perfurações</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">•</span>
              <span>Organize produtos por frequência de uso</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">•</span>
              <span>Mantenha sempre limpo e ventilado</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-cyan-50 p-6 rounded-lg">
          <h4 className="font-semibold text-cyan-800 mb-3">💧 Prevenção de Problemas:</h4>
          <p className="text-cyan-700 mb-3">
            Evite mofo e umidade excessiva:
          </p>
          <ul className="space-y-1 text-cyan-700 text-sm">
            <li>• Ventile após cada banho</li>
            <li>• Seque superfícies molhadas</li>
            <li>• Verifique vazamentos regularmente</li>
            <li>• Use produtos antimofo se necessário</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-3">⚠️ Produtos Seguros:</h4>
          <p className="text-yellow-700">
            Use apenas suportes adesivos de qualidade ou prateleiras de pressão. 
            Evite furar azulejos desnecessariamente.
          </p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-3">🧴 Organização:</h4>
          <p className="text-green-700">
            Agrupe produtos por categoria: higiene pessoal, limpeza, 
            medicamentos (em local seguro e seco).
          </p>
        </div>
      </div>
    </div>
  );
};
