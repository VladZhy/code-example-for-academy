import styled, { css } from 'styled-components';
import { spin } from './animations';
import StyledActionButton from '../../../../../../style/buttons/StyledActionButton';

const StyledSubmitFormButton = styled(StyledActionButton).attrs(() => ({
  type: 'submit',
}))`
  ${({ theme, $isSubmitting }) => css`
    ${$isSubmitting &&
    css`
      position: relative;

      span {
        visibility: hidden;
      }

      &::after {
        position: absolute;
        margin: auto;
        width: 1.875em;
        height: 1.875em;
        border: 0.25em solid transparent;
        border-top-color: ${theme.colors.primary};
        border-radius: 50%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: '';
        animation: ${spin} 1s linear infinite;
        -webkit-animation: ${spin} 1s linear infinite;
      }
    `}
  `}
`;

export default StyledSubmitFormButton;
