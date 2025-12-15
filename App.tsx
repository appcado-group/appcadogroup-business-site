import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Drawer } from './components/ui/drawer';
import { Button } from './components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'headless'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  if (step === 2) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center space-y-4">
        <div className="h-16 w-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Received</h3>
        <p className="text-zinc-400 max-w-xs">Thanks for reaching out, {formData.name}. We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name</label>
        <input
          id="name"
          required
          className="w-full h-11 px-4 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-500"
          placeholder="Jane Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email</label>
        <input
          id="email"
          type="email"
          required
          className="w-full h-11 px-4 rounded-md bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-white/20 transition-all placeholder:text-zinc-500"
          placeholder="jane@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">Project Type</label>
        <div className="grid grid-cols-2 gap-3">
          {['Headless', 'Theme Dev', 'Migration', 'App Dev'].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setFormData({ ...formData, projectType: type })}
              className={`h-10 text-sm font-medium rounded-md border transition-all ${formData.projectType === type
                ? 'bg-white text-black border-white'
                : 'bg-zinc-800/50 text-zinc-400 border-zinc-700 hover:border-zinc-500'
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-zinc-200 mt-4">
        Submit Request <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Router>
      <ScrollManager />
      <div className="min-h-screen bg-black text-white selection:bg-white/20">
        <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<Home onOpenDrawer={() => setIsDrawerOpen(true)} />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>

        <Footer />

        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Start your project"
          description="Tell us about your Shopify needs and we'll create a roadmap for success."
        >
          <ContactForm />
        </Drawer>
      </div>
    </Router>
  );
};

export default App;