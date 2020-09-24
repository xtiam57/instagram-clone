import React from 'react';
import styled from 'styled-components';
import { space, layout } from 'styled-system';

import profileImage from 'assets/images/profile.jpg';

const StyledImage = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border-radius: 999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  ${space}
  ${layout}
`;

export default function Avatar({ width = '1em', ...rest }) {
  return (
    <>
      <StyledImage src={profileImage} alt="Profile" width={width} {...rest} />
    </>
  );
}
