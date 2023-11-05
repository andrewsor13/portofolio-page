import React from 'react';
import styles from './PageList.module.css';
import PageListItem from 'components/PageListItem/PageListItem';
import PageBlock from 'components/PageBlock/PageBlock';
import siteData from '../../data/siteData';
import Button from 'components/Button/Button';

export default function PageList({ handleChange }) {
  return (
    <div className={styles.list}>
      {siteData.map((data, index) => {
        return (
          <PageBlock key={index}>
            <PageListItem data={data} />
          </PageBlock>
        );
      })}

      <Button
        text={'About me'}
        onClick={handleChange}
        customClass={styles.aboutMe}
      />
    </div>
  );
}
