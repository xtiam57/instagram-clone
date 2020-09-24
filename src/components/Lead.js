import styled from 'styled-components';
import { space, layout, typography } from 'styled-system';

export default styled.p`
  color: ${(props) => props.color || props.theme.colors.secondary};
  font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas,
    'Courier New', monospace;
  font-size: calc(1em + 0.25vmin);
  line-height: 1.7;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  ${layout}
  ${space}
  ${typography}
`;
