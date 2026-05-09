export type ErrorLoginData = {
  errorTrigger: boolean;
  errorMessage: string;
}

export type ErrorSignupData = {
  errorFirstNameTrigger: boolean;
  errorLastNameTrigger: boolean;
  errorEmailTrigger: boolean;
  errorConfirmEmailTrigger: boolean;
  errorPasswordTrigger: boolean;
  errorConfirmPasswordTrigger: boolean;
  errorMessageName: string;
  errorMessageLastName: string;
  errorMessageEmail: string;
  errorMessageConfirmEmail: string;
  errorMessagePassword: string;
  errorMessageConfirmPassword: string;
}
