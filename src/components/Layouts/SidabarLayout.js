import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { StyledLayout } from './StyledLayout';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'components/Main';
import Sidebar from 'components/Sidebar';

const StyledSidebarLayout = styled(StyledLayout)`
  grid-template-columns: minmax(200px, 25%) auto;
  grid-template-areas:
    'header header'
    'aside main'
    'footer footer';
`;

export function SidebarLayout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <StyledSidebarLayout>
          <Header />
          <Sidebar>
            <p>My super awesome sidebar</p>
          </Sidebar>
          <Main>
            <Component {...props} />
          </Main>
          <Footer />
        </StyledSidebarLayout>
      )}
    />
  );
}
