import React from 'react';
import styles from './PageBlock.module.css';

export default function PageBlock({ children }) {
  return <div className={styles.page}>{children}</div>;
}
