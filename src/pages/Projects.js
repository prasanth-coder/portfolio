import React,{useState,useEffect} from 'react'
import styles from "./Projects.module.css"
import {projects} from "../components/ProjectData"
import CardComp from '../components/CardComp'
import SlideButton from '../components/SlideButton'
import ButtonArrow from '../components/ButtonArrow';
import {scrollToNextSection} from "../Feature/ScrollPage"

const Projects = () => {
  const [startIndex, setStartIndex] = useState(1);
  const [index,setIndex] = useState(0); 
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const {title,src,content,btn,link} = projects[index];
  const handleScrollToNextSection = () => {
    scrollToNextSection('contacts'); 
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  const handleMinusClick = () => {
    if (startIndex > 1) {
      setStartIndex(startIndex - 1);
    }
  };

  const handlePlusClick = () => {
    
    if (startIndex < projects.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  const handleMinusClick1 = () => {
    if (index === 0) {
      setIndex(projects.length - 1);
    }
    else{
      setIndex(prev => prev - 1)
    }
  };

  const handlePlusClick1 = () => {
    
    if (index === projects.length - 1) {
      setIndex(0);
    }
    else{
      setIndex(prev => prev + 1)
    }
  };
  return (
    <div id="projects" className={`container ${styles.cont}`}>
      <div className={styles.header}>
        <p>Browse My</p>
        <h1>Projects</h1>
      </div>

      {windowSize > 1200 ?
      <div className={styles.content1}>
        <SlideButton name='<' fun={handleMinusClick}/>
        {projects.slice(startIndex - 1, startIndex + 2).map((d,index) =><CardComp key={index} title={d.title} src={d.src} btn={d.btn} content={d.content} link={d.link} />)}
        <SlideButton name='>' fun={handlePlusClick}/> 
      </div>
      : 
      <div className={styles.content2}>
       <SlideButton name='<' fun={handleMinusClick1}/>
          <CardComp title={title} src={src} btn={btn} content={content} link={link}/>
        <SlideButton name='>' fun={handlePlusClick1}/> 
      </div> }

      
      <div className={styles.buttonContainer}>
          <ButtonArrow scrollToNextSection={handleScrollToNextSection} section='experience'/> 
        </div>

    </div>
  )
}

export default Projects
