function Footer({ logoUrl = "/images/picnc.jpeg" }) {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Current year for copyright
    const currentYear = new Date().getFullYear();

    // Fallback logo - same as navbar
    const fallbackLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%232ecc71' rx='15'/%3E%3Ctext x='50' y='60' text-anchor='middle' fill='white' font-size='36' font-weight='bold' font-family='Arial'%3EB%3C/text%3E%3C/svg%3E";

    return (
      <footer className="bg-[var(--text-dark)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info & Logo */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 mr-3 flex items-center justify-center bg-gray-50 rounded-lg border overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="BRISAN Logo"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      console.warn('Footer logo image failed to load, using fallback');
                      e.target.src = fallbackLogo;
                      e.target.onerror = null;
                    }}
                  />
                </div>
                <span className="text-2xl font-bold text-white">BRISAN</span>
              </div>
              <p className="text-gray-300 mb-4">
                Cultivating quality, growing opportunities for a sustainable future.
              </p>
              <div className="flex items-center text-gray-300 text-sm">
                <span className="mr-2">🌱</span>
                <span>Growing Together</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('business')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    Business
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-3 text-[var(--primary-color)]">✉</span>
                  <a href="mailto:brisanenterprise@gmail.com" className="hover:underline">
                    brisanenterprise@gmail.com
                  </a>
                </li>
                <li className="flex items-center hover:text-white transition-colors duration-200">
                  <span className="mr-3 text-[var(--primary-color)]">📞</span>
                  <a href="tel:+233243018869" className="hover:underline">
                    +233 243 018 869  |  054 100 5728
                  </a>
                </li>
                <li className="flex items-start hover:text-white transition-colors duration-200">
                  <span className="mr-3 text-[var(--primary-color)] mt-1">📍</span>
                  <span>Agricultural District<br />Sustainable Farming Zone</span>
                </li>
              </ul>
            </div>

            {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <p className="text-gray-300 mb-4">Stay connected with our latest updates and news.</p>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/profile.php?id=61556248844140" className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors duration-200 group" aria-label="Facebook">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@brisan_hub" className="bg-gray-700 p-3 rounded-full hover:bg-black transition-colors duration-200 group" aria-label="TikTok">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/bri_sanenterprise?igsh=bnFqZzJ3ODNzNmo4" className="bg-gray-700 p-3 rounded-full hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-200 group" aria-label="Instagram">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <p className="text-gray-300 text-sm mb-2">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[var(--primary-color)] text-sm"
                  />
                  <button className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg hover:bg-[var(--secondary-color)] transition-colors text-sm font-medium">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-center md:text-left">
                <p>&copy; {currentYear} BRISAN. All rights reserved. Built for sustainable agriculture and business growth.</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return (
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="container-custom">
          <p>BRISAN - Cultivating quality for a sustainable future</p>
          <p className="text-sm text-gray-400 mt-2">Footer temporarily unavailable</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
