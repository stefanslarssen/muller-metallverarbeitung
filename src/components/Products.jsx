import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Factory, Cog, Wrench, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import './Products.css';

function Products() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();
  const [showProducts, setShowProducts] = useState(false);

  // Featured products with REAL images from Müller Metallverarbeitung
  const featuredProducts = [
    {
      name: language === 'de' ? 'Sandaufbereitungsanlage' : 'Sand Preparation System',
      category: language === 'de' ? 'Anlagenbau' : 'Plant Engineering',
      description: language === 'de' ? 'für Bremssand - komplette Aufbereitungsanlage' : 'for brake sand - complete preparation system',
      image: `${import.meta.env.BASE_URL}images/product-sandaufbereitungsanlage.png`,
      icon: <Factory size={32} />,
    },
    {
      name: language === 'de' ? 'Doppelspiralförderer' : 'Double Spiral Conveyor',
      category: language === 'de' ? 'Anlagenbau' : 'Plant Engineering',
      description: language === 'de' ? 'mit aufgesetztem Pufferspeicher; Wst. 1.4301 / S235JRG2 / S355J2G3' : 'with attached buffer storage; Material 1.4301 / S235JRG2 / S355J2G3',
      image: `${import.meta.env.BASE_URL}images/product-doppelspiralfoerderer.png`,
      icon: <Factory size={32} />,
    },
    {
      name: language === 'de' ? 'Schlammtrockner' : 'Sludge Dryer',
      category: language === 'de' ? 'Anlagenbau' : 'Plant Engineering',
      description: language === 'de' ? 'Industrieller Schlammtrockner mit mehreren Ebenen' : 'Industrial sludge dryer with multiple levels',
      image: `${import.meta.env.BASE_URL}images/product-schlammtrockner.png`,
      icon: <Factory size={32} />,
    },
    {
      name: language === 'de' ? 'Spiralförderer' : 'Spiral Conveyor',
      category: language === 'de' ? 'Anlagenbau' : 'Plant Engineering',
      description: language === 'de' ? 'Effizienter Materialtransport mit Spiraltechnologie' : 'Efficient material transport with spiral technology',
      image: `${import.meta.env.BASE_URL}images/product-spiralfoerderer.png`,
      icon: <Factory size={32} />,
    },
    {
      name: language === 'de' ? 'Wendelbrecher' : 'Spiral Crusher',
      category: language === 'de' ? 'Apparatebau' : 'Apparatus Construction',
      description: language === 'de' ? 'für Gießerei; Wst. P265GH / S235JR+N; Gewicht ca. 3 to.; mit Stahlbauuntergestell' : 'for foundry; Material P265GH / S235JR+N; Weight approx. 3 tons; with steel structure base',
      image: `${import.meta.env.BASE_URL}images/product-wendelbrecher-1.png`,
      icon: <Cog size={32} />,
    },
    {
      name: language === 'de' ? 'Motorkonsole' : 'Motor Console',
      category: language === 'de' ? 'Apparatebau' : 'Apparatus Construction',
      description: language === 'de' ? 'Wst. P265GH / S355J2+N; Gewicht ca. 3 to.' : 'Material P265GH / S355J2+N; Weight approx. 3 tons',
      image: `${import.meta.env.BASE_URL}images/product-motorkonsole.png`,
      icon: <Cog size={32} />,
    },
    {
      name: language === 'de' ? 'Schweißkonstruktionen' : 'Welded Constructions',
      category: language === 'de' ? 'Stahlbau' : 'Steel Construction',
      description: language === 'de' ? 'FE geprüft - tragende Stahlkonstruktionen nach höchsten Standards' : 'FE certified - load-bearing steel constructions to the highest standards',
      image: `${import.meta.env.BASE_URL}images/product-schweisskonstruktionen.png`,
      icon: <Wrench size={32} />,
    },
    {
      name: language === 'de' ? 'Plasmabrennbecken' : 'Plasma Burner Basin',
      category: language === 'de' ? 'Stahlbau' : 'Steel Construction',
      description: language === 'de' ? 'Robuste Stahlkonstruktion für industrielle Anwendungen' : 'Robust steel construction for industrial applications',
      image: `${import.meta.env.BASE_URL}images/product-plasmabrennbecken.png`,
      icon: <Wrench size={32} />,
    },
    {
      name: language === 'de' ? 'Abkantarbeiten' : 'Bending Work',
      category: language === 'de' ? 'Stahlbau' : 'Steel Construction',
      description: language === 'de' ? 'Presse 150 to.; max. Kantlänge 4,20 m; max. Materialstärke 10 mm' : 'Press 150 tons; max. bending length 4.20 m; max. material thickness 10 mm',
      image: `${import.meta.env.BASE_URL}images/product-abkantarbeiten.png`,
      icon: <Wrench size={32} />,
    },
    {
      name: language === 'de' ? 'Diffusor' : 'Diffuser',
      category: language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing VA',
      description: language === 'de' ? 'Wst. 1.4301 V2A - präzise Edelstahlfertigung' : 'Material 1.4301 V2A - precision stainless steel manufacturing',
      image: `${import.meta.env.BASE_URL}images/product-diffusor.png`,
      icon: <Sparkles size={32} />,
    },
    {
      name: language === 'de' ? 'Schmelztiegel' : 'Melting Crucible',
      category: language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing VA',
      description: language === 'de' ? 'doppelwandig mit Isolierung; Wst. 1.4571 V4A' : 'double-walled with insulation; Material 1.4571 V4A',
      image: `${import.meta.env.BASE_URL}images/product-schmelztiegel.png`,
      icon: <Sparkles size={32} />,
    },
    {
      name: language === 'de' ? 'Beheizte Siebtrommel' : 'Heated Screening Drum',
      category: language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing VA',
      description: language === 'de' ? 'zur Reinigung von Stahlteilen; mit Innenwendelschnecke aus Edelstahl' : 'for cleaning steel parts; with internal spiral screw made of stainless steel',
      image: `${import.meta.env.BASE_URL}images/product-siebtrommel.png`,
      icon: <Sparkles size={32} />,
    },
    {
      name: language === 'de' ? 'Unterbau' : 'Substructure',
      category: language === 'de' ? 'Stahlbau' : 'Steel Construction',
      description: language === 'de' ? 'Stabile Stahlunterkonstruktionen für Anlagen und Maschinen' : 'Stable steel substructures for systems and machines',
      image: `${import.meta.env.BASE_URL}images/product-unterbau.png`,
      icon: <Wrench size={32} />,
    },
  ];

  // Group products by category
  const categories = {
    apparatebau: featuredProducts.filter(p => p.category === (language === 'de' ? 'Apparatebau' : 'Apparatus Construction')),
    anlagenbau: featuredProducts.filter(p => p.category === (language === 'de' ? 'Anlagenbau' : 'Plant Engineering')),
    stahlbau: featuredProducts.filter(p => p.category === (language === 'de' ? 'Stahlbau' : 'Steel Construction')),
    edelstahl: featuredProducts.filter(p => p.category === (language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing VA')),
  };

  const categoryIcons = {
    apparatebau: <Cog size={28} />,
    anlagenbau: <Factory size={28} />,
    stahlbau: <Wrench size={28} />,
    edelstahl: <Sparkles size={28} />,
  };

  const categoryNames = {
    apparatebau: language === 'de' ? 'Apparatebau' : 'Apparatus Construction',
    anlagenbau: language === 'de' ? 'Anlagenbau' : 'Plant Engineering',
    stahlbau: language === 'de' ? 'Stahlbau' : 'Steel Construction',
    edelstahl: language === 'de' ? 'Edelstahlverarbeitung VA' : 'Stainless Steel Processing VA',
  };

  return (
    <section id="produkte" className="products" ref={ref}>
      <div className="products-container">
        <div className={`products-intro fade-in ${isVisible ? 'visible' : ''}`}>
          <h2>{t.products.title}</h2>
          <p className="products-description">
            {t.products.description}
            <strong>{t.products.apparateBold}</strong>
            {t.products.description2}
            <strong>{t.products.anlagenBold}</strong>
            {t.products.description3}
            <strong>{t.products.stahlbauBold}</strong>
            {t.products.description4}
          </p>

          <button
            className="products-toggle-btn"
            onClick={() => setShowProducts(!showProducts)}
          >
            {showProducts
              ? (language === 'de' ? 'Produkte ausblenden' : 'Hide Products')
              : (language === 'de' ? 'Produkte anzeigen' : 'Show Products')
            }
            {showProducts ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {showProducts && (
          <div className="products-categories">
            {Object.keys(categories).map((categoryKey, catIndex) => (
              <div
                key={categoryKey}
                id={`category-${categoryKey}`}
                className={`product-category fade-in fade-in-delay-${catIndex + 1} ${isVisible ? 'visible' : ''}`}
              >
                <div className="category-header">
                  {categoryIcons[categoryKey]}
                  <h3>{categoryNames[categoryKey]}</h3>
                </div>
                <div className="category-products-grid">
                  {categories[categoryKey].map((product, index) => (
                    <div key={index} className="featured-product-card">
                      <div className="product-image-container">
                        <img src={product.image} alt={product.name} loading="lazy" />
                      </div>
                      <div className="product-details">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="products-footer">
              <p>{language === 'de'
                ? 'Alle Produkte werden nach DIN EN 1090 gefertigt und sind FE-geprüft.'
                : 'All products are manufactured according to DIN EN 1090 and are FE-certified.'}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;
