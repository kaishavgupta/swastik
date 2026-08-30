import React, { useState, useEffect } from 'react';
import Contact1 from './contact/contact1';
import Contact2 from './contact/contact2';
import Contact3 from './contact/contact3';
import Contact4 from './contact/contact4';
import Contact5 from './contact/contact5';

interface ContactProps {
  onNavigate?: (path: string) => void;
}

export const Contact: React.FC<ContactProps> = () => {
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const sectionIds = ['contact-part1', 'contact-part2', 'contact-part3', 'contact-part4', 'contact-part5'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveDot(index);
            }
          },
          { threshold: 0.4 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(obs => obs.disconnect());
    };
  }, []);

  useEffect(() => {
    if (window.location.hash.includes('?')) {
      setTimeout(() => {
        const el = document.getElementById('contact-part2');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, []);

  const scrollToPart = (index: number) => {
    const el = document.getElementById(`contact-part${index + 1}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-presentation-wrapper">
      {/* DESKTOP VERTICAL SECTION INDICATOR DOTS */}
      <div className="contact-side-dots" aria-label="Section navigation">
        {[0, 1, 2, 3, 4].map(idx => (
          <button
            key={idx}
            onClick={() => scrollToPart(idx)}
            className={`contact-dot ${activeDot === idx ? 'active' : ''}`}
            aria-label={`Scroll to part ${idx + 1}`}
          />
        ))}
      </div>

      <main className="contact-page">
        <Contact1 onScrollToPart={scrollToPart} />
        <Contact2 />
        <Contact3 />
        <Contact4 onScrollToPart={scrollToPart} />
        <Contact5 onScrollToPart={scrollToPart} />
      </main>
    </div>
  );
};

export default Contact;
