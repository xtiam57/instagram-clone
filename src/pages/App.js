import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { routes } from 'routes';
import { theme } from 'utils/theme';
import { LayoutProvider } from 'providers/LayoutProvider';

const history = createBrowserHistory();

export default function App() {
  return (
    <>
      <LayoutProvider>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              {routes.map(({ id, path, exact, component, layout: Layout }) => {
                return (
                  <Layout
                    key={id}
                    path={path}
                    exact={exact}
                    component={component}
                  />
                );
              })}
            </Switch>
          </Router>
        </ThemeProvider>
      </LayoutProvider>
    </>
  );
}
