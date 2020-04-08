import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentUser } from "actions/currentUser";
import { 
  currentUserStatusSelector,
  isCurrentUserSelector,
} from "reducers/currentUserSelectors";

class PrivateRoute extends PureComponent {
  componentDidMount() {
    const { status, isCurrentUser, getCurrentUser } = this.props;

    if (!isCurrentUser && !status) {
      getCurrentUser();
    }
  }

  render() {
    const { children, status, isCurrentUser } = this.props;

    if (isCurrentUser) {
      return children;
    }

    if (status === 'FAILURE') {
      return <Redirect to='/login' />
    }

    return null;
  }
}

const mapStateToProps = state => {
  return { 
    status: currentUserStatusSelector(state),
    isCurrentUser: isCurrentUserSelector(state),
  };
};

export default connect(
  mapStateToProps,
  { 
    getCurrentUser,
  }
)(PrivateRoute);
