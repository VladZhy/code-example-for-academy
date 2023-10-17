import styled, { css } from 'styled-components';

const StyledDropzoneContainer = styled.div.attrs(
  ({ theme, $isFocused, $isDragAccept, $isDragReject }) => ({
    $color: $isFocused
      ? 'blue'
      : $isDragAccept
      ? 'green'
      : $isDragReject
      ? 'red'
      : theme.colors.secondary,
  })
)`
  ${({ $color }) => css`
    border: 0.125em ${$color} dashed;
    border-radius: 0.625em;
    color: ${$color};
    cursor: pointer;
  `}
`;

export default StyledDropzoneContainer;
