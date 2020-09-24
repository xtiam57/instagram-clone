import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: ${({ theme }) =>
    `${theme.header.height} auto ${theme.footer.height}`};
`;
