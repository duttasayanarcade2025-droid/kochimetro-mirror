// import { useState } from 'react';
// import { Menu, X, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navigationItems = [
//     { name: 'WHO WE ARE', href: '#who-we-are', hasDropdown: true },
//     { name: 'WHAT WE DO', href: '#what-we-do', hasDropdown: true },
//     { name: 'ENVIRONMENT & SOCIAL', href: '#environment-social', hasDropdown: true },
//     { name: 'PASSENGER INFO', href: '#passenger-info', hasDropdown: true },
//     { name: 'VIGILANCE', href: '#vigilance', hasDropdown: false },
//   ];

//   return (
//     <header className="bg-metro-dark text-white relative z-50">
//       {/* Top info bar */}
//       <div className="bg-metro-teal text-white py-2">
//         <div className="container-custom">
//           <div className="flex justify-between items-center text-sm">
//             <div className="flex items-center space-x-6">
//               <a href="#" className="hover:text-white/80 transition-colors">RTI</a>
//               <a href="#" className="hover:text-white/80 transition-colors">NOTIFICATIONS & G. O S</a>
//               <a href="#" className="hover:text-white/80 transition-colors">OPEN DATA</a>
//               <a href="#" className="hover:text-white/80 transition-colors">PRIVACY POLICY</a>
//               <a href="#" className="hover:text-white/80 transition-colors">NEWSLETTERS</a>
//               <a href="#" className="hover:text-white/80 transition-colors">GRIEVANCE REDRESSAL</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main header */}
//       <div className="bg-metro-dark">
//         <div className="container-custom">
//           <div className="flex items-center justify-between py-4">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="flex items-center space-x-2">
//                 <div className="w-12 h-12 bg-metro-teal rounded-full flex items-center justify-center">
//                   <span className="text-white font-bold text-xl">KM</span>
//                 </div>
//                 <div className="text-white">
//                   <h1 className="text-xl font-heading font-bold">Kochi Metro Rail Ltd.</h1>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <nav className="hidden lg:flex items-center space-x-8">
//               {navigationItems.map((item) => (
//                 <div key={item.name} className="relative group">
//                   <a
//                     href={item.href}
//                     className="flex items-center text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium"
//                   >
//                     {item.name}
//                     {item.hasDropdown && (
//                       <ChevronDown className="ml-1 h-4 w-4" />
//                     )}
//                   </a>
//                   {item.hasDropdown && (
//                     <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                       <div className="py-2">
//                         <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item</a>
//                         <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item</a>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile menu button */}
//             <Button
//               variant="ghost"
//               size="sm"
//               className="lg:hidden text-white hover:text-metro-teal"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-metro-dark border-t border-gray-700">
//             <div className="container-custom py-4">
//               <nav className="flex flex-col space-y-4">
//                 {navigationItems.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className="text-white hover:text-metro-teal transition-colors duration-300 text-sm font-medium"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'WHO WE ARE', href: '#who-we-are', hasDropdown: true },
    { name: 'WHAT WE DO', href: '#what-we-do', hasDropdown: true },
    { name: 'ENVIRONMENT & SOCIAL', href: '#environment-social', hasDropdown: true },
    { name: 'PASSENGER INFO', href: '#passenger-info', hasDropdown: true },
    { name: 'VIGILANCE', href: '#vigilance', hasDropdown: false },
  ];

  // CSS for the creative login button hover effect.
  // This effect creates a circular reveal animation from the side.
  const buttonStyles = `
    .login-btn {
        position: relative;
        padding: 0.6rem 1.5rem;
        color: white;
        background-color: transparent;
        text-decoration: none;
        overflow: hidden;
        border: 2px solid #00AFA3; /* Using a teal color that matches the theme */
        transition: color 0.4s 0.1s ease-out;
        text-align: center;
        border-radius: 6px;
        font-weight: 500;
        z-index: 1; /* Ensures text is above the animation */
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
        left: -7em; /* Start the circle animation off-center to the left */
        text-align: center;
        transition: box-shadow 0.5s ease-out;
        z-index: -1; /* Places the animation behind the text */
    }

    .login-btn:hover {
        color: #1a202c; /* Dark color for text on hover */
    }

    .login-btn:hover:before {
        box-shadow: inset 0 0 0 10em #00AFA3; /* Expands the teal background circle on hover */
    }
  `;

  return (
    <>
      {/* Injecting the custom styles for the button animation */}
      <style>{buttonStyles}</style>
      <header className="bg-[#1a202c] text-white relative z-50 font-sans">
        {/* Top info bar */}
        <div className="bg-[#00AFA3] text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <div className="flex items-center space-x-4 sm:space-x-6 overflow-x-auto">
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">RTI</a>
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">NOTIFICATIONS & G. O S</a>
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">OPEN DATA</a>
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">PRIVACY POLICY</a>
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">NEWSLETTERS</a>
                <a href="#" className="hover:text-white/80 transition-colors shrink-0">GRIEVANCE REDRESSAL</a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="bg-[#1a202c]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-[#00AFA3] rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xl">KM</span>
                  </div>
                  <div className="text-white">
                    <h1 className="text-lg sm:text-xl font-bold">Kochi Metro Rail Ltd.</h1>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:flex items-center space-x-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="flex items-center text-white hover:text-[#00AFA3] transition-colors duration-300 text-sm font-medium"
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="ml-1 h-4 w-4" />
                      )}
                    </a>
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-2">
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item 1</a>
                          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Submenu Item 2</a>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {/* The new animated login button */}
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
                className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 hover:text-[#00AFA3] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00AFA3]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-[#1a202c] border-t border-gray-700">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigationItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-[#00AFA3] transition-colors duration-300 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                   <a
                      href="https://kmrl-prototype1.lovable.app/"
                      className="text-white bg-[#00AFA3] text-center rounded-md py-2 font-medium"
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
