import React from 'react'
import styles from "./Experience.module.css";
import ButtonArrow from '../components/ButtonArrow';
import {scrollToNextSection} from "../Feature/ScrollPage"
import ExpStructure from '../components/ExpStructure';
import {frontEnd,backEnd} from "../components/ExpData"
const Experience = () => {
  const handleScrollToNextSection = () => {
    scrollToNextSection('projects'); // Pass the section name as an argument
  };
  return (
    <div id="experience" className={`container ${styles.cont}`}>
      <div className={styles.header}>
        <p>Explore My</p>
        <h1>Experience</h1>
      </div>
      <div className={styles.boxes}>
        <div>
        <p style={{textAlign:'center'}} className='h4'>Front End</p>
        <div className={styles.box}>
          {frontEnd.map((data,index) => 
            <ExpStructure title={data.title} subTitle={data.subTitle} key={index}/>
          )}
          

        </div>
        </div>
        <div>
        <p style={{textAlign:'center'}} className='h4'>Back End</p>
        <div className={styles.box}>
          
        {backEnd.map((data,index) => 
            <ExpStructure title={data.title} subTitle={data.subTitle} key={index}/>
          )}

        </div>
        </div>
      </div> 
      <div className={styles.buttonContainer}>
          <ButtonArrow scrollToNextSection={handleScrollToNextSection} section='experience'/> 
      </div>
    </div>
  )
}

export default Experience
