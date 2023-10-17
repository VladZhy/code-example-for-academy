import styled, { css } from 'styled-components';

const StyledDialog = styled.dialog`
  ${({ theme }) => css`
    border: 0.125em solid ${theme.colors.secondary};
    border-radius: 0.625em;
    background-color: ${theme.colors.primary};
    padding: 1em;
  `}
`;

export default StyledDialog;
