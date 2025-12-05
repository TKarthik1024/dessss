
import React from 'react';
import type { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-bold">SkillUp India</h3>
            <p className="text-gray-400 text-sm mt-1">Empowering the workforce of tomorrow.</p>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button onClick={() => onNavigate('Privacy')} className="hover:text-white transition-colors focus:outline-none">Privacy Policy</button>
            <button onClick={() => onNavigate('Terms')} className="hover:text-white transition-colors focus:outline-none">Terms of Service</button>
            <button onClick={() => onNavigate('Contact')} className="hover:text-white transition-colors focus:outline-none">Contact Support</button>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} SkillUp India. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
