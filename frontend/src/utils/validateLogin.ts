import { EMAIL_REGEX } from "../Config";
import { LoginValues } from "../types/validation";

const validateLogin = ({ email, password }: LoginValues) => {
  const errors: { email?: string; password?: string } = {};

  if (!email.trim().length) {
    errors.email = "Required*";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Invalid email format.";
  }

  if (!password.trim().length) {
    errors.password = "Password is Required*";
  }

  return errors;
};

export default validateLogin;
