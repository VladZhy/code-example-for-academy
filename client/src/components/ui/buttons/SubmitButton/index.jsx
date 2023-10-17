import { StyledSubmitFormButton } from './style';

const SubmitFormButton = ({ children, isSubmitting, ...props }) => {
  return (
    <StyledSubmitFormButton $isSubmitting={isSubmitting} {...props}>
      <span>{children}</span>
    </StyledSubmitFormButton>
  );
};

export default SubmitFormButton;
