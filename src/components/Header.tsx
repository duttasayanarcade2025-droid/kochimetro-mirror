import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'WHO WE ARE', href: '#who-we-are', hasDropdown: true },
    { name: 'WHAT WE DO', href: '#what-we-do', hasDropdown: true },
    { name: 'ENVIRONMENT & SOCIAL', href: '#environment-social', hasDropdown: true },
    { name: 'PASSENGER INFO', href: '#passenger-info', hasDropdown: true },
    { name: 'VIGILANCE', href: '#vigilance', hasDropdown: false },
  ];

  return (
    <header className="bg-metro-dark text-white relative z-50">
      {/* Top info bar */}
      <div className="bg-metro-teal text-white py-2">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white/80 transition-colors">RTI</a>
              <a href="#" className="hover:text-white/80 transition-colors">NOTIFICATIONS & G. O S</a>
              <a href="#" className="hover:text-white/80 transition-colors">OPEN DATA</a>
              <a href="#" className="hover:text-white/80 transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-white/80 transition-colors">NEWSLETTERS</a>
              <a href="#" className="hover:text-white/80 transition-colors">GRIEVANCE REDRESSAL</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-metro-dark">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-metro-teal rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KM</span>
                </div>
                <div className="text-white">
                  <h1 className="text-xl font-heading font-bold">Kochi Metro Rail Ltd.</h1>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="flex items-center text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium"
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item</a>
                        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item</a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-metro-teal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-metro-dark border-t border-gray-700">
            <div className="container-custom py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;