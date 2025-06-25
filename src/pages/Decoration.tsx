
import { ArrowLeft, Palette, Home, Lightbulb, Camera, Heart, Sparkles, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Decoration = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Palette className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Decoração e Interiores</h1>
          </div>
          <p className="text-xl text-white/90">
            Transforme seu lar em um ambiente acolhedor, bonito e cheio de personalidade
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Image - Apartamento Real */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/c0397237-44b4-47d9-9a9c-0c07160210c4.png" 
              alt="Sala decorada do Residencial Magnólia" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="bg-white p-4 text-center">
              <p className="text-purple-700 font-medium">Sala decorada com harmonia de cores e elementos aconchegantes</p>
            </div>
          </div>

          {/* Cores e Harmonia */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Cores e Harmonia</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎨 Paleta de Cores Base:</h4>
                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="h-8 bg-white border rounded shadow-sm"></div>
                  <div className="h-8 bg-gray-100 rounded shadow-sm"></div>
                  <div className="h-8 bg-blue-100 rounded shadow-sm"></div>
                  <div className="h-8 bg-green-100 rounded shadow-sm"></div>
                </div>
                <p className="text-blue-700 text-sm mb-4">
                  Base neutra com toques de cor para criar harmonia e amplitude
                </p>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• 70% cores neutras (branco, bege, cinza claro)</li>
                  <li>• 20% cores secundárias (azul, verde suave)</li>
                  <li>• 10% cores de destaque (amarelo, coral)</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">🌈 Combinações que Funcionam:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-200 rounded"></div>
                    <div className="w-4 h-4 bg-white border rounded"></div>
                    <div className="w-4 h-4 bg-yellow-200 rounded"></div>
                    <span className="text-sm text-green-700">Azul + Branco + Amarelo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-200 rounded"></div>
                    <div className="w-4 h-4 bg-amber-100 rounded"></div>
                    <div className="w-4 h-4 bg-pink-200 rounded"></div>
                    <span className="text-sm text-green-700">Verde + Bege + Rosa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-orange-200 rounded"></div>
                    <div className="w-4 h-4 bg-teal-200 rounded"></div>
                    <span className="text-sm text-green-700">Cinza + Laranja + Azul</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
              <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                <Sun className="w-5 h-5 mr-2" />
                Psicologia das Cores no Lar:
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium text-blue-700">💙 Azul</p>
                  <p className="text-blue-600">Tranquilidade e serenidade</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">💚 Verde</p>
                  <p className="text-green-600">Equilíbrio e renovação</p>
                </div>
                <div>
                  <p className="font-medium text-yellow-700">💛 Amarelo</p>
                  <p className="text-yellow-600">Energia e alegria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Iluminação e Ambiente */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <Lightbulb className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Iluminação e Ambiente</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Luz Natural</h3>
                <ul className="text-sage-green-700 text-sm space-y-1">
                  <li>• Cortinas leves e translúcidas</li>
                  <li>• Espelhos para refletir luz</li>
                  <li>• Cores claras nas paredes</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Luz Artificial</h3>
                <ul className="text-sage-green-700 text-sm space-y-1">
                  <li>• LEDs de luz quente (3000K)</li>
                  <li>• Luminárias com dimmer</li>
                  <li>• Luz indireta aconchegante</li>
                </ul>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-warm-brown-800 mb-3">Luz Decorativa</h3>
                <ul className="text-sage-green-700 text-sm space-y-1">
                  <li>• Cordões de LED nas prateleiras</li>
                  <li>• Velas aromáticas seguras</li>
                  <li>• Abajures com design especial</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
              <h4 className="font-semibold text-amber-800 mb-2">💡 Dica de Iluminação:</h4>
              <p className="text-amber-700">
                Crie camadas de luz: uma principal (teto), uma de tarefa (mesa/leitura) 
                e uma de ambiente (decorativa). Isso torna o espaço mais acolhedor e funcional.
              </p>
            </div>
          </div>

          {/* Elementos Decorativos */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-pink-100 p-3 rounded-full mr-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Elementos Decorativos</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🖼️ Arte e Personalidade:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Quadros com temas que você ama</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Fotos da família em porta-retratos bonitos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Objetos artesanais únicos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Prateleiras com livros e decoração</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">🌿 Vida e Natureza:</h3>
                <ul className="space-y-3 text-sage-green-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Plantas pequenas e fáceis de cuidar</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Vasos decorativos de diferentes tamanhos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Flores frescas ocasionalmente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Elementos em madeira natural</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-rose-50 p-6 rounded-lg text-center">
                <div className="bg-rose-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-rose-600 text-xl">🛋️</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Têxteis</h4>
                <p className="text-sm text-sage-green-600">Almofadas, mantas e cortinas trazem conforto e cor</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 text-xl">🏺</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Objetos</h4>
                <p className="text-sm text-sage-green-600">Vasos, esculturas e itens com significado pessoal</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">🕯️</span>
                </div>
                <h4 className="font-semibold text-warm-brown-800 mb-2">Aromas</h4>
                <p className="text-sm text-sage-green-600">Velas, difusores e plantas aromáticas</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Regra dos Ímpares:
              </h4>
              <p className="text-purple-700">
                Agrupe objetos decorativos em números ímpares (3, 5, 7). 
                Isso cria um visual mais interessante e dinâmico para os olhos.
              </p>
            </div>
          </div>

          {/* Estilos de Decoração */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Camera className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Estilos de Decoração</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🏠 Minimalista</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Cores neutras</li>
                  <li>• Poucos objetos</li>
                  <li>• Linhas limpas</li>
                  <li>• Funcionalidade</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🌿 Boho</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Cores terrosas</li>
                  <li>• Plantas abundantes</li>
                  <li>• Texturas naturais</li>
                  <li>• Peças artesanais</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🏭 Industrial</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Cinza e preto</li>
                  <li>• Metal e concreto</li>
                  <li>• Luz direta</li>
                  <li>• Móveis robustos</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🌸 Romântico</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Rosa e branco</li>
                  <li>• Tecidos delicados</li>
                  <li>• Flores e rendas</li>
                  <li>• Luz suave</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🏖️ Coastal</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Azul e branco</li>
                  <li>• Madeira clara</li>
                  <li>• Elementos marítimos</li>
                  <li>• Luz natural</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <h4 className="font-semibold text-warm-brown-800 mb-3">🎨 Eclético</h4>
                <ul className="space-y-1 text-sm text-sage-green-600">
                  <li>• Mix de estilos</li>
                  <li>• Cores vibrantes</li>
                  <li>• Peças únicas</li>
                  <li>• Criatividade livre</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dicas Econômicas */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-600 text-xl">💰</span>
              </div>
              <h2 className="text-2xl font-bold text-warm-brown-800">Decoração com Orçamento</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">💡 Dicas Econômicas:</h4>
                <ul className="space-y-2 text-green-700">
                  <li>• Repinte móveis antigos</li>
                  <li>• Faça você mesmo (DIY)</li>
                  <li>• Compre em feiras e brechós</li>
                  <li>• Use plantas como decoração</li>
                  <li>• Troque objetos com amigos</li>
                  <li>• Reutilize embalagens bonitas</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🛠️ Projetos Simples:</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Quadros com tecido e bastidor</li>
                  <li>• Vasos decorados com barbante</li>
                  <li>• Almofadas com tecidos novos</li>
                  <li>• Prateleiras com caixotes</li>
                  <li>• Espelhos com moldura DIY</li>
                  <li>• Luminárias com vidros</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/manutencao" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Manutenção e Conservação
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Decoration;
