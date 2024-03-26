import React from 'react'
import styles from "./Contacts.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Contacts = () => {
  return (
    <div id="contact" className={`container ${styles.cont}`}>
       <p>Get in Touch</p>
       <div className='h3'>Contact Me</div>

       <div className={styles.contBtn}>
       <button>
          <a href="mailto:prasanthmuthupandi@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> prasanthmuthupandi@gmail.com</a>
           <a href="https://www.linkedin.com/in/prasanth-muthupandi-b83b9720a/"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a> 
      </button>
       </div>
    </div>
  )
}

export default Contacts
