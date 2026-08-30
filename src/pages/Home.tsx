import React from 'react';
import HomePart1 from './home/home_part1';
import HomePart2 from './home/home_part2';
import HomePart3 from './home/home_part3';
import HomePart4 from './home/home_part4';
import HomePart5 from './home/home_part5';
import HomePart6 from './home/home_part6';
import HomePart7 from './home/home_part7';
import HomePart8 from './home/home_part8';
import HomePart9 from './home/home_part9';
import HomePart10 from './home/home_part10';
import HomePart11 from './home/home_part11';
import HomePart12 from './home/home_part12';

interface HomeProps {
  onNavigate?: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home-scroll-container">
      {/* PART 1: READY MIX CONCRETE (Hero) */}
      <HomePart1 onNavigate={onNavigate} />

      {/* PART 2: ABOUT SWASTIK MIXTURES */}
      <HomePart2 onNavigate={onNavigate} />

      {/* PART 3: OUR LEGACY */}
      <HomePart3 />

      {/* PART 4: OUR PRODUCTS */}
      <HomePart4 onNavigate={onNavigate} />

      {/* PART 5: QUALITY THAT BUILDS CONFIDENCE */}
      <HomePart5 />

      {/* PART 6: TECHNOLOGY & INFRASTRUCTURE */}
      <HomePart6 />

      {/* PART 7: EQUIPMENT & FLEET */}
      <HomePart7 />

      {/* PART 8: WHERE OUR CONCRETE BUILDS */}
      <HomePart8 />

      {/* PART 9: OUR PROCESS */}
      <HomePart9 />

      {/* PART 10: PROJECT TYPES */}
      <HomePart10 />

      {/* PART 11: OUR CLIENTS */}
      <HomePart11 />

      {/* PART 12: SAFETY & RESPONSIBILITY */}
      <HomePart12 onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
