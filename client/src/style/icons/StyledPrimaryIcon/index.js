import styled, { css } from 'styled-components';
import StyledIcon from '../StyledIcon';

const StyledPrimaryIcon = styled(StyledIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export default StyledPrimaryIcon;
