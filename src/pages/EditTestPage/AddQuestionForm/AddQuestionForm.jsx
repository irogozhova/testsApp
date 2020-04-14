import React, { Component } from 'react';
import { connect } from "react-redux";

import Animated from 'components/Animated';

import styles from './AddQuestionForm.module.scss';

class AddQuestionForm extends Component {
  render() {
    const { 
      isVisible,
      title,
      questionType,
    } = this.props;

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
            value={title}
            // onChange={onQuestionTitleChange}
          />
          <select>
            <option selected={questionType === "single"} value="single">Один из списка</option>
            <option selected={questionType === "multiple"} value="multiple">Несколько из списка</option>
            <option selected={questionType === "number"} value="number">Численный ответ</option>
          </select>
          <div className={styles.question}>
            <input type="radio" />
            <input
              type="text"
              name="option"
              value=""
            />
          </div>
        </div>
      </Animated>
    )
  }
}

const mapStateToProps = state => {
  return {
    // questions: questionsSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { 
    // onQuestionTitleChange,
  }
)(AddQuestionForm);
