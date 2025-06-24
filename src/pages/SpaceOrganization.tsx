import { ArrowLeft, Layout, Sofa, ChefHat, Bed, Bath, Shirt, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageModal } from "../components/ImageModal";

const SpaceOrganization = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    caption?: string;
  } | null>(null);

  const openImageModal = (src: string, alt: string, caption?: string) => {
    setSelectedImage({ src, alt, caption });
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="bg-gradient-to-r from-sage-green-600 to-sage-green-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao início
          </Link>
          <div className="flex items-center mb-4">
            <Layout className="w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Organização dos Espaços</h1>
          </div>
          <p className="text-xl text-white/90">
            Dicas práticas para organizar cada ambiente do seu apartamento
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Planta Baixa do Apartamento */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/2739f78f-ac39-496c-a1f8-ae27fb6c4c36.png" 
              alt="Planta baixa detalhada do apartamento do Residencial Magnólia" 
              className="w-full h-96 md:h-[500px] object-contain bg-white cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/2739f78f-ac39-496c-a1f8-ae27fb6c4c36.png", 
                "Planta baixa detalhada do apartamento do Residencial Magnólia",
                "Planta baixa do apartamento com dimensões dos ambientes"
              )}
            />
            <div className="bg-white p-4 text-center">
              <p className="text-sage-green-700 font-medium">Planta baixa do apartamento com dimensões dos ambientes</p>
            </div>
          </div>

          {/* Hero Image - Apartamento Real */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png" 
              alt="Sala integrada do Residencial Magnólia" 
              className="w-full h-64 md:h-80 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png", 
                "Sala integrada do Residencial Magnólia",
                "Apartamento do Residencial Magnólia - Layout integrado otimizado"
              )}
            />
            <div className="bg-white p-4 text-center">
              <p className="text-sage-green-700 font-medium">Apartamento do Residencial Magnólia - Layout integrado otimizado</p>
            </div>
          </div>

          <Tabs defaultValue="sala" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="sala">Sala</TabsTrigger>
              <TabsTrigger value="cozinha">Cozinha</TabsTrigger>
              <TabsTrigger value="quartos">Quartos</TabsTrigger>
              <TabsTrigger value="banheiro">Banheiro</TabsTrigger>
              <TabsTrigger value="lavanderia">Lavanderia</TabsTrigger>
            </TabsList>

            {/* Sala */}
            <TabsContent value="sala">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-warm-brown-100 p-3 rounded-full mr-4">
                    <Sofa className="w-6 h-6 text-warm-brown-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Sala de Estar</h2>
                </div>
                
                {/* Imagem da sala integrada */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/c0397237-44b4-47d9-9a9c-0c07160210c4.png" 
                    alt="Sala de estar do Residencial Magnólia" 
                    className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal(
                      "/lovable-uploads/c0397237-44b4-47d9-9a9c-0c07160210c4.png", 
                      "Sala de estar do Residencial Magnólia",
                      "Exemplo de organização da sala com móveis compactos e funcionais"
                    )}
                  />
                  <div className="bg-warm-brown-50 p-3 text-center">
                    <p className="text-warm-brown-700 text-sm">Exemplo de organização da sala com móveis compactos e funcionais</p>
                  </div>
                </div>

                {/* Medidas Adequadas dos Móveis */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                        <Sofa className="w-5 h-5 mr-2 text-blue-600" />
                        Sala de Estar
                      </h4>
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

                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2 text-blue-600" />
                        Sala de Jantar
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-sage-green-700 font-medium">Mesa 4 Lugares:</span>
                        </div>
                        <div className="ml-4 space-y-1 text-sage-green-600">
                          <div>• Comprimento máximo: <span className="font-semibold">1,40m</span></div>
                          <div>• Profundidade máxima: <span className="font-semibold">0,90m</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-amber-700 text-sm">
                      <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
                      e a circulação adequada nos ambientes do Residencial Magnólia.
                    </p>
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
            </TabsContent>

            {/* Cozinha */}
            <TabsContent value="cozinha">
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
            </TabsContent>

            {/* Quartos */}
            <TabsContent value="quartos">
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
            </TabsContent>

            {/* Banheiro */}
            <TabsContent value="banheiro">
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
            </TabsContent>

            {/* Lavanderia */}
            <TabsContent value="lavanderia">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <Shirt className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-warm-brown-800">Lavanderia</h2>
                </div>
                
                {/* Imagem da lavanderia */}
                <div className="mb-8 rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/2c282db3-dc17-49e8-a3e5-cbeb2469b6db.png" 
                    alt="Área da lavanderia do Residencial Magnólia" 
                    className="w-full h-48 md:h-64 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openImageModal(
                      "/lovable-uploads/2c282db3-dc17-49e8-a3e5-cbeb2469b6db.png", 
                      "Área da lavanderia do Residencial Magnólia",
                      "Área de serviço com lavadora e organização eficiente"
                    )}
                  />
                  <div className="bg-indigo-50 p-3 text-center">
                    <p className="text-indigo-700 text-sm">Área de serviço com lavadora e organização eficiente</p>
                  </div>
                </div>

                {/* Medidas Adequadas dos Móveis - Lavanderia */}
                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">📏 Medidas Adequadas dos Móveis</h3>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
                    <h4 className="font-semibold text-warm-brown-800 mb-3 flex items-center">
                      <Shirt className="w-5 h-5 mr-2 text-blue-600" />
                      Armário Alto
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="ml-4 space-y-1 text-sage-green-600">
                        <div>• Comprimento máximo: <span className="font-semibold">2,40m</span></div>
                        <div>• Profundidade máxima: <span className="font-semibold">0,35m</span></div>
                        <div>• Altura máxima: <span className="font-semibold">2,60m</span></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-amber-700 text-sm">
                      <strong>💡 Importante:</strong> Estas medidas foram calculadas considerando o espaço disponível 
                      e a circulação adequada na lavanderia do Residencial Magnólia.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-warm-brown-800 mb-4">👕 Equipamentos Essenciais:</h3>
                    <ul className="space-y-3 text-sage-green-700">
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Varal retrátil economiza espaço quando não usado</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Tanques com armário inferior aumentam armazenamento</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Prateleiras para produtos de limpeza</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-500 mr-2">•</span>
                        <span>Cesto organizador para roupas sujas</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-800 mb-3">☀️ Secagem Eficiente:</h4>
                    <p className="text-orange-700 mb-3">
                      Aproveite a ventilação natural:
                    </p>
                    <ul className="space-y-1 text-orange-700 text-sm">
                      <li>• Estenda roupas logo após lavar</li>
                      <li>• Use todo o espaço do varal</li>
                      <li>• Evite sobrepor peças</li>
                      <li>• Aproveite o sol da manhã</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h4 className="font-semibold text-red-800 mb-2">💧 Mantenha Sempre Seco:</h4>
                  <p className="text-red-700">
                    Água acumulada pode causar infiltrações e danificar a estrutura. 
                    Seque sempre a área após uso e verifique se não há vazamentos.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🧺</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Organização</h4>
                    <p className="text-sm text-sage-green-600">Separe roupas por cor e tipo de tecido</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🧴</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Produtos</h4>
                    <p className="text-sm text-sage-green-600">Mantenha detergentes em local seco e arejado</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-indigo-600 text-xl">🌱</span>
                    </div>
                    <h4 className="font-semibold text-warm-brown-800 mb-2">Sustentabilidade</h4>
                    <p className="text-sm text-sage-green-600">Use produtos ecológicos quando possível</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Link 
              to="/decoracao" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-green-500 to-blue-600 text-white rounded-lg hover:from-sage-green-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Móveis e Decoração
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </main>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={closeImageModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
          imageCaption={selectedImage.caption}
        />
      )}
    </div>
  );
};

export default SpaceOrganization;
