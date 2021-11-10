import styles from './InputFile.module.scss';
import iconDownloadUrl from '../../../assets/icons/download.svg';
import React from 'react';

export default function InputFile({ title, name, accept, onChange }) {
  return (
    <label className={styles.wrapper}>
      <input
        accept={accept}
        type="file"
        name={name}
        onChange={onChange}
        required
      />
      <span className={styles.icon}>
        <img src={iconDownloadUrl} alt="" />
      </span>
      <span className={styles.title}>{title}</span>
    </label>
  );
}
