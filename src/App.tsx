import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <img
          src="/images/profilecartoonblur.png"
          alt="Light Background"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-50 transition-all duration-500 dark:hidden"
        />
        <img
          src="/images/profilecartoonblurdark.png"
          alt="Dark Background"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 transition-all duration-500 hidden dark:block"
        />
      </div>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
