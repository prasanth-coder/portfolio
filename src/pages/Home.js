import React from 'react';
import { Element } from 'react-scroll';
import styles from "./Home.module.css"
import ButtonArrow from '../components/ButtonArrow';
import {scrollToNextSection} from "../Feature/ScrollPage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  
    const handleScrollToNextSection = () => {
        scrollToNextSection('about');
      };
      const handleScrollToContactSection = () => {
        scrollToNextSection('contact');
      };

    const downloadCV = () => {
      const pdfUrl = process.env.PUBLIC_URL + '/Prasanth_Resume.pdf';     
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Prasanth_Resume.pdf';
      link.setAttribute('type', 'application/pdf'); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
 
  return (
    <Element name="home" id="home">
      <div className={`container ${styles.cont}`}>
        <div className={styles.mainContent}>
          <div className={styles.img}>
          <img src={process.env.PUBLIC_URL+"/img/pp.png"} width='200' heigth='100' alt="Italian Trulli" className={styles.avatar} />

          </div>
          <div className={styles.content}>
            <div>
            <p className='lead'>Hello I'm</p>
            <h1>Prasanth Muthupandi</h1>
            <p className='lead'>
              Software Developer
            </p>
            </div>
            <div className={styles.btns}>
              <button onClick={downloadCV}>Download cv</button>&nbsp;
              <button onClick={handleScrollToContactSection}>Contact Info</button>
            </div>
            <div className={styles.links}>           
                <a href='https://github.com/prasanth-coder'  target="_blank" rel="noopener noreferrer" >
                   <FontAwesomeIcon icon={faGithub} className={styles.git}/>&nbsp;
                </a>
                <a href='https://www.linkedin.com/in/prasanth-muthupandi-b83b9720a/' >
                   <FontAwesomeIcon icon={faLinkedin} className={styles.lid}/>
                </a>
            </div>

          </div>
          
        </div>
        
        <div className={styles.buttonContainer}>
          <ButtonArrow scrollToNextSection={handleScrollToNextSection} section='experience'/> 
        </div>
      </div>
    </Element>
  );
};

export default Home;
