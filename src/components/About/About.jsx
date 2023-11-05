// About.jsx
import React from 'react';
import styles from './About.module.css';
import Button from '../Button/Button';
import { PiHandWaving } from 'react-icons/pi';

export default function About({ handleChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.aboutContainer}>
        <div className={styles.introduction}>
          <PiHandWaving className={styles.icon} size={60} />
          <h2>Hello !</h2>
          <h3>My name is Ciobanca Andrei-Sorin</h3>
        </div>
        <div className={styles.description}>
          <p>
            "I am a Junior Front End developer with a strong focus on HTML5,
            CSS3, and JavaScript. Over the next six months, I am determined to
            enhance my programming skills, particularly by delving deeper into
            learning React. Additionally, I am keen on exploring Back End
            technologies, with a specific interest in mastering NodeJS."
          </p>
        </div>
      </div>
      <Button
        text={'Projects'}
        onClick={handleChange}
        customClass={styles.projects}
      />
    </div>
  );
}
