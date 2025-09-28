import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'Courses', to: '#courses' },
    { name: 'Mock Tests', to: '#tests' },
    { name: 'About', to: '#about' },
    { name: 'Contact', to: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="bg-indigo-500 from-primary to-secondary p-2 rounded-radius">
              <BookOpen className="h-6 w-6 text-white" />
            </div> */}
            <span className="font-display font-bold text-xl text-foreground">
              IELTS Excellence
            </span>
          </div>
         
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-indigo-500 text-white p-2   rounded hover:bg-indigo-600 ">
                get Start
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <button className=" w-full bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;