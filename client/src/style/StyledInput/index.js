import styled, { css } from 'styled-components';

const StyledInput = styled.input`
  ${({ theme }) => css`
    outline: none;
    border: 0.125em solid ${theme.colors.secondary};
    border-radius: 0.625em;
    background-color: ${theme.colors.primary};
    padding: 0.75em;
    text-align: justify;
    color: ${theme.colors.secondary};

    &:focus {
      border-color: blue;
    }
  `}
`;

export default StyledInput;
