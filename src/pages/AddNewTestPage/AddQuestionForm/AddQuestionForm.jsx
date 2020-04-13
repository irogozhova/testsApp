import React, { Component } from 'react';

import Animated from 'components/Animated';

import styles from './AddQuestionForm.module.scss';

class AddQuestionForm extends Component {
  render() {
    const { isVisible } = this.props;

    return (
      <Animated
        styleName="root"
        isVisible={isVisible}
        duration={{
          in: 0,
          out: 0,
        }}
      >
        <div className={styles.root}>
          <input
            type="text"
            name="questionTitle"
            value="Вопрос"
            // onChange={onFieldChange}
          />
        </div>
      </Animated>
    )
  }
}

export default AddQuestionForm;
