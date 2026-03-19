import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language];

  // German phone number format: +49 2734 1234567
  // Remove spaces and format for WhatsApp
  const whatsappNumber = '4927341234567';
  const whatsappMessage = encodeURIComponent(
    language === 'de'
      ? 'Hallo, ich interessiere mich für Ihre Dienstleistungen.'
      : 'Hello, I am interested in your services.'
  );

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      '_blank'
    );
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-button"
      aria-label={t.whatsapp.label}
      title={t.whatsapp.title}
    >
      <MessageCircle size={28} />
    </button>
  );
}

export default WhatsAppButton;
