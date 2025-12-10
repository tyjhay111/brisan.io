function Navbar({ logoUrl: propLogoUrl, onLogoChange }) {
  try {
    const [isOpen, setIsOpen] = React.useState(false);
    
    // Use prop if provided, otherwise use default
    const [internalLogoUrl, setInternalLogoUrl] = React.useState("/images/pic.jpeg");
    const logoUrl = propLogoUrl !== undefined ? propLogoUrl : internalLogoUrl;

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setIsOpen(false);
      } else {
        console.warn(`Section with id '${sectionId}' not found`);
      }
    };

    // Function to update logo
    const updateLogo = (newLogoUrl) => {
      if (onLogoChange) {
        onLogoChange(newLogoUrl);
      } else {
        setInternalLogoUrl(newLogoUrl);
      }
    };

    // Fallback logo in case the main one fails to load
    const fallbackLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%232ecc71'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='40' font-weight='bold'%3EB%3C/text%3E%3C/svg%3E";

    return (
      <nav className="bg-white shadow-md fixed w-full top-0 z-50" data-name="navbar" data-file="components/Navbar.js">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="w-8 h-8 mr-3 flex items-center justify-center bg-gray-50 rounded-lg">
                <img 
                  src={logoUrl} 
                  alt="BRISAN Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image fails to load
                    console.warn('Logo image failed to load, using fallback');
                    e.target.src = fallbackLogo;
                  }}
                />
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">BRISAN</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('business')} 
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Business
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-[var(--primary-color)] p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-xl font-bold">✕</span>
                </div>
              ) : (
                <div className="w-6 h-6 flex items-center justify-center">
                  <span className="text-xl font-bold">☰</span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fadeIn">
            <div className="container-custom py-4 flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('home')} 
                className="py-3 text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors text-left font-medium border-b border-gray-100 hover:bg-gray-50 px-2 rounded"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="py-3 text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors text-left font-medium border-b border-gray-100 hover:bg-gray-50 px-2 rounded"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('products')} 
                className="py-3 text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors text-left font-medium border-b border-gray-100 hover:bg-gray-50 px-2 rounded"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('business')} 
                className="py-3 text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors text-left font-medium border-b border-gray-100 hover:bg-gray-50 px-2 rounded"
              >
                Business
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="py-3 text-[var(--text-light)] hover:text-[var(--primary-color)] transition-colors text-left font-medium hover:bg-gray-50 px-2 rounded"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    );
  } catch (error) {
    console.error('Navbar component error:', error);
    return (
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-red-500">BRISAN</span>
            </div>
            <span className="text-sm text-red-500">Navigation Error</span>
          </div>
        </div>
      </nav>
    );
  }
}



export default Navbar;