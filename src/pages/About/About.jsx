import React, { useEffect, useState, useRef } from 'react'
import './About.css'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'
import anime from 'animejs/lib/anime.es.js';

export default function About() {

  
  const [isScrolled, setIsScrolled] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    let observer;

    const handleScroll = () => {
      if (window.scrollY > 20) {
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
    <section id="about-section" style={{ background: "#111a35" }}>
      <div className="flex justify-start">
        <div className="flex flex-col my-4 mx-4 specific-unit-values-demo">
          <h1 style={{ color: "#fff" }}>Who Am I</h1>
          <div className='h-1 rounded-lg'
            ref={componentRef}
            style={{
              backgroundColor: '#00ffcc',
              transition: 'width 7s ease-in-out', 
              width: isScrolled ? '83.3333%' : '0%',
            }}></div>

        </div>
        {/* <i className='text-center mx-auto text-white my-5' style={{fontFamily:"Georgia"}}>"if you think you have a capability of doing something than<br/> just do it don't prove it to anyone"</i> */}
      </div>
      <div className='flex flex-col mx-4 text-center'>
        <h3 className='text-white text-3xl '>Academics</h3>
        <ul className='text-start my-2 text-xl text-sky-400 '>
          <li className='my-4'><strong className='text-2xl leading-9 text-container'>Matiriculation</strong> : <span><strong>Science</strong> - 2019 <br /></span>
            Nasra Public School, KHI with an A+ grade securing percentage of 84.92%</li>
          <li className='my-9'><strong className='text-2xl leading-9'>Intermediate</strong> : <span><strong>Pre-Eng</strong> - 2022 <br /></span>
            DJ Science Govt College, KHI with an A+ grade securing percentage of 82.27%</li>
          <li className='my-5'><strong className='text-2xl leading-9'>Bachelors of Science</strong> : <span><strong>Computer Science</strong> - Present<br /></span>
            UBIT, University of Karachi completed 1st year with a total 3.2CGPA</li>
        </ul>
      </div>
      <div className='flex flex-col mx-5 mt-4 text-center text-sky-400 mb-5'>
        <h3 className='text-white text-3xl'>What i'm doing Currently</h3>
        <h5 className='mx-auto my-2'>Front-End Developer & Designer</h5>
        <span className='mx-auto text-start sm:text-left sm:my-auto'>I specialize in creating and implementing visually appealing and user-friendly websites and web applications. With a strong background in HTML, CSS, and JavaScript, I have the technical skills needed to bring design concepts to life.My passion for staying up to date with the latest design trends and web technologies ensures that my work is always fresh and innovative.I bring strong collaboration and communication skills to the table. Whether working with designers, project managers, or other developers, I am a strong team player who is always willing to go the extra mile to ensure that projects are delivered on time and to a high standard.</span>
        <div className='lg:mt-4'>
          <button className='button p-2 rounded-lg hover:text-black hover:font-bold'>Download CV</button>
        </div>

      </div>

      {<ScrollToTop />}
    </section>
  )
}
