
import { ArrowLeft, Wrench, Droplets, Shield, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Maintenance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            ← Voltar para o início
          </Link>
          <div className="flex items-center mb-4">
            <Wrench className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Manutenção e Conservação</h1>
          </div>
          <p className="text-xl text-white/90">
            Mantenha seu apartamento sempre em bom estado com os cuidados corretos
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Fixação Segura */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <Shield className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Fixação Segura</h2>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">⚠️ REGRA FUNDAMENTAL</h3>
              <p className="text-red-700">
                Não utilize pregos ou parafusos sem orientação técnica. As paredes de concreto 
                requerem técnicas específicas para evitar danos estruturais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">✅ Alternativas Seguras:</h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Fixadores adesivos:</strong> Para objetos leves (até 2kg)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Móveis apoiados:</strong> Estantes e armários no chão</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Suportes magnéticos:</strong> Para superfícies metálicas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Ganchos autoadesivos:</strong> Removíveis e seguros</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">🔧 Quando Furar é Necessário:</h4>
                <ul className="space-y-3 text-blue-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Consulte um técnico especializado</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Use buchas específicas para concreto</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Verifique localização de fiação e tubulação</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Respeite limites de peso</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Limpeza das Paredes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <span className="text-blue-600 text-xl">🧽</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Limpeza das Paredes</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🧼 Método Correto:</h3>
                <ol className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span>Use pano úmido (não encharcado)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span>Aplique sabão neutro diluído</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span>Movimentos suaves, sem esfregar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span>Seque com pano limpo e seco</span>
                  </li>
                </ol>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-3">❌ Nunca Use:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Produtos abrasivos (saponáceos)</li>
                  <li>• Esponjas de aço</li>
                  <li>• Solventes químicos</li>
                  <li>• Água em excesso</li>
                  <li>• Escovas duras</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 Dica Especial:</h4>
              <p className="text-yellow-700">
                Para manchas persistentes, use uma mistura de bicarbonato de sódio com água. 
                Aplique, deixe agir por 10 minutos e remova com pano úmido.
              </p>
            </div>
          </div>

          {/* Prevenção de Vazamentos */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-cyan-100 p-3 rounded-full mr-4">
                <Droplets className="w-6 h-6 text-cyan-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Prevenção de Vazamentos</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-cyan-50 rounded-lg">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-cyan-600 text-2xl">🚿</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Torneiras</h3>
                <p className="text-sage-green-700 text-sm">
                  Verifique gotejamentos e aperte conexões soltas regularmente
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🕳️</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Ralos</h3>
                <p className="text-sage-green-700 text-sm">
                  Mantenha limpos e verifique se não há obstruções
                </p>
              </div>

              <div className="text-center p-6 bg-indigo-50 rounded-lg">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 text-2xl">🔧</span>
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Conexões</h3>
                <p className="text-sage-green-700 text-sm">
                  Observe conexões de máquina de lavar e aquecedor
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6">
              <h4 className="font-semibold text-red-800 mb-2">🚨 Ação Imediata em Vazamentos:</h4>
              <ol className="text-red-700 space-y-1">
                <li>1. Feche o registro de água</li>
                <li>2. Desligue equipamentos elétricos próximos</li>
                <li>3. Avise imediatamente o síndico</li>
                <li>4. Documente com fotos se possível</li>
              </ol>
            </div>
          </div>

          {/* Cronograma de Manutenção */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <AlertCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Cronograma de Manutenção</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4">📅 Manutenção Mensal:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Limpeza geral das paredes</li>
                  <li>• Verificação de torneiras e ralos</li>
                  <li>• Limpeza de filtros de ar</li>
                  <li>• Organização de armários</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">📋 Manutenção Semestral:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Inspeção completa de instalações</li>
                  <li>• Verificação de vedações</li>
                  <li>• Limpeza profunda de ralos</li>
                  <li>• Revisão de equipamentos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/condominio" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-sage-green-600 text-white rounded-lg hover:from-orange-600 hover:to-sage-green-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Viver em Condomínio
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Maintenance;
