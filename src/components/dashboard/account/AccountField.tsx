import React from 'react';
import assets from '../../../assets/components/dashtask';
import styles from './css/account.module.css';

interface AccountFieldProps {
  label: string;
}

const AccountField = ({ label }: AccountFieldProps) => {
  return (
    <div>
      <div className={styles.fieldHead}>
        <label
          className={styles.fieldHeadLegend}
          htmlFor="">
          {label}
        </label>
        <button className={styles.fieldHeadIcon}>
          <img
            src={assets.icons.edit}
            alt="edit-field-icon"
          />
        </button>
        <span className={styles.fieldHeadLine}></span>
      </div>
      <input
        className={styles.fieldInput}
        type="text"
      />
    </div>
  );
};

export default AccountField;
