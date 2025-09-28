import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', to: '#about' },
    { name: 'Courses', to: '#courses' },
    { name: 'Mock Tests', to: '#tests' },
    { name: 'Success Stories', to: '#testimonials' },
    { name: 'Blog', to: '#blog' },
  ];

  const courses = [
    { name: 'IELTS Academic', to: '#academic' },
    { name: 'IELTS General', to: '#general' },
    { name: 'Speaking Practice', to: '#speaking' },
    { name: 'Writing Workshop', to: '#writing' },
    { name: 'Band Score Booster', to: '#booster' },
  ];

  const socialLinks = [
    { icon: Facebook, to: '#facebook', label: 'Facebook' },
    { icon: Twitter, to: '#twitter', label: 'Twitter' },
    { icon: Instagram, to: '#instagram', label: 'Instagram' },
    { icon: Youtube, to: '#youtube', label: 'YouTube' },
  ];

  return (
    <footer className="bg-sky-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-radius">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="font-display font-bold text-xl">
                IELTS Excellence
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students worldwide to achieve their IELTS goals with expert guidance, 
              comprehensive preparation, and proven success strategies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  to={social.to}
                  className="bg-gray-700 hover:bg-primary p-2 rounded transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Education Street<br />
                    Learning District<br />
                    Metro City, MC 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a to="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a to="mailto:info@ieltsexcellence.com" className="text-gray-300 hover:text-white">
                  info@ieltsexcellence.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 IELTS Excellence. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a to="#privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <a to="#terms" className="text-gray-300 hover:text-white">
                Terms of Service
              </a>
              <a to="#cookies" className="text-gray-300 hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;