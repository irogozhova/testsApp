import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
  // onUpdateTestName,
  onShowAddQuestionForm,
  // onSubmit,
} from "actions/editTest";

import { questionFormSelector } from "reducers/questionFormSelectors";
import { testSelector } from "reducers/addNewTestSelectors";

import InputField from 'components/InputField';
import AddQuestionForm from './AddQuestionForm';

import styles from './EditTestPage.module.scss';

class EditTestPage extends PureComponent {
  handleSubmit = () => {
    const { onSubmit, test } = this.props;
    onSubmit(test);
  }

  handleAddQuestion = () => {
    const { onShowAddQuestionForm } = this.props;
    onShowAddQuestionForm();
  }


  render() {
    const {
      test: {
        title,
      },
      questionForm: {
        isVisible,
        // title,
        questionType,
      },
      // onUpdateTestName,
      isSendingInProgress,
    } = this.props;

    return (
      <div className={styles.root}>
        <h1>Редактировать тест</h1>
        <InputField
          type="text"
          name="testName"
          value={title}
          text={title}
          // onChange={onUpdateTestName}
        />
        <div className={styles.addQuestionBtnWrapper}>
          <button
            type="button"
            title="Добавить вопрос"
            className={styles.addQuestionBtn}
            onClick={this.handleAddQuestion}
          >
            <span>Добавить вопрос</span>
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
        <AddQuestionForm
          isVisible={isVisible}
          title={title}
          questionType={questionType}
        />
        <div className={styles.saveRemoveBtnWrapper}>
          <button
            type="button"
            className={styles.saveBtn}
            onClick={this.handleSubmit}
            disabled={isSendingInProgress}
          >
            Сохранить
          </button>
          <button
            type="button"
            className={styles.removeBtn}
          >
            Удалить
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: testSelector(state),
    questionForm: questionFormSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { 
    // onUpdateTestName,
    onShowAddQuestionForm,
    // onSubmit,
  }
)(EditTestPage);
