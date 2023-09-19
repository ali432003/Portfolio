import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`sticky drop-shadow-2xl top-0 header ${isScrolled ? 'scroll-on' : ''}`}>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        {isOpen ? (
          <div className={`cross`} onClick={toggleMenu}>
            <div className='cross-line'></div>
            <div className='cross-line'></div>
          </div>
        ) : (
          <div className={`hamburger`} onClick={toggleMenu}>
            <div className={`line`}></div>
            <div className={`line`}></div>
            <div className={`line`}></div>
          </div>
        )}
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link
              to="home-section"
              smooth={true}
              offset={-100}
              // duration={500}
              onClick={toggleMenu}
              className='cursor-pointer a'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              offset={-100}
              onClick={toggleMenu}
              className='cursor-pointer a'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects-section"
              className='cursor-pointer a'
              smooth={true}
              duration={500}
              offset={-100}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills-section"
              className='cursor-pointer a'
              smooth={true}
              duration={500}
              offset={-100}
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact-section"
              smooth={true}
              className='cursor-pointer a'
              duration={500}
              offset={-100}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </div>
  )
}
