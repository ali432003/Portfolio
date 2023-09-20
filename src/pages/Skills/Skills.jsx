import React, { useState, useEffect, useRef } from 'react'
import anime from 'animejs';
import './Skills.css';
import CardsSkills from '../../components/Cards/cardSkill/cardsSkills';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

export default function Skills() {
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

  function animateNumber(targetnumber, duration, element) {
    let startTimestamp;
    const increment = (100 * targetnumber) / (duration / 1000); // 80% of the target number
    let currentNumber = 0;
  
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
  
      const progress = timestamp - startTimestamp;
      currentNumber += increment * (progress / 1000);
  
      if (currentNumber <= 100 * targetnumber) {
        element.textContent = currentNumber.toFixed(0) + "%"; // Adjust the number formatting as needed
        requestAnimationFrame(step);
      } else {
        element.textContent = (100 * targetnumber).toFixed(0) + "%"; // Ensure it reaches 80% exactly
      }
    }
  
    requestAnimationFrame(step);
  }
  
  // Usage
  const targetnumber1 = 0.8; // Change this to your desired target number
  const duration = 600000; // Change this to the duration in milliseconds
  const element1 = document.querySelector('.py'); // Replace 'h4' with the appropriate selector
  
  const targetnumber2 = 0.6; // Change this to your desired target number
  const element2 = document.querySelector('.ts'); // Replace 'h4' with the appropriate selector
  
  const targetnumber3 = 0.4; // Change this to your desired target number
  const element3 = document.querySelector('.sql'); // Replace 'h4' with the appropriate selector
  
  const targetnumber4 = 0.7; // Change this to your desired target number
  const element4 = document.querySelector('.html'); // Replace 'h4' with the appropriate selector
  
  const targetnumber5 = 0.7; // Change this to your desired target number
  const element5 = document.querySelector('.css'); // Replace 'h4' with the appropriate selector
  
  const targetnumber6 = 0.5; // Change this to your desired target number
  const element6 = document.querySelector('.java'); // Replace 'h4' with the appropriate selector
  
  const targetnumber7 = 0.8; // Change this to your desired target number
  const element7 = document.querySelector('.js'); // Replace 'h4' with the appropriate selector
  
  animateNumber(targetnumber1, duration, element1);
  animateNumber(targetnumber2, duration, element2);
  animateNumber(targetnumber3, duration, element3);
  animateNumber(targetnumber4, duration, element4);
  animateNumber(targetnumber5, duration, element5);
  animateNumber(targetnumber6, duration, element6);
  animateNumber(targetnumber7, duration, element7);


  return (
    <section id="skills-section" style={{ background: "#111a35" }}>
      <div className="flex justify-start">
        <div className="flex flex-col my-4 mx-4">
          <h1 style={{ color: "#fff" }}>Skills</h1>
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
      <div className='content flex flex-col'>
        <div className='my-4 text-center'>
          <p className='text-slate-400'>I'm well-equipped to create efficient and robust applications. I'm passionate about solving complex problems and delivering high-quality software solutions</p>
        </div>
        <h2 className='text-center'>Languages</h2>
        <div className='my-9 grid lg:grid-cols-2 md:grid-cols-2  gap-y-20 place-items-center'>
          <div>
            <img src="/assets/python.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='py'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '80%' : '0%'
              }}></div>
            </div>
          </div>
          <div>
            <img src="/assets/sql-server.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='sql'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '40%' : '0%'
              }}></div>
            </div>
          </div>
          <div>
            <img src="/assets/html5.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='html'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '70%' : '0%'
              }}></div>
            </div>
          </div>
          <div>
            <img src="/assets/css-3.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='css'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '70%' : '0%'
              }}></div>
            </div>
          </div>
          <div>
            <img src="/assets/js.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='js'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '80%' : '0%'
              }}></div>
            </div>
          </div>
          <div>
            <img src="/assets/java.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='java'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '50%' : '0%'
              }}></div>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-2'>
            <img src="/assets/typescript.png" className='w-16 mx-auto mb-4' alt="" />
            <h4 className='ts'></h4>
            <div className='w-80 mt-2 h-2 bg-slate-100 rounded-lg'>
              <div className='h-2 bg-slate-500 rounded-lg' style={{
                transition: 'width 6.2s ease-in-out',
                width: isScrolled ? '60%' : '0%'
              }}></div>
            </div>
          </div>
        </div>
        <h2 className='text-center'>Tools</h2>
        <div className='my-9 grid lg:grid-cols-3 grid-cols-2 gap-y-20 place-items-center'>
              <CardsSkills img="vite.svg"/>
              
              <CardsSkills img="mui.svg"/>
              
              <CardsSkills img="tailwind.svg"/>
              
              <CardsSkills img="react.svg"/>
              
              <CardsSkills img="bootstrap.svg"/>
              
              <CardsSkills img="npm.svg"/>
              
        </div>
      </div>
      {<ScrollToTop/>}
    </section>
  )
}
