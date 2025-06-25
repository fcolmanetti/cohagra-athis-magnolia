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
      description: "Dicas para organizar sala, cozinha, quartos, banheiro e lavanderia, com foco na melhor disposição dos móveis para otimizar o espaço e a funcionalidade de cada ambiente",
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

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-warm-brown-500 to-sage-green-600 p-4 rounded-full">
              <Phone className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-warm-brown-800 mb-4">
            Precisa de Ajuda?
          </h3>
          <p className="text-sage-green-600 mb-6">
            Entre em contato com a COHAGRA ou use nosso assistente virtual para tirar dúvidas
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contatos"
              className="px-6 py-3 bg-warm-brown-500 text-white rounded-lg hover:bg-warm-brown-600 transition-colors"
            >
              Contatos Úteis
            </Link>
            <button className="px-6 py-3 bg-sage-green-500 text-white rounded-lg hover:bg-sage-green-600 transition-colors">
              Vídeos e QR Code
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
