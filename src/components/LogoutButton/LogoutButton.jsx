import React, { Component } from 'react';
import { connect } from "react-redux";
import { onLogout } from "actions/logout";

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
  const { isSendingInProgress } = state;

  return { 
    isSendingInProgress,
  };
};

export default connect(mapStateToProps, { onLogout })(LogoutButton);
