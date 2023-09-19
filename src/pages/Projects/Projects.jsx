import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';
import Anime from '../../components/Anime/Anime'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

export default function Projects() {
  const [isScrolled, setIsScrolled] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    let observer;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);

        if (componentRef.current) {
          componentRef.current.style.width = '83.3333%';
        }
      } else {
        setIsScrolled(false);

        if (componentRef.current) {
          componentRef.current.style.width = 'initial';
        }
      }
    };

    const startScrollListener = () => {
      window.addEventListener('scroll', handleScroll);
    };

    const stopScrollListener = () => {
      window.removeEventListener('scroll', handleScroll);
    };


    observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        startScrollListener();
      } else {
        stopScrollListener();
      }
    });


    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {

      if (componentRef.current) {
        observer.unobserve(componentRef.current);
        observer.disconnect();
      }
      stopScrollListener();
    };
  }, []);
  


  return (
    <section id="projects-section" style={{ background: "#333" }}>
      <div className="flex justify-start">
        <div className="flex flex-col my-4 mx-4">
          <h1 style={{ color: "#fff" }}>Projects</h1>
          <div
            className='h-1 rounded-lg'
            ref={componentRef}
            style={{
              backgroundColor: '#00ffcc',
              transition: 'width 7s ease-in-out',
              width: isScrolled ? '83.3333%' : '0%',
            }}
          ></div>
        </div>
      </div>
      <div>
        <Anime/>
      </div>

    
    <ScrollToTop/>        
    </section>
  );
}
