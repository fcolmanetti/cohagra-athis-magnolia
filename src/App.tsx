
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ApartmentGuide from "./pages/ApartmentGuide";
import SpaceOrganization from "./pages/SpaceOrganization";
import Decoration from "./pages/Decoration";
import Maintenance from "./pages/Maintenance";
import Condominium from "./pages/Condominium";
import Responsibilities from "./pages/Responsibilities";
import Modifications from "./pages/Modifications";
import Technology from "./pages/Technology";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/apartamento" element={<ApartmentGuide />} />
          <Route path="/espacos" element={<SpaceOrganization />} />
          <Route path="/decoracao" element={<Decoration />} />
          <Route path="/manutencao" element={<Maintenance />} />
          <Route path="/condominio" element={<Condominium />} />
          <Route path="/responsabilidades" element={<Responsibilities />} />
          <Route path="/alteracoes" element={<Modifications />} />
          <Route path="/tecnologia" element={<Technology />} />
          <Route path="/contatos" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
