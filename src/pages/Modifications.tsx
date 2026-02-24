
import { ArrowLeft, Settings, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Modifications = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Alterações e Ampliações</h1>
          </div>
          <p className="text-xl text-white/90">
            O que pode e não pode ser modificado no seu apartamento
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Alerta Principal */}
          <div className="bg-red-50 border-l-4 border-red-500 p-8 mb-8 rounded-r-2xl">
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600 mr-4" />
              <h2 className="text-2xl font-bold text-red-800">ATENÇÃO FUNDAMENTAL</h2>
            </div>
            <p className="text-red-700 text-lg mb-4">
              <strong>NUNCA altere a estrutura ou abra vãos nas paredes.</strong> 
              As paredes de concreto são estruturais e qualquer modificação pode comprometer 
              a segurança de todo o edifício.
            </p>
            <p className="text-red-700">
              Consulte sempre um profissional técnico habilitado e o Síndico antes de 
              qualquer modificação, por menor que seja.
            </p>
          </div>

          {/* O que NÃO pode ser feito */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Modificações PROIBIDAS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">🚫 Estruturais:</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Quebrar ou perfurar paredes estruturais</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Abrir portas ou janelas em novas posições</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Remover ou alterar vigas e pilares</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Cortar ou danificar elementos estruturais</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-4">🚫 Instalações:</h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Alterar instalações elétricas sem autorização</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Modificar tubulações hidráulicas</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Instalar equipamentos que sobrecarreguem a rede</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                    <span>Alterar sistema de ventilação</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-100 p-6 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-3">⚠️ Consequências Graves:</h4>
              <ul className="space-y-2 text-red-700">
                <li>• Comprometimento da segurança estrutural</li>
                <li>• Risco de desabamento ou rachaduras</li>
                <li>• Perda da garantia do imóvel</li>
                <li>• Responsabilização civil e criminal</li>
                <li>• Possível perda do direito à moradia</li>
              </ul>
            </div>
          </div>

          {/* O que pode ser feito (com autorização) */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Modificações PERMITIDAS (com autorização)</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Internas Simples:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Pintura de paredes internas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Troca de pisos (sem quebrar contrapiso)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Instalação de armários embutidos leves</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Mudança de layout de móveis</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Decorativas:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Papel de parede em paredes não estruturais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Cortinas e persianas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Iluminação decorativa</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 mt-0.5 text-green-500" />
                    <span>Plantas e jardins em varandas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <h4 className="font-semibold text-yellow-800 mb-2">📋 IMPORTANTE: Processo de Autorização</h4>
              <p className="text-yellow-700 mb-3">
                Mesmo para modificações permitidas, você deve:
              </p>
              <ol className="space-y-1 text-yellow-700">
                <li>1. Consultar o Síndico sobre a viabilidade</li>
                <li>2. Apresentar projeto técnico quando necessário</li>
                <li>3. Aguardar autorização por escrito</li>
                <li>4. Usar apenas profissionais qualificados</li>
                <li>5. Preservar segurança e ventilação natural</li>
              </ol>
            </div>
          </div>

          {/* Consultoria Técnica */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <span className="text-blue-600 text-xl">👨‍🔧</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Consultoria Técnica Obrigatória</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-4">🎓 Profissionais Habilitados:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Arquiteto (CAU - Conselho de Arquitetura)</li>
                  <li>• Engenheiro Civil (CREA - Conselho Regional)</li>
                  <li>• Técnico em Edificações credenciado</li>
                  <li>• Especialista em estruturas de concreto</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-4">📋 Documentos Necessários:</h4>
                <ul className="space-y-2 text-purple-700">
                  <li>• Planta baixa atual do apartamento</li>
                  <li>• Projeto detalhado da modificação</li>
                  <li>• ART ou RRT do profissional</li>
                  <li>• Autorização do Síndico</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">📝</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Projeto Técnico</h4>
                <p className="text-sm text-sage-green-600">Elaboração por profissional</p>
              </div>
              
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">✅</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Autorização</h4>
                <p className="text-sm text-sage-green-600">Aprovação necessária do Síndico</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/tecnologia" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white rounded-lg hover:from-orange-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Tecnologia de Parede de Concreto
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Modifications;
