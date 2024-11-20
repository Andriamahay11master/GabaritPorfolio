import React from 'react';
import { Link } from 'react-scroll';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="home" smooth={true} className="text-2xl font-bold cursor-pointer">
            Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                activeClass="text-blue-600 font-medium"
                spy={true}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                className="block py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors"
                activeClass="text-blue-600 font-medium"
                spy={true}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}