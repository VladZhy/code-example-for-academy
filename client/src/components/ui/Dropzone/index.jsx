import { useDropzone } from 'react-dropzone';
import { StyledDropzoneContainer } from './style';

const Dropzone = ({ children, dropzoneSettings, ...props }) => {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone(dropzoneSettings);

  return (
    <StyledDropzoneContainer
      $isFocused={isFocused}
      $isDragAccept={isDragAccept}
      $isDragReject={isDragReject}
      {...getRootProps()}
      {...props}
    >
      <input {...getInputProps()} />
      {children}
    </StyledDropzoneContainer>
  );
};

export default Dropzone;
