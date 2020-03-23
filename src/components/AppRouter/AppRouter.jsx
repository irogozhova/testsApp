/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import history from 'utils/history';

// import NotFoundPage from '_pages/NotFoundPage';

const Router = ({ routes }) => (
  <BrowserRouter history={history}>
    <Switch>
      {routes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          exact={exact}
          path={path}
          render={(props) => {
            return <Component {...props} />;
          }}
        />
      ))}
      {/* <Route path="*" exact component={NotFoundPage} /> */}
    </Switch>
  </BrowserRouter>
);

Router.propTypes = {
  routes: PropTypes.array,
};

export default Router;
