import React from 'react';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';
import { isArray, map } from 'lodash';
import { Route } from 'react-router-dom';
import { includes, isEmpty } from 'lodash';

const routes = [...publicRoutes, ...privateRoutes];
const roles = [
  'DEF',
  'ABC'
];

const isAuth = true;

const RenderRoute = ({ component: Component, ...rest }) => {
  console.log(11111111);
  return (
    <Route
      {...rest}
      render={routeProps => {



        // if (!isEmpty(isAuth)) {
        //   return <Component {...routeProps} />;
        // }

        // if (isEmpty(isAuth)) {
        //   return <Component {...routeProps} />;
        // }



        if (!isEmpty(rest.role)) {
          if (includes(roles, rest.role)) {
            return <Component {...routeProps} />;
          }
          return 'aaaaaaaaaaaaaa';
        } else {
          return <Component {...routeProps} />;
        }
      }
      }
    />
  );
};

export const Routes = () => (
  isArray(routes) && map(routes, (item, index) => {
    console.log(1111111111111111111111111111);
    return <RenderRoute
      key={index}
      component={item.Component}
      {...item}
    />;
  })
);