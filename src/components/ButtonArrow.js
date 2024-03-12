import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from "./ButtonArrow.module.css"

const ButtonArrow = ({scrollToNextSection}) => {
    
  return (
    <button onClick={scrollToNextSection} className={styles.button}>
        <FontAwesomeIcon icon={faArrowDown} className={styles.icon} />
    </button>  
  )
}

export default ButtonArrow;