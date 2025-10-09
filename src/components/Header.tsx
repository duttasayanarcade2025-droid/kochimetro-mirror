import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems = [
    { 
      name: 'WHO WE ARE', 
      href: '#who-we-are', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '#about' },
        { name: 'History', href: '#history' },
        { name: 'Leadership', href: '#leadership' },
        { name: 'Achievements', href: '#achievements' }
      ]
    },
    { 
      name: 'WHAT WE DO', 
      href: '#what-we-do', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Operations', href: '#operations' },
        { name: 'Projects', href: '#projects' },
        { name: 'Future Plans', href: '#future-plans' },
        { name: 'Maintenance', href: '#maintenance' }
      ]
    },
    { 
      name: 'ENVIRONMENT & SOCIAL', 
      href: '#environment-social', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Sustainability', href: '#sustainability' },
        { name: 'CSR Initiatives', href: '#csr' },
        { name: 'Green Practices', href: '#green-practices' },
        { name: 'Reports', href: '#reports' }
      ]
    },
    { 
      name: 'PASSENGER INFO', 
      href: '#passenger-info', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Routes & Lines', href: '#routes' },
        { name: 'Fares & Tickets', href: '#fares' },
        { name: 'Station Facilities', href: '#facilities' },
        { name: 'Travel Guidelines', href: '#guidelines' }
      ]
    },
    { 
      name: 'VIGILANCE', 
      href: '#vigilance', 
      hasDropdown: false 
    },
  ];

  const topBarItems = [
    { name: 'RTI', href: '#rti' },
    { name: 'NOTIFICATIONS & G. O S', href: '#notifications' },
    { name: 'OPEN DATA', href: '#open-data' },
    { name: 'PRIVACY POLICY', href: '#privacy' },
    { name: 'NEWSLETTERS', href: '#newsletters' },
    { name: 'GRIEVANCE REDRESSAL', href: '#grievance' }
  ];

  const buttonStyles = `
    .login-btn {
        position: relative;
        padding: 0.6rem 1.5rem;
        color: white;
        background-color: transparent;
        text-decoration: none;
        overflow: hidden;
        border: 2px solid hsl(var(--metro-teal));
        transition: color 0.4s 0.1s ease-out;
        text-align: center;
        border-radius: 6px;
        font-weight: 500;
        z-index: 1;
    }

    .login-btn:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: '';
        border-radius: 50%;
        display: block;
        width: 20em;
        height: 20em;
        left: -7em;
        text-align: center;
        transition: box-shadow 0.5s ease-out;
        z-index: -1;
    }

    .login-btn:hover {
        color: hsl(var(--metro-dark));
    }

    .login-btn:hover:before {
        box-shadow: inset 0 0 0 10em hsl(var(--metro-teal));
    }

    .dropdown-menu {
      background: hsl(var(--background));
      z-index: 999;
    }
  `;

  return (
    <>
      <style>{buttonStyles}</style>
      <header className="bg-metro-dark text-white relative z-50 font-sans">
        {/* Top info bar */}
        <div className="bg-metro-teal text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto">
                {topBarItems.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    className="hover:text-white/80 transition-colors shrink-0"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-metro-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-metro-teal rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">KM</span>
                  </div>
                  <div className="text-white">
                    <h1 className="text-lg sm:text-xl font-bold">Kochi Metro Rail Ltd.</h1>
                  </div>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div 
                    key={item.name} 
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className="flex items-center text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </a>
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-100 visible transition-all duration-300">
                        <div className="py-2">
                          {item.dropdownItems?.map((dropItem) => (
                            <a 
                              key={dropItem.name}
                              href={dropItem.href} 
                              className="block px-4 py-3 text-gray-800 hover:bg-metro-teal/10 hover:text-metro-teal transition-colors"
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="https://kmrl-prototype1.lovable.app/"
                  className="login-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AGAMI
                </a>
              </nav>

              {/* Mobile menu button */}
              <button
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 hover:text-metro-teal focus:outline-none focus:ring-2 focus:ring-inset focus:ring-metro-teal"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-metro-dark border-t border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium block"
                        onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                      {item.hasDropdown && item.dropdownItems && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.name}
                              href={dropItem.href}
                              className="text-gray-400 hover:text-metro-teal transition-colors text-sm block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                   <a
                      href="https://kmrl-prototype1.lovable.app/"
                      className="text-white bg-metro-teal text-center rounded-md py-2 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AGAMI
                    </a>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
