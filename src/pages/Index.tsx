import { 
  Home, 
  Layout, 
  Palette, 
  Wrench, 
  Users, 
  FileText, 
  Settings, 
  AlertTriangle,
  Phone,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import WelcomeHero from "../components/WelcomeHero";
import SectionCard from "../components/SectionCard";

const Index = () => {
  const sections = [
    {
      title: "Conhecendo seu Apartamento",
      description: "Entenda a arquitetura e as características únicas da sua nova moradia",
      icon: Home,
      to: "/apartamento",
      color: "brown" as const
    },
    {
      title: "Organização dos Espaços",
      description: "Organize melhor os espaços com foco na melhor disposição dos móveis.",
      icon: Layout,
      to: "/espacos",
      color: "green" as const
    },
    {
      title: "Decoração e Interiores",
      description: "Transforme seu lar em um ambiente acolhedor, bonito e cheio de personalidade.",
      icon: Palette,
      to: "/decoracao",
      color: "blue" as const
    },
    {
      title: "Manutenção e Conservação",
      description: "Mantenha seu apartamento sempre em bom estado com os cuidados corretos.",
      icon: Wrench,
      to: "/manutencao",
      color: "orange" as const
    },
    {
      title: "Viver em Condomínio",
      description: "Regras de convivência e como ser um bom vizinho no seu novo lar.",
      icon: Users,
      to: "/condominio",
      color: "green" as const
    },
    {
      title: "Responsabilidades",
      description: "Entenda suas obrigações como morador e mantenha tudo em ordem.",
      icon: FileText,
      to: "/responsabilidades",
      color: "brown" as const
    },
    {
      title: "Alterações e Ampliações",
      description: "O que pode e não pode ser modificado no seu apartamento.",
      icon: Settings,
      to: "/alteracoes",
      color: "orange" as const
    },
    {
      title: "Tecnologia de Parede de Concreto",
      description: "Informações importantes sobre o sistema construtivo do seu edifício.",
      icon: AlertTriangle,
      to: "/tecnologia",
      color: "blue" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <WelcomeHero />
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-warm-brown-800 mb-4">
            Manual para Morar Bem
          </h2>
          <p className="text-lg text-sage-green-600 max-w-2xl mx-auto">
            Navegue pelos tópicos abaixo para descobrir tudo que você precisa saber sobre sua nova moradia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => (
            <div key={section.to} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <SectionCard {...section} />
            </div>
          ))}
        </div>

        {/* Faixa da Equipe do Escritório Público */}
        <div className="bg-gradient-to-r from-warm-brown-100 to-sage-green-100 rounded-2xl shadow-md p-6 mb-8 text-center border-l-4 border-warm-brown-500">
          <h3 className="text-xl font-bold text-warm-brown-800 mb-3">
            Equipe do Escritório Público de Arquitetura - COHAGRA
          </h3>
          <p className="text-sage-green-700 mb-4">
            O Portal Magnólia é gerenciado por uma equipe multidisciplinar dedicada ao atendimento e orientação dos moradores
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warm-brown-500 rounded-full"></div>
              <span className="text-warm-brown-700 font-medium">Arquiteto</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-sage-green-500 rounded-full"></div>
              <span className="text-sage-green-700 font-medium">Engenheiro</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warm-brown-400 rounded-full"></div>
              <span className="text-warm-brown-700 font-medium">Assistente Social</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-sage-green-400 rounded-full"></div>
              <span className="text-sage-green-700 font-medium">Técnico Administrativo</span>
            </div>
          </div>
        </div>

        {/* Rodapé Institucional */}
        <footer className="mt-16 bg-gradient-to-br from-warm-brown-800 to-sage-green-800 text-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Building2 className="w-10 h-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              COHAGRA - Companhia Habitacional do Vale do Rio Grande
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Nossa equipe é formada por profissionais comprometidos com a transformação social através da habitação de qualidade. Trabalhamos incansavelmente para garantir que cada família tenha acesso a moradia digna e segura. Acesse o seu recurso ATHIS, é gratuito.
            </p>
          </div>

          {/* Grande Chamada para Sistema ATHIS */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/20">
            <div className="text-center">
              <h4 className="text-xl font-bold mb-3">
                Sistema de Gestão ATHIS
              </h4>
              <p className="text-white/90 mb-6">
                Acesse o sistema de gestão de Assistência Técnica para Habitação de Interesse Social
              </p>
              <a 
                href="https://cohagra-athis-gestao.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-warm-brown-800 rounded-lg font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Settings className="w-6 h-6" />
                Acessar Sistema ATHIS
              </a>
            </div>
          </div>

          {/* Seção Precisa de Ajuda */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Precisa de Ajuda?
            </h3>
            <p className="text-white/90 mb-6">
              Entre em contato com a COHAGRA ou use nosso assistente virtual para tirar dúvidas
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contatos"
                className="px-6 py-3 bg-white text-warm-brown-800 rounded-lg hover:bg-white/90 transition-colors font-medium"
              >
                Contatos Úteis
              </Link>
              <button className="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors font-medium">
                Vídeos
              </button>
            </div>
          </div>

          <div className="text-center text-white/60 text-sm border-t border-white/20 pt-6">
            <p>&copy; 2024 COHAGRA - Todos os direitos reservados</p>
            <p className="mt-2">Portal Magnólia - Manual para Morar Bem</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
