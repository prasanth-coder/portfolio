import React from 'react'
import styles from "./About.module.css"
import ButtonArrow from '../components/ButtonArrow';
import {scrollToNextSection} from "../Feature/ScrollPage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase , faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const handleScrollToNextSection = () => {
        scrollToNextSection('experience'); // Pass the section name as an argument
      };
  return (
    <div id="about" className={`container ${styles.cont}`}>
      <div className={styles.header}>
        <p>Get to Know</p>
        <p className='h2'>About Me</p>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.image}>
           <img src={process.env.PUBLIC_URL+"/img/about.jpg"} alt="Italian Trulli" className={styles.avatar} />        
        </div>
        <div className={styles.context}>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} />
                    </div>   
                    <div>
                        <h1 className='h5'>Experience</h1>
                        <p>1+ Year</p>
                        <p>Full Stack Developer</p>
                    </div>
                    
                </div>
                <div className={styles.box}>
                    <div>
                        <FontAwesomeIcon icon={faGraduationCap} /> 
                    </div>
                    <div>
                        <h1 className='h5'>Education</h1>
                        <p>BE (Computer Science and Engineering</p>
                        <p>Ms (Cloud Computing)</p>
                    </div>
                    
                </div>
            </div>
            <div className={styles.subContent}>
                <p>Experienced full stack developer proficient in MERN stack. Skilled in developing robust web applications. Passionate about creating efficient and user-friendly solutions for various projects</p>
            </div>

        </div>
      </div>
      <div className={styles.buttonContainer}>
          <ButtonArrow scrollToNextSection={handleScrollToNextSection} section='experience'/> 
        </div>
    </div>
  )
}

export default About
