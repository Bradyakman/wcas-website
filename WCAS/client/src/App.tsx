import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import Home from "@/pages/Home";
import Technology from "@/pages/Technology";
import HCIT from "@/pages/HCIT";
import News from "@/pages/News";
import History from "@/pages/History";
import TechOperatingSuccesses from "@/pages/TechOperatingSuccesses";
import NotFound from "@/pages/not-found";

import TeamMember from "@/pages/TeamMember";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/technology" component={Technology} />
      <Route path="/technology/operating-successes" component={TechOperatingSuccesses} />
      <Route path="/news" component={News} />
          <Route path="/history" component={History} />
          <Route path="/hcit" component={HCIT} />
          <Route path="/team/:name" component={TeamMember} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
