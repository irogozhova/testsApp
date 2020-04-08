import React, { Component } from 'react';
import { connect } from "react-redux";
import { onLogout } from "actions/logout";

import { isSendingInProgressSelector } from "reducers/logoutSelectors";

class LogoutButton extends Component {
  render() {
    const { isSendingInProgress } = this.props;

    return (
      <button
        onClick={this.props.onLogout}
        disabled={isSendingInProgress}
      >
        Выйти
      </button>
    );
  }
}

const mapStateToProps = state => {
  return { 
    isSendingInProgress: isSendingInProgressSelector(state),
  };
};

export default connect(mapStateToProps, { onLogout })(LogoutButton);
