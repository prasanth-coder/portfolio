import React from 'react'
import styles from "./SlideButton.module.css"
const SlideButton = ({name,fun,i}) => {
  return (
    <button onClick={fun} className={styles.btn}>
      {name}
    </button>
  )
}

export default SlideButton
