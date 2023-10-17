class DropzoneValidationService {
  static isFileSingle(value) {
    return value !== 'too-many-files';
  }
  static isInvalidFileType(value) {
    return value !== 'file-invalid-type';
  }
}

export default DropzoneValidationService;
