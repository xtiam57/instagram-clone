import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
  background-color: orange;
  color: #fff;
  grid-area: aside;
`;

export default function Sidebar(props) {
  return (
    <>
      <StyledSidebar {...props}>
        <p>My super awesome sidebar</p>
      </StyledSidebar>
    </>
  );
}
