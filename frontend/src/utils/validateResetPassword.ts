import { ResetPasswordValues } from "../types/validation";

const validateResetPassword = ({
  password,
  confirmPassword,
}: ResetPasswordValues) => {
  let errors: { password?: string; confirmPassword?: string } = {};

  if (!password.trim().length) {
    errors.password = "Required*";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
    errors.password = "Password must contain uppercase and lowercase letters.";
  } else if (!/\d/.test(password)) {
    errors.password = "Password must contain at least one digit.";
  } else if (!/[@$!%*?&]/.test(password)) {
    errors.password = "Password must contain at least one special character.";
  }

  // Confirm Password Validation
  if (!confirmPassword.trim().length) {
    errors.confirmPassword = "Required*";
  } else if (confirmPassword !== password) {
    errors.confirmPassword = "Password is not matching";
  }

  return errors;
};

export default validateResetPassword;
