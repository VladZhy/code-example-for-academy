import styled, { css } from 'styled-components';
import StyledTextarea from '../../../../../../../../style/StyledTextarea';

const StyledFormTextarea = styled(StyledTextarea)`
  ${({ $isInvalid }) => css`
    width: 100%;

    ${$isInvalid &&
    css`
      border-color: red;
    `}
  `}
`;

export default StyledFormTextarea;
