/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import NotFoundPage from '_pages/NotFoundPage';

const Router = ({ routes }) => (
  <BrowserRouter>
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
