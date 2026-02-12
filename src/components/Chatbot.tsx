
import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente virtual do Morada das Magnólias. Como posso ajudá-lo com informações sobre seu apartamento?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("apartamento") || lowerMessage.includes("parede") || lowerMessage.includes("concreto")) {
      return "Seu apartamento utiliza tecnologia de parede de concreto, que oferece maior durabilidade e isolamento térmico. Para mais detalhes, consulte a seção 'Conhecendo seu Apartamento' no manual.";
    }
    
    if (lowerMessage.includes("móveis") || lowerMessage.includes("decoração")) {
      return "Para móveis e decoração, recomendo verificar a seção 'Móveis e Decoração' do manual. Lembre-se de considerar o peso dos móveis devido à tecnologia construtiva especial.";
    }
    
    if (lowerMessage.includes("manutenção") || lowerMessage.includes("conservação")) {
      return "A manutenção adequada é essencial! Consulte a seção 'Manutenção e Conservação' para dicas específicas sobre cuidados com paredes de concreto e instalações.";
    }
    
    if (lowerMessage.includes("condomínio") || lowerMessage.includes("vizinho")) {
      return "Para informações sobre regras de convivência e vida em condomínio, consulte a seção 'Viver em Condomínio' do manual.";
    }
    
    if (lowerMessage.includes("cohagra") || lowerMessage.includes("contato")) {
      return "Para entrar em contato com a COHAGRA, acesse a página 'Contatos Úteis' ou ligue para (67) 3318-1500. O atendimento é de segunda a sexta, das 7h às 13h.";
    }
    
    if (lowerMessage.includes("alteração") || lowerMessage.includes("modificação") || lowerMessage.includes("reforma")) {
      return "Atenção! Nem todas as modificações são permitidas devido à tecnologia de parede de concreto. Consulte a seção 'Alterações e Ampliações' antes de fazer qualquer mudança.";
    }
    
    if (lowerMessage.includes("organização") || lowerMessage.includes("espaço")) {
      return "Para dicas de organização dos espaços (sala, cozinha, quartos, banheiro e lavanderia), consulte a seção 'Organização dos Espaços' do manual.";
    }
    
    if (lowerMessage.includes("responsabilidade")) {
      return "É importante conhecer suas responsabilidades como morador. Consulte a seção 'Responsabilidades' para entender suas obrigações.";
    }
    
    return "Obrigado pela pergunta! Para informações mais detalhadas, recomendo consultar as seções específicas do manual. Posso ajudá-lo com dúvidas sobre apartamento, móveis, manutenção, condomínio, contatos da COHAGRA, alterações permitidas, organização de espaços ou suas responsabilidades como morador.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simular tempo de resposta
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-96 flex flex-col border border-gray-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-sage-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold">Assistente Magnólia</h3>
              <p className="text-sm text-white/80">Online agora</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                <div className={`p-2 rounded-full ${message.isUser ? "bg-blue-100" : "bg-sage-green-100"}`}>
                  {message.isUser ? (
                    <User className="w-4 h-4 text-blue-600" />
                  ) : (
                    <Bot className="w-4 h-4 text-sage-green-600" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl ${
                    message.isUser
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-gray-100 text-gray-800 rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-full bg-sage-green-100">
                  <Bot className="w-4 h-4 text-sage-green-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua dúvida..."
              className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
