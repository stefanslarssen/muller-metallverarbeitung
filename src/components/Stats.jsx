import { Award, Briefcase, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Stats.css';

function Stats() {
  const { language } = useLanguage();
  const t = translations[language];
  const [ref, isVisible] = useScrollAnimation();

  const stats = [
    {
      icon: <Clock size={36} />,
      value: '50+',
      label: t.stats.years,
    },
    {
      icon: <Briefcase size={36} />,
      value: '1000+',
      label: t.stats.projects,
    },
    {
      icon: <Award size={36} />,
      value: 'DIN EN 1090',
      label: t.stats.certified,
    },
  ];

  return (
    <section className="stats" ref={ref}>
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card scale-in fade-in-delay-${index + 1} ${
                isVisible ? 'visible' : ''
              }`}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
