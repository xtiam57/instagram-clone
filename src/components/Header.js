import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useLayout } from 'hooks/useLayout';

const StyledHeader = styled.header`
  height: ${({ theme }) => theme.header.height};
  overflow: hidden;
  background-color: ${({ headerDark }) => (headerDark ? 'blue' : 'red')};
  backdrop-filter: blur(5px);
  grid-area: header;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  color: #fff;
`;

export default function Header(props) {
  const { headerDark } = useLayout();

  console.log(headerDark);

  return (
    <StyledHeader {...props} headerDark={headerDark}>
      <code> $ cd /home/ </code>
    </StyledHeader>
  );
}
