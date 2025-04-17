import { EMAIL_REGEX, NAME_REGEX } from "../Config";
import {
  DoctorSignupValidation,
  DoctorSignupValues,
  UserSignupValidation,
  UserSignupValues,
} from "../types/validation";

export const validateUserSignup = (
  values: UserSignupValues
): UserSignupValidation => {
  const { name, email, password, confirmPassword } = values;
  const errors: UserSignupValidation = {};
  // Name Validation
  if (!name.trim().length) {
    errors.name = "Required";
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less.";
  } else if (!NAME_REGEX.test(name)) {
    errors.name =
      "First letter must be capital and no leading or trailing spaces.";
  }

  // Email Validation
  if (!email.trim().length) {
    errors.email = "Required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Invalid email format";
  }

  // Password Validation
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
  } else if (
    confirmPassword.length !== password.length ||
    confirmPassword !== password
  ) {
    errors.confirmPassword = "Password is not matching";
  }

  console.log("User Validation Errors:", errors);
  return errors;
};

export const validateDoctorSignup = (
  values: DoctorSignupValues
): DoctorSignupValidation => {
  const {
    name,
    email,
    password,
    confirmPassword,
    phoneNumber,
    department,
    education,
    description,
    experience,
    licenseCertificate,
  } = values;
  const errors: DoctorSignupValidation = {};

  // Name Validation
  if (!name.trim().length) {
    errors.name = "Required";
  } else if (name.length > 20) {
    errors.name = "Must be 20 characters or less.";
  } else if (!NAME_REGEX.test(name)) {
    errors.name =
      "First letter must be capital and no leading or trailing spaces.";
  }

  // Email Validation
  if (!email.trim().length) {
    errors.email = "Required";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Invalid email format";
  }

  // Password Validation
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

  // Phone Number Validation
  if (!phoneNumber.trim().length) {
    errors.phoneNumber = "Required*";
  } else if (!/^\d{10}$/.test(phoneNumber)) {
    errors.phoneNumber = "Phone number must be 10 digits long.";
  }

  // Department Validation
  if (!department.trim().length) {
    errors.department = "Required*";
  }

  // Education Validation
  if (!education.trim().length) {
    errors.education = "Required*";
  } else if (/[^a-zA-Z0-9]/.test(education)) {
    errors.education = "Only alphanumeric characters allowed.";
  }

  // Description Validation
  if (!description.trim().length) {
    errors.description = "Required*";
  }

  // Experience Validation
  if (!experience.trim().length) {
    errors.experience = "Required*";
  }

  // License Certificate Validation
  if (!licenseCertificate) {
    errors.licenseCertificate = "Required*";
  }

  console.log("Doctor Validation Errors:", errors);
  return errors;
};
