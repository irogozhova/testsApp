import React, { PureComponent } from 'react';
import { Provider } from "react-redux";

import AppRouter from 'components/AppRouter';
import store from 'store';

import './App.css';

class App extends PureComponent {
  render() {
    const { routes } = this.props;

    return (
      <Provider store={store}>
        <AppRouter routes={routes} />
      </Provider>
    );
  }
}

export default App;
