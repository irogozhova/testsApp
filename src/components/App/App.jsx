import React, { PureComponent } from 'react';

import AppRouter from '../AppRouter';

import './App.css';

class App extends PureComponent {
  render() {
    const { routes } = this.props;

    return (
      <AppRouter routes={routes} />
    );
  }
}

export default App;
