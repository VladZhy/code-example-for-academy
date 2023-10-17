import styled, { css } from 'styled-components';

const StyledButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  ${({ theme }) => css`
    border-color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  `}
`;

export default StyledButton;
