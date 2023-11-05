import React from 'react';
import styles from './PageListItem.module.css';

export default function PageListItem({ data }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.name}>{data.name}</h3>
      <a
        href={data.page_link}
        target="_blank"
        rel="noreferrer"
        className={styles.linkImage}
      >
        <img src={data.image} alt={data.description} className={styles.image} />
      </a>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.details}>
        <div className={styles.detailsBlock}>
          <p className={styles.type}>{data.type}</p>
          {data.role && <p>{data.role}</p>}
        </div>
        <ul className={styles.detailsBlock}>
          <li>
            <a
              href={data.page_link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Live Page
            </a>
          </li>
          <li>
            <a
              href={data.repo_link}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              Source Code
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
