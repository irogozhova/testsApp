import React from 'react';
import classnames from 'classnames';

import styles from './InputField.module.scss';

function InputField({
  type,
  name,
  value,
  text,
  onChange,
  hasError,
}) {
  return (
    <label className={classnames(styles['root'], { [styles['hasError']]: hasError })}>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={text}
        onChange={onChange}
      />
      <span className={styles.focusInput} />
    </label>
  );
}

export default InputField;
