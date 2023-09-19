import React,{useState,useEffect,useRef} from 'react'
import './Home.css'
import Typed from 'typed.js'
import { Link } from 'react-scroll';


export default function Home() {
  // Typing animation


  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>UI/UX</i> Design', 'Web <i>Sites/Apps</i>',"<i>E-Commerce</i> Sites","<i>PortFolio</i> Designs"],
      typeSpeed: 60,
      backSpeed:90,
      loop:true
    });

    return () => {
      
      typed.destroy();
    };
  }, []);

  
  return (
    <section id="home-section" style={{ background: "#3332" }}>
      <div>
      <img src="src/assets/blob.svg" style={{position:"absolute"}} className='lg:mt-9 lg:-ms-5 animation' width={'550px'} alt="" />
        <div className="flex justify-between">
          <div className='flex flex-col text-start main font-semibold'>
            <h4 className='lg:z-10'>Hey I'am</h4>
            <h1 className='lg:z-10'>Muhammad Ali Aamir</h1>
            <h6 className='lg:z-10'>I Develop Interactive <span className='font-extrabold' ref={el}>Sites</span></h6>
            <button className='p-2 lg:z-10 rounded-md cursor-pointer  lg:mt-4 button'><Link
              to="contact-section"
              smooth={true}
              className='cursor-pointer'
              duration={500}
              offset={-100}
            >Hire Me!</Link></button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
