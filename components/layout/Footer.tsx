import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-5 w-5 bg-white rounded-sm rotate-45" />
              <span className="font-display font-bold text-lg text-white">appcadogroup</span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Crafting high-performance Shopify experiences for forward-thinking brands.
              We blend technical excellence with aesthetic precision.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li className="text-sm text-zinc-400">Headless Commerce</li>
              <li className="text-sm text-zinc-400">Custom Apps</li>
              <li className="text-sm text-zinc-400">Migration</li>
              <li className="text-sm text-zinc-400">Theme Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-zinc-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-zinc-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Appcado Group Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};