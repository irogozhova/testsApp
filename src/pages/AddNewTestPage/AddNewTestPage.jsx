import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { onFieldChange, onSubmit } from "actions/addNewTest";

import { 
  testSelector,
  isSendingInProgressSelector,
} from "reducers/addNewTestSelectors";

import InputField from 'components/InputField';
import AddQuestionForm from './AddQuestionForm';

import styles from './AddNewTestPage.module.scss';

class AddNewTestPage extends PureComponent {
  state = {
    isQuestionFormVisible: false,
  }

  handleSubmit = () => {
    const { onSubmit, test } = this.props;
    onSubmit(test);
  }

  handleAddQuestion = () => {
    this.setState({ isQuestionFormVisible: true });
  }

  render() {
    const { 
      test: {
        name,
      },
      onFieldChange,
      isSendingInProgress,
    } = this.props;

    const { isQuestionFormVisible } = this.state;

    return (
      <div className={styles.root}>
        <h1>Новый тест</h1>
        <InputField
          type="text"
          name="testName"
          value={name}
          text="Название теста"
          onChange={onFieldChange}
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
        <AddQuestionForm isVisible={isQuestionFormVisible} />
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
    isSendingInProgres: isSendingInProgressSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { 
    onFieldChange,
    onSubmit,
  }
)(AddNewTestPage);
