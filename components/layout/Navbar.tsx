import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Menu } from 'lucide-react';

interface NavbarProps {
  onOpenDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDrawer }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <div className="h-6 w-6 bg-white rounded-sm rotate-45" />
          <span className="font-display font-bold text-xl tracking-tight text-white">Appcado Group</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={cn("text-sm font-medium transition-colors hover:text-white", isHome ? "text-white" : "text-zinc-400")}>
            Solutions
          </Link>
          <Link to="/#work" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Work
          </Link>
          <Link to="/#process" className="text-sm font-medium text-zinc-400 transition-colors hover:text-white">
            Process
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={onOpenDrawer}
            variant="default"
            className="hidden md:flex bg-white text-black hover:bg-zinc-200"
          >
            Start Project
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={onOpenDrawer}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};