
import { ArrowLeft, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageModal } from "../components/ImageModal";
import { SalasTab } from "../components/space-organization/SalasTab";
import { CozinhaTab } from "../components/space-organization/CozinhaTab";
import { QuartosTab } from "../components/space-organization/QuartosTab";
import { BanheiroTab } from "../components/space-organization/BanheiroTab";
import { LavanderiaTab } from "../components/space-organization/LavanderiaTab";
import { MoveisAdequados } from "../components/space-organization/MoveisAdequados";
import { FixacaoSegura } from "../components/space-organization/FixacaoSegura";

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
            Dicas práticas para organizar cada ambiente do seu apartamento com móveis adequados
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Image - Apartamento Real */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png" 
              alt="Sala integrada do Morada das Magnólias" 
              className="w-full h-64 md:h-80 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(
                "/lovable-uploads/9f33b359-88b0-4d6c-ae10-715c5d0afcea.png", 
                "Sala integrada do Morada das Magnólias",
                "Apartamento do Morada das Magnólias - Layout integrado otimizado"
              )}
            />
            <div className="bg-white p-4 text-center">
              <p className="text-sage-green-700 font-medium">Apartamento do Morada das Magnólias - Layout integrado otimizado</p>
            </div>
          </div>

          <Tabs defaultValue="salas" className="w-full">
            <TabsList className="grid w-full grid-cols-3 md:grid-cols-5 mb-8">
              <TabsTrigger value="salas">Salas</TabsTrigger>
              <TabsTrigger value="cozinha">Cozinha</TabsTrigger>
              <TabsTrigger value="quartos">Quartos</TabsTrigger>
              <TabsTrigger value="banheiro">Banheiro</TabsTrigger>
              <TabsTrigger value="lavanderia">Lavanderia</TabsTrigger>
            </TabsList>

            <TabsContent value="salas">
              <SalasTab openImageModal={openImageModal} />
            </TabsContent>

            <TabsContent value="cozinha">
              <CozinhaTab openImageModal={openImageModal} />
            </TabsContent>

            <TabsContent value="quartos">
              <QuartosTab openImageModal={openImageModal} />
            </TabsContent>

            <TabsContent value="banheiro">
              <BanheiroTab openImageModal={openImageModal} />
            </TabsContent>

            <TabsContent value="lavanderia">
              <LavanderiaTab openImageModal={openImageModal} />
            </TabsContent>
          </Tabs>

          {/* Móveis Adequados Section - Moved to end */}
          <MoveisAdequados />

          {/* Fixação Segura Section - Moved to end */}
          <FixacaoSegura />

          <div className="mt-12 text-center">
            <Link 
              to="/decoracao" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-sage-green-500 to-blue-600 text-white rounded-lg hover:from-sage-green-600 hover:to-blue-700 transition-all duration-300 text-lg font-semibold"
            >
              Próximo: Decoração e Interiores
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
