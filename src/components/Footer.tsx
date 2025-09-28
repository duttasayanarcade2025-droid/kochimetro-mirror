import { Facebook, Twitter, Linkedin, Youtube, Instagram, Phone } from 'lucide-react';
import awardsBadges from '@/assets/awards-badges.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/KochiMetroRail/", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/MetroRailKochi/", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/kochi-metro-rail-ltd", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/KochiMetroRail/", label: "YouTube" },
    { icon: Instagram, href: "https://www.instagram.com/kochimetrorail/", label: "Instagram" }
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-teal-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Awards Section */}
        <div className="py-8 border-b border-white/20">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img
              src={awardsBadges}
              alt="Awards and Certifications"
              className="h-20 object-contain"
            />
            {/* Individual award badges */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">UMI</span>
                </div>
                <p className="text-xs text-center">Urban Mobility<br />Conference & Expo</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">BSE</span>
                </div>
                <p className="text-xs text-center">SKOCH BSE<br />AWARD</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 rounded flex items-center justify-center mb-2">
                  <span className="text-xs font-bold text-white">iF</span>
                </div>
                <p className="text-xs text-center">product<br />design<br />award</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">UITP</span>
                </div>
                <p className="text-xs text-center">UITP AWARDS<br />2017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address & Social */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold mb-4">
                JLN Metro Station, 4th Floor
              </h3>
              <p className="text-lg mb-6">Kaloor, Ernakulam - 682017</p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">0484-2846700</p>
                    <p className="text-sm text-white/80">09.30 am - 5.00 pm</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-2xl font-bold">1800 425 0355</p>
                    <p className="text-sm text-white/80">Toll Free</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty space for balance */}
            <div></div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-white/20">
          <p className="text-center text-lg font-semibold">
            © 2019 Kochi Metro Rail Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;