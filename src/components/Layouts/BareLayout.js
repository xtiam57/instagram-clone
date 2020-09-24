import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import { StyledLayout } from './StyledLayout';
import Footer from 'components/Footer';
import Main from 'components/Main';

const StyledBareLayout = styled(StyledLayout)`
  grid-template-columns: auto;
  grid-template-rows: ${({ theme }) => `auto ${theme.footer.height}`};
  grid-template-areas:
    'main'
    'footer';
`;

export function BareLayout({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <StyledBareLayout>
          <Main layout="bare">
            <Component {...props} />
          </Main>
          <Footer layout="bare" />
        </StyledBareLayout>
      )}
    />
  );
}
