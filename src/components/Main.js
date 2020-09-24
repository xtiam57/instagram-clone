import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  grid-area: main;
`;

export default function Main(props) {
  return (
    <>
      <StyledMain>{props.children}</StyledMain>
    </>
  );
}
