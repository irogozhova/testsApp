import React, { PureComponent, Fragment } from 'react';

import AppRouter from '../AppRouter';

class App extends PureComponent {
  render() {
    const { routes } = this.props;

    return (
      <Fragment>
        <AppRouter routes={routes} />
      </Fragment>
    );
  }
}

export default App;
