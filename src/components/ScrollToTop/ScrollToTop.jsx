import React,{useEffect,useState} from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add an event listener to track scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

    return (
        <div className={`${isVisible ? 'visible' : 'hidden'} flex justify-end mr-4`} onClick={scrollToTop}>
            <img src='src/assets/arrow_up.svg' className='bg-yellow-400 p-2 rounded-full animation cursor-pointer sToTop'></img> 
        </div>
    )
}