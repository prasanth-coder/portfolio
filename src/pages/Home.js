import React from 'react';
import { Element } from 'react-scroll';
import styles from "./Home.module.css"
import ButtonArrow from '../components/ButtonArrow';
import {scrollToNextSection} from "../Feature/ScrollPage"
const Home = () => {
  
    const handleScrollToNextSection = () => {
        scrollToNextSection('experience'); // Pass the section name as an argument
      };
 
  return (
    <Element name="home">
      <div className={`container ${styles.cont}`}>
        <div className={styles.mainContent}>
         <img src='/img/pp' alt="Italian Trulli" className={styles.avatar}/>

          <h1>Home</h1>
          <p>This is the Home section.</p>
        </div>
        
        <div className={styles.buttonContainer}>
          <ButtonArrow scrollToNextSection={handleScrollToNextSection} section='experience'/> 
        </div>
      </div>
    </Element>
  );
};

export default Home;
