import React from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';

const Section = ({ name }) => {
  return (
    <Element name={name}>
      <div>
        <h2>{name}</h2>
        <button onClick={() => scrollToNextSection(name)}>Next Section</button>
      </div>
    </Element>
  );
};

const scrollToNextSection = (currentSection) => {
  const sections = ['home', 'experience', 'projects', 'contacts'];
  const currentIndex = sections.indexOf(currentSection);
  if (currentIndex !== -1 && currentIndex < sections.length - 1) {
    const nextSection = sections[currentIndex + 1];
    ScrollLink.scrollTo(nextSection, { duration: 500, smooth: true });
  }
};

export default Section;
