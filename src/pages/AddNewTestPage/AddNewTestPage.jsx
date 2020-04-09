import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import { onFieldChange } from "actions/addNewTest";

import { 
  testSelector,
} from "reducers/addNewTestSelectors";

import InputField from 'components/InputField';

import styles from './AddNewTestPage.module.scss';

class AddNewTestPage extends PureComponent {
  render() {
    const { 
      test: { 
        name,
      },
      onFieldChange,
    } = this.props;
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
          >
            <span>Добавить вопрос</span>
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: testSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { 
    onFieldChange,
  }
)(AddNewTestPage);
