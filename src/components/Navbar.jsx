import { useState } from 'react';
import { Menu, X, Languages, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      setProductsOpen(false);
    }
  };

  const scrollToCategory = (categoryId) => {
    // First, show products if they're hidden
    const showButton = document.querySelector('.products-toggle-btn');
    if (showButton && showButton.textContent.includes(language === 'de' ? 'anzeigen' : 'Show')) {
      showButton.click();
    }

    // Then scroll to the category after a short delay
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);

    setIsOpen(false);
    setProductsOpen(false);
  };

  const productCategories = [
    { id: 'anlagenbau', name: language === 'de' ? 'Anlagenbau' : 'Plant Engineering' },
    { id: 'apparatebau', name: language === 'de' ? 'Apparatebau' : 'Apparatus Construction' },
    { id: 'stahlbau', name: language === 'de' ? 'Stahlbau' : 'Steel Construction' },
    { id: 'edelstahl', name: language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('top')}>
          <img src="/images/mrm-logo.png" alt="MRM Logo" className="logo-image" />
          <div className="logo-text">
            <span className="company-name">Müller Metallverarbeitung GmbH</span>
            <div className="logo-underline"></div>
          </div>
        </div>

        <div className="navbar-right">
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li
              className="dropdown"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <a className="dropdown-trigger">
                {t.nav.products} <ChevronDown size={16} />
              </a>
              <ul className={`dropdown-menu ${productsOpen ? 'show' : ''}`}>
                {productCategories.map((category) => (
                  <li key={category.id}>
                    <a onClick={() => scrollToCategory(category.id)}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li><a onClick={() => scrollToSection('leistungen')}>{t.nav.services}</a></li>
            <li><a onClick={() => scrollToSection('unternehmen')}>{t.nav.about}</a></li>
            <li><a onClick={() => scrollToSection('kontakt')}>{t.nav.contact}</a></li>
          </ul>

          <button className="language-toggle" onClick={toggleLanguage} title="Change language">
            <Languages size={20} />
            <span>{language === 'de' ? 'EN' : 'DE'}</span>
          </button>

          <button className="navbar-toggle" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
