
import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

type HeaderProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    if (location.pathname !== '/') {
      // Navegação para home + âncora
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'features', label: 'Recursos' },
    { id: 'tech', label: 'Tecnologias' },
    { id: 'installation', label: 'Instalação' },
    { id: 'download', label: 'Download' },
    { id: 'project', label: 'Projeto', isPage: true }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <RouterLink to="/" className="flex items-center" onClick={() => setActiveSection('home')}>
              <div className="w-10 h-10 rounded-lg bg-keyboard-accent flex items-center justify-center text-white font-bold mr-2">
                AI
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                AI Keyboard
              </span>
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.isPage ? (
                <RouterLink
                  key={item.id}
                  to={`/${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-keyboard-accent ${
                    activeSection === item.id || location.pathname === `/${item.id}`
                      ? 'text-keyboard-accent' 
                      : isScrolled 
                        ? 'text-gray-800' 
                        : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </RouterLink>
              ) : (
                <button
                  key={item.id}
                  className={`text-sm font-medium transition-colors hover:text-keyboard-accent ${
                    activeSection === item.id 
                      ? 'text-keyboard-accent' 
                      : isScrolled 
                        ? 'text-gray-800' 
                        : 'text-gray-700'
                  }`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={isScrolled ? "text-gray-800" : "text-gray-700"}
            >
              {mobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2">
            {navItems.map((item) => (
              <div key={item.id} className="py-2">
                {item.isPage ? (
                  <RouterLink
                    to={`/${item.id}`}
                    className={`block text-sm font-medium ${
                      activeSection === item.id || location.pathname === `/${item.id}`
                        ? 'text-keyboard-accent' 
                        : 'text-gray-800'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </RouterLink>
                ) : (
                  <button
                    className={`block text-sm font-medium w-full text-left ${
                      activeSection === item.id ? 'text-keyboard-accent' : 'text-gray-800'
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
