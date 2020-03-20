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
      {text}:
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default InputField;
