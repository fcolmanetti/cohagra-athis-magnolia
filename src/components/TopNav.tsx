import { cn } from "@/lib/utils";

const empreendimentos = [
  { name: "Morada das Magnólias", active: true },
  { name: "Empreendimento 2", active: false, comingSoon: true },
  { name: "Empreendimento 3", active: false, comingSoon: true },
];

const TopNav = () => {
  return (
    <div className="bg-warm-brown-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <p className="text-xs sm:text-sm font-medium tracking-wide">
            Programa Morar BEM COHAGRA — Cuidar da casa, cuidar da vida.
          </p>
        </div>
        <div className="flex items-center gap-1 overflow-x-auto pb-0 scrollbar-hide">
          {empreendimentos.map((emp) => (
            <button
              key={emp.name}
              className={cn(
                "px-4 py-2 text-xs sm:text-sm font-medium rounded-t-lg whitespace-nowrap transition-colors",
                emp.active
                  ? "bg-white text-warm-brown-800"
                  : "text-white/60 hover:text-white/80 cursor-default"
              )}
              disabled={!emp.active}
            >
              {emp.name}
              {emp.comingSoon && (
                <span className="ml-1.5 text-[10px] sm:text-xs opacity-70">
                  — Em breve
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
