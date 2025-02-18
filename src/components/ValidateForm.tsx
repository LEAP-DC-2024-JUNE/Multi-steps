export const ValidateForm = (
  formData: FormDataType,
  step: number
): ErrorsType => {
  const errors: ErrorsType = {};
  console.log(errors);

  if (step === 1) {
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.userName) errors.userName = "Username is required";
  }
  if (step === 2) {
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is not valid";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\+?\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is not valid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords does not match";
    }
  }
  if (step === 3) {
    if (!formData.dateBirth) errors.dateBirth = "Date of birth is required";
    if (!formData.profileImage)
      errors.profileImage = "Profile image is required";
  }
  return errors;
};
