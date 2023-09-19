import React, { useState, useEffect, useRef } from 'react'
import Footer from '../Footer/Footer';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


export default function Contact() {
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
    <section id='contact-section' style={{ background: "#333" }}>
      <div className="flex justify-start">
        <div className="flex flex-col my-4 mx-4">
          <h1 style={{ color: "#fff" }}>Contact</h1>
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
      <div className="container flex justify-center">
        <div className='w-2/3'>
          <h3 className='text-sky-500 text-center text-4xl my-4'>Get in Touch</h3>
          <p className='text-slate-400 text-center mb-4'>Although Im currently looking for any new opportunities. Feel free to reach out to me for any inquiries, collaborations, or simply to say hello. Im always excited to connect with like-minded individuals and explore new opportunities.</p>
          <p className='text-slate-400 text-center mb-4'>you can connect with me on professional networking platform <span className='cursor-pointer'><a href='https://www.linkedin.com/in/ali-aamir-249b87220/' target='_blank' rel='noopener noreferrer'>LinkedIn.</a></span> Feel free to send me a connection request and lets stay in touch</p>  
          <button className='button justify-content-center p-3 rounded-lg mx-auto block hover:font-bold mb-5'><a href="https://mail.google.com/mail/?view=cm&to=alifarhaan800@gmail.com" target='_blank'>Contact Me</a></button>
        </div>
      </div>
      
    </section>


  )
}
