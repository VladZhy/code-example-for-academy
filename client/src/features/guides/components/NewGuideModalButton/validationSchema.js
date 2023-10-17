import * as yup from 'yup';
import DropzoneValidationService from '../../../../services/DropzoneValidationService';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .max(100, 'Title cannot exceed 100 characters')
    .required('Title is required'),
  description: yup
    .string()
    .max(500, 'Description cannot exceed 500 characters'),
  // thumbnail: yup
  //   .string()
  //   .test(
  //     'too-many-files',
  //     'Too many files',
  //     DropzoneValidationService.isFileSingle
  //   )
  //   .test(
  //     'file-invalid-type',
  //     'Invalid image format',
  //     DropzoneValidationService.isInvalidFileType
  //   ),
});

export default validationSchema;
