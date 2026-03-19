import { useState } from 'react';
import { MapPin, Phone, Mail, Smartphone, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contact.successMessage);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="kontakt" className="contact" ref={ref}>
      <div className="contact-container">
        <h2 className={`contact-title fade-in ${isVisible ? 'visible' : ''}`}>
          {t.contact.title}
        </h2>

        {/* Contact Persons */}
        <div className={`contact-persons fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <h3>{t.about.team.title}</h3>
          <div className="persons-grid">
            <div className="person-card">
              <div className="person-photo">
                <img src="/images/ralf-mueller.png" alt={t.about.team.manager.name} />
              </div>
              <div className="person-info">
                <h4>{t.about.team.manager.name}</h4>
                <p>{t.about.team.manager.role}</p>
              </div>
            </div>
            <div className="person-card">
              <div className="person-photo">
                <img src="/images/ute-weigand.png" alt={t.about.team.admin.name} />
              </div>
              <div className="person-info">
                <h4>{t.about.team.admin.name}</h4>
                <p>{t.about.team.admin.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information and Form */}
        <div className="contact-layout">
          {/* Contact Information */}
          <div className={`contact-info-section fade-in fade-in-delay-2 ${isVisible ? 'visible' : ''}`}>
            <h3>{t.contact.info}</h3>

            <div className="contact-item">
              <MapPin size={20} className="contact-icon" />
              <div>
                <p>Im Seifen 63</p>
                <p>57258 Freudenberg-Alchen</p>
                <p>Deutschland</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={20} className="contact-icon" />
              <div>
                <p>Tel: +49 271 37 57 43 3</p>
                <p>Fax: +49 271 37 57 43 5</p>
              </div>
            </div>

            <div className="contact-item">
              <Smartphone size={20} className="contact-icon" />
              <p>Mobil: +49 172 60 55 49 7</p>
            </div>

            <div className="contact-item">
              <Mail size={20} className="contact-icon" />
              <p>metaba@metaba-mueller.de</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact-form-section fade-in fade-in-delay-3 ${isVisible ? 'visible' : ''}`}>
            <h3>{t.contact.form}</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t.contact.name} *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.email} *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.message} *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                {t.contact.submit}
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={`map-section fade-in fade-in-delay-3 ${isVisible ? 'visible' : ''}`}>
          <div className="map-header">
            <Navigation size={32} className="map-icon" />
            <h3>{t.contact.map.title}</h3>
          </div>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.873!2d7.8933!3d50.8976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc5e3c8c8c8c8d%3A0x0!2sIm%20Seifen%2063%2C%2057258%20Freudenberg!5e0!3m2!1sen!2sde!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Müller Metallverarbeitung GmbH Location"
            ></iframe>
          </div>
          <p className="map-address">
            <MapPin size={18} />
            Im Seifen 63, 57258 Freudenberg-Alchen, Deutschland
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
