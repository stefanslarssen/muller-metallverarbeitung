import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { History, Building, Wrench, TrendingUp, Award } from 'lucide-react';
import './About.css';

function About() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();

  const timelineEvents = [
    {
      year: '1958',
      icon: <Building size={32} />,
      title: t.about.timeline.year1958.title,
      description: t.about.timeline.year1958.description,
      image: `${import.meta.env.BASE_URL}images/history-1958.png`,
    },
    {
      year: language === 'de' ? 'Anfang 1960er' : 'Early 1960s',
      icon: <TrendingUp size={32} />,
      title: t.about.timeline.early60s.title,
      description: t.about.timeline.early60s.description,
      image: `${import.meta.env.BASE_URL}images/history-construction.png`,
    },
    {
      year: '1964',
      icon: <Wrench size={32} />,
      title: t.about.timeline.year1964.title,
      description: t.about.timeline.year1964.description,
      image: `${import.meta.env.BASE_URL}images/history-1964-hall.png`,
    },
    {
      year: '2025',
      icon: <Award size={32} />,
      title: t.about.timeline.today.title,
      description: t.about.timeline.today.description,
      image: `${import.meta.env.BASE_URL}images/history-modern-hall.png`,
    },
  ];

  return (
    <section id="unternehmen" className="about" ref={ref}>
      <div className="about-container">
        <h2 className={`about-main-title fade-in ${isVisible ? 'visible' : ''}`}>
          {t.about.title}
        </h2>

        {/* Timeline Section */}
        <div className={`timeline-section fade-in fade-in-delay-1 ${isVisible ? 'visible' : ''}`}>
          <div className="section-header">
            <History size={32} className="section-icon" />
            <h3>{t.about.history.title}</h3>
          </div>

          <div className="timeline">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`timeline-item fade-in fade-in-delay-${index + 2} ${
                  isVisible ? 'visible' : ''
                }`}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon">{event.icon}</div>
                  <div className="timeline-line"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-year">{event.year}</div>
                  {event.image && (
                    <div className="timeline-image">
                      <img src={event.image} alt={event.title} />
                    </div>
                  )}
                  <h4 className="timeline-title">{event.title}</h4>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="history-footer">
            <p>{t.about.history.certification}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
