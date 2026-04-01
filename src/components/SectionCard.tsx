
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SectionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  color: "brown" | "green" | "blue" | "orange";
}

const colorClasses = {
  brown: {
    bg: "bg-gradient-to-br from-warm-brown-500 to-warm-brown-600",
    hover: "hover:from-warm-brown-600 hover:to-warm-brown-700",
    accent: "bg-warm-brown-100 text-warm-brown-700"
  },
  green: {
    bg: "bg-gradient-to-br from-sage-green-500 to-sage-green-600", 
    hover: "hover:from-sage-green-600 hover:to-sage-green-700",
    accent: "bg-sage-green-100 text-sage-green-700"
  },
  blue: {
    bg: "bg-gradient-to-br from-warm-brown-500 to-warm-brown-600",
    hover: "hover:from-warm-brown-600 hover:to-warm-brown-700", 
    accent: "bg-warm-brown-100 text-warm-brown-700"
  },
  orange: {
    bg: "bg-gradient-to-br from-orange-500 to-orange-600",
    hover: "hover:from-orange-600 hover:to-orange-700",
    accent: "bg-orange-100 text-orange-700"
  }
};

const SectionCard = ({ title, description, icon: Icon, to, color }: SectionCardProps) => {
  const colors = colorClasses[color];
  
  return (
    <Link to={to} className="group block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
        <div className={`${colors.bg} ${colors.hover} p-6 transition-all duration-300`}>
          <div className="flex items-center justify-between">
            <Icon className="w-8 h-8 text-white" />
            <div className={`px-3 py-1 rounded-full ${colors.accent} text-xs font-medium`}>
              Toque para ver
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-warm-brown-800 mb-2 group-hover:text-warm-brown-900 transition-colors">
            {title}
          </h3>
          <p className="text-sage-green-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;
