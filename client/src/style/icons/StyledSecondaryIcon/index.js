import styled, { css } from 'styled-components';
import StyledIcon from '../StyledIcon';

const StyledSecondaryIcon = styled(StyledIcon)`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
  `}
`;

export default StyledSecondaryIcon;
