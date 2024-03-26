import React from 'react';
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={styles.cont}>
      <nav>
        <ul className={styles.ulCont}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>
      <div className={styles.copyright} >© 2024 Prasanth Muthupandi PortFolio</div>
    </div>
  );
};

export default Footer;
