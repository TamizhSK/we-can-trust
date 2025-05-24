import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-md transition-colors duration-200 ${
      isActive 
        ? 'text-primary-600 font-medium' 
        : 'text-gray-700 hover:text-primary-500'
    }`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="We Can Trust You Logo" className="h-10 w-10" />
            <span className="text-xl font-display font-semibold text-primary-600">
              We Can Trust You
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/programs" className={navLinkClass}>Programs</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            <NavLink 
              to="/donate" 
              className="ml-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors duration-200 font-medium"
            >
              Donate
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col bg-white">
            <NavLink to="/" className={navLinkClass} onClick={toggleMenu}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={toggleMenu}>About</NavLink>
            <NavLink to="/programs" className={navLinkClass} onClick={toggleMenu}>Programs</NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={toggleMenu}>Contact</NavLink>
            <NavLink 
              to="/donate" 
              className="mt-2 mx-4 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors duration-200 font-medium text-center"
              onClick={toggleMenu}
            >
              Donate
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;