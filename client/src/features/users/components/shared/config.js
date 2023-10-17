/*
  Minimum 8 and maximum 16 characters, at least one uppercase letter,
  one lowercase letter, one number and one special character
*/
const PASSWORD_RULES =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

export { PASSWORD_RULES };
