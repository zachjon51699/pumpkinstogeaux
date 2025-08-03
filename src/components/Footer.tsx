import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-orange-100 text-orange-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🎃</span>
              </div>
              <h3 className="text-xl font-bold text-orange-600">Pumpkins to Geaux</h3>
            </div>
            <p className="text-orange-800 mb-4 max-w-md">
              Mama-owned business bringing fall to your front door. We deliver and style beautiful pumpkin displays right on your porch, bringing Louisiana charm to your fall decorations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-orange-500 hover:text-orange-700 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-orange-500 hover:text-orange-700 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-700">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setCurrentPage('home')}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('how-it-works')}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('packages')}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-orange-600 hover:text-orange-800 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-700">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(225) 555-GOAUX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>hello@pumpkinstogeaux.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-500" />
                <span>
                  Serving Greater Baton Rouge<br />
                  & Surrounding Areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-200 mt-8 pt-8 text-center">
          <p className="text-orange-700">
            © 2024 Pumpkins to Geaux. All rights reserved. | Laissez les bons temps rouler! 🎃⚜️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
