const validationPassword = (password) => {
  const min = 8;
  const max = 16;
  const hasUpperCase = /[A-Z]/;
  const hasLowerCase = /[a-z]/;
  const hasNumber = /[0-9]/;
  const hasSpecialChar = /[!@#$%^&*(){}?.]/;

  if (password.length < min || password.length > max) {
    return `Password must be between ${min} and ${max} characters.`;
  }
  if (!hasUpperCase.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!hasLowerCase.test(password)) {
    return "Password must contain at least one lower letter.";
  }
  if (!hasNumber.test(password)) {
    return "Password must contain at least one Digit .";
  }

  if (!hasSpecialChar.test(password)) {
    return "Password must contain at least one Special Char .";
  }
  return "valid password";
};

console.log(validationPassword("GaneshDutt1$"));
