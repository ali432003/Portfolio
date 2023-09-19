import React, { useState, useEffect } from 'react';
import anime from 'animejs';
import CardMadebyme from '../Cards/cardMadebyme';

// Staggering Animation
const DotGrid = ({ GRID_WIDTH, GRID_HEIGHT }) => {
  const handleDotClick = (e) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

// Staggering effect project
const Projects = () => {
  const [GRID_WIDTH, setGridWidth] = useState(                            //for responsiveness
    window.innerWidth >= 1024 ? 55 : window.innerWidth === 768 ? 25 : 15
  );
  
  const [GRID_HEIGHT, setGridHeight] = useState(
    window.innerWidth >= 1024 ? 42 : window.innerWidth === 768 ? 90 : 70
  );
  

  
  return (
    <div className="relative grid place-content-center lg:px-10  py-4">

      <DotGrid GRID_WIDTH={GRID_WIDTH} GRID_HEIGHT={GRID_HEIGHT} />
      <div className="absolute m-5 mt-16 grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
        <CardMadebyme title = "E-commerce Site" img = "E-commerce.png" live="https://ali432003.github.io/E-commerce-Site/" code="https://github.com/ali432003/E-commerce-Site"/>
        <CardMadebyme title = "Restaurent Site" img = "restaurent.png" live="https://ali432003.github.io/restaurent-site-2/" code="https://github.com/ali432003/restaurent-site-2"/>
        <CardMadebyme title = "Prayer Timings" img = "prayerTimings.png" live="https://prayertimingsaroundtheworld.netlify.app/" code="https://github.com/ali432003/PrayerTimings"/>
        <CardMadebyme title = "Portfolio Site" img = "portfolio.png" live="https://me-fbx5mf0bd-ali432003.vercel.app/" code="https://github.com/ali432003/me"/>
      </div>
      <div className="mx-auto lg:mt-4 sm:-mt-6">
        <button className="button p-2 rounded-lg text-slate-200 font-bold"><a href="https://github.com/ali432003?tab=repositories" target="_blank">Show more</a></button>
      </div>
    </div>
  );
};

export default Projects;
