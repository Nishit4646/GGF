// src/components/Footer.jsx
import React from 'react';
import { Globe, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPinned, ExternalLink } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', url: 'https://facebook.com' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: Youtube, label: 'YouTube', url: 'https://youtube.com' }
  ];

  const locations = [
    { country: 'India', city: 'Ahmedabad', image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=100' },
    { country: 'Canada', city: 'Toronto', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=100' },
    { country: 'UK', city: 'London', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=100' },
    { country: 'Germany', city: 'Berlin', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=100' },
    { country: 'Bhutan', city: 'Thimphu', image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=100' },
    { country: 'India', city: 'Kashmir', image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=100' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-lg">GGF</h3>
            </div>
            <p className="text-sm mb-4 text-gray-400 leading-relaxed">
              Preserving and promoting Gujarati culture worldwide since 2013. 
              Connecting hearts across continents.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'About Us', 'NRG Awards', 'Events', 'Blog', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300 mr-2"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2 group">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="hover:text-orange-400 transition-colors">ggfgujarati2023@gmail.com</p>
                  <p className="hover:text-orange-400 transition-colors">info@globalgujaratifederation.org</p>
                </div>
              </li>
              <li className="flex items-start space-x-2 group">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="hover:text-orange-400 transition-colors">+91 98240 34475</p>
              </li>
              <li className="flex items-start space-x-2 group">
                <MapPinned className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-400">302, Yash Aqua, Navrangpura,<br />Ahmedabad 380009, Gujarat, India</p>
              </li>
            </ul>
          </div>

          {/* Global Presence */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Our Global Presence</h4>
            <div className="grid grid-cols-3 gap-2">
              {locations.map((location, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={location.image} 
                      alt={location.city}
                      className="w-full h-16 object-cover border-2 border-gray-700 group-hover:border-orange-500 transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-lg flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-center pb-2">
                        <p className="text-xs font-semibold text-white">{location.city}</p>
                        <p className="text-xs text-orange-300">{location.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-sm text-gray-400 text-center md:text-left">
                © 2026 Copyrights by Global Gujarati Federation. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-gray-700/50">
            <p className="text-xs text-gray-500 flex items-center justify-center md:justify-start">
              Developed by 
              <a 
                href="https://hilearntechnology.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-orange-500 hover:text-orange-400 font-medium flex items-center transition-colors"
              >
                Hilearn Technology
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;