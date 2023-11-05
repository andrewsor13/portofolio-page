import React from 'react';
import styles from './Contact.module.css';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className={styles.container}>
      <ul className={styles.contactList}>
        <li>
          <a
            href="https://github.com/andrewsor13"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare className={styles.icon}></FaGithubSquare>
          </a>
        </li>
        <li>
          {' '}
          <a
            href="https://www.linkedin.com/in/andrei-ciobanca-7796ba1a0/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.icon}></FaLinkedin>
          </a>
        </li>
      </ul>
    </div>
  );
}
