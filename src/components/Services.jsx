import { Settings, Wrench, Scissors, Zap, Package } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Services.css';

function Services() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();

  const categoryIcons = {
    forming: <Wrench size={32} />,
    cutting: <Scissors size={32} />,
    welding: <Zap size={32} />,
    handling: <Package size={32} />,
  };

  return (
    <section id="leistungen" className="services" ref={ref}>
      <div className="services-container">
        <div className={`services-header fade-in ${isVisible ? 'visible' : ''}`}>
          <Settings size={48} className="services-icon" />
          <div>
            <h2 className="services-title">{t.services.title}</h2>
            <p className="services-description">{t.services.description}</p>
          </div>
        </div>

        <div className="equipment-categories">
          {Object.entries(t.services.categories).map(([key, category], catIndex) => (
            <div
              key={key}
              className={`equipment-category fade-in fade-in-delay-${catIndex + 1} ${isVisible ? 'visible' : ''}`}
            >
              <div className="category-header">
                <div className="category-icon">{categoryIcons[key]}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="category-items">
                {category.items.map((item, index) => (
                  <li key={index}>
                    <span className="item-bullet">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
