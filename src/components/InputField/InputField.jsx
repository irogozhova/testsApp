import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './InputField.module.scss';

class InputField extends Component {
  handleChange = (event) => {
    const { name } = this.props;
    const { value } = event.target;
    this.props.onChange({ name, value });
  }

  render() {
    const {
      type,
      name,
      value,
      text,
      hasError,
    } = this.props;

    return (
      <label className={classnames(styles['root'], { [styles['hasError']]: hasError })}>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={text}
          onChange={event => this.handleChange(event)}
        />
        <span className={styles.focusInput} />
      </label>
    )
  }
}

export default InputField;
