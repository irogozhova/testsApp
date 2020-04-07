import React, { Component } from 'react';

import styles from './CheckBox.module.scss';

class CheckBox extends Component {
  handleChange = () => {
    const { name, checked } = this.props;
    this.props.onChange({ name, value: !checked });
  }

  render() {
    const {
      name,
      label,
      checked,
    } = this.props;

    return (
      <div className={styles.root}>
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={this.handleChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  }
}

export default CheckBox;
