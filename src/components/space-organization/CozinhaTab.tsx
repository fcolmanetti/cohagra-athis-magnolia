
import { ChefHat } from "lucide-react";
import { CozinhaOptions } from "./cozinha/CozinhaOptions";
import { MoveisPlanjados } from "./cozinha/MoveisPlanjados";
import { CozinhaTips } from "./cozinha/CozinhaTips";

interface CozinhaTabProps {
  openImageModal: (src: string, alt: string, caption?: string) => void;
}

export const CozinhaTab = ({ openImageModal }: CozinhaTabProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="flex items-center mb-6">
        <div className="bg-orange-100 p-3 rounded-full mr-4">
          <ChefHat className="w-6 h-6 text-orange-600" />
        </div>
        <h2 className="text-2xl font-bold text-warm-brown-800">Cozinha</h2>
      </div>
      
      <CozinhaOptions openImageModal={openImageModal} />
      <MoveisPlanjados />
      <CozinhaTips />
    </div>
  );
};
