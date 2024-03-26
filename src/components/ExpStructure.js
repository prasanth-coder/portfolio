import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Styles from "./ExpStructure.module.css"

const ExpStructure = ({title,subTitle}) => {
  return (
    <div className={Styles.main}>
        <div className={Styles.icon}>
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className={Styles.content}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
        </div>
      
    </div>
  )
}

export default ExpStructure
