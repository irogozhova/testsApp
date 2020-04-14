import React, { PureComponent } from 'react';
import { connect } from "react-redux";

import {
  onUpdateTestName,
  onSubmit,
} from "actions/addNewTest";

import { 
  testSelector,
} from "reducers/addNewTestSelectors";

import InputField from 'components/InputField';

import styles from './AddNewTestPage.module.scss';

class AddNewTestPage extends PureComponent {
  handleSubmit = () => {
    const { onSubmit, test } = this.props;
    onSubmit(test);
  }

  render() {
    const { 
      test: {
        title,
      },
      // onUpdateTestName,
      isSendingInProgress,
    } = this.props;

    return (
      <div className={styles.root}>
        <h1>Создать новый тест</h1>
        <InputField
          type="text"
          name="testName"
          value={title}
          text="Название"
          // onChange={onUpdateTestName}
        />
        <div className={styles.saveRemoveBtnWrapper}>
          <button
            type="button"
            className={styles.saveBtn}
            onClick={this.handleSubmit}
            disabled={isSendingInProgress}
          >
            Создать
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
    // onUpdateTestName,
    onSubmit,
  }
)(AddNewTestPage);
