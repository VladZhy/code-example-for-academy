import styled, { css } from 'styled-components';

const StyledActionButton = styled.button`
  ${({ theme }) => css`
    border-color: ${theme.colors.secondary};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  `}
`;

export default StyledActionButton;
