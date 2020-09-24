import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.footer.bgColor};
  bottom: 0;
  color: ${({ theme }) => theme.footer.textColor};
  grid-area: footer;
  height: ${({ theme }) => theme.footer.height};
  left: 0;
  overflow: hidden;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
    padding: 0;
    font-size: 0.8em;
  }
`;

export default function Footer(props) {
  return (
    <StyledFooter {...props}>
      <li>Terms of Use</li>
      <li>Support</li>
    </StyledFooter>
  );
}
