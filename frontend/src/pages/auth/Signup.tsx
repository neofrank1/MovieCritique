import { Card } from "../../components/Card";
import React from "react";
import { Link, useParams } from "react-router";
import { useState, useRef } from "react";
import { type ErrorSignupData } from "../../types/error.types";


export default function Signup() {

  let { email } = useParams();

  const [error, setError] = useState<ErrorSignupData>({
    errorFirstNameTrigger: false,
    errorLastNameTrigger: false,
    errorEmailTrigger: false,
    errorConfirmEmailTrigger: false,
    errorPasswordTrigger: false,
    errorConfirmPasswordTrigger: false,
    errorMessageName: "",
    errorMessageLastName: "",
    errorMessageEmail: "",
    errorMessageConfirmEmail: "",
    errorMessagePassword: "",
    errorMessageConfirmPassword: ""
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const confirmEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const fistNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here

    const formData = {
      firstName: fistNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      confirmEmail: confirmEmailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    };

    const newErrorState: ErrorSignupData = {
      errorFirstNameTrigger: false,
      errorLastNameTrigger: false,
      errorEmailTrigger: false,
      errorConfirmEmailTrigger: false,
      errorPasswordTrigger: false,
      errorConfirmPasswordTrigger: false,
      errorMessageName: "",
      errorMessageLastName: "",
      errorMessageEmail: "",
      errorMessageConfirmEmail: "",
      errorMessagePassword: "",
      errorMessageConfirmPassword: "",
    };

    if (!formData.email && !formData.confirmEmail) {
      newErrorState.errorEmailTrigger = true;
      newErrorState.errorConfirmEmailTrigger = true;
      newErrorState.errorMessageEmail = "Email is required";
      newErrorState.errorMessageConfirmEmail = "Please confirm your email";
    }

    if (!formData.password && !formData.confirmPassword) {
      newErrorState.errorPasswordTrigger = true;
      newErrorState.errorConfirmPasswordTrigger = true;
      newErrorState.errorMessagePassword = "Password is required";
      newErrorState.errorMessageConfirmPassword = "Please confirm your password";
    }

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrorState.errorPasswordTrigger = true;
      newErrorState.errorConfirmPasswordTrigger = true;
      newErrorState.errorMessagePassword = "Passwords do not match";
      newErrorState.errorMessageConfirmPassword = "Passwords do not match";
    }

    if (formData.email && formData.confirmEmail && formData.email !== formData.confirmEmail) {
      newErrorState.errorEmailTrigger = true;
      newErrorState.errorConfirmEmailTrigger = true;
      newErrorState.errorMessageEmail = "Emails do not match";
    }

    if (!formData.firstName) {
      newErrorState.errorFirstNameTrigger = true;
      newErrorState.errorMessageName = "First Name is required";
    }

    if (!formData.lastName) {
      newErrorState.errorLastNameTrigger = true;
      newErrorState.errorMessageLastName = "Last Name is required";
    }

    if (formData.email && !formData.email.includes("@")) {
      newErrorState.errorEmailTrigger = true;
      newErrorState.errorMessageEmail = "Please enter a valid email address";
    }

    if (formData.password && formData.password.length < 8) {
      newErrorState.errorPasswordTrigger = true;
      newErrorState.errorMessagePassword = "Password must be at least 8 characters long";
    }

    setError(newErrorState);

    if (formData.firstName && formData.lastName &&
      formData.email && formData.confirmEmail &&
      formData.password && formData.confirmPassword &&
      formData.password === formData.confirmPassword &&
      formData.email === formData.confirmEmail &&
      !newErrorState.errorFirstNameTrigger &&
      !newErrorState.errorLastNameTrigger &&
      !newErrorState.errorEmailTrigger &&
      !newErrorState.errorConfirmEmailTrigger &&
      !newErrorState.errorPasswordTrigger &&
      !newErrorState.errorConfirmPasswordTrigger) {
      // Perform signup action, e.g., send data to the server
      console.log("Signing up with:", formData);
    }

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <Card className="w-full max-w-2xl px-2 shadow-lg bg-base-100">
        <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
        <p className="text-center mb-6">Create your account to get started.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-wrap flex-col md:flex-row justify-between gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">First Name <p className="text-red-600">*</p></legend>
              <input type="text" ref={fistNameRef}
                onChange={() => setError({ ...error, errorFirstNameTrigger: false, errorMessageName: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorFirstNameTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="First Name" />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Last Name <p className="text-red-600">*</p></legend>
              <input type="text" ref={lastNameRef}
                onChange={() => setError({ ...error, errorLastNameTrigger: false, errorMessageLastName: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorLastNameTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="Last Name" />
            </fieldset>
            <div className={` w-full text-center ${(error.errorFirstNameTrigger || error.errorLastNameTrigger) ? "block" : "hidden"}`}>
              {error.errorFirstNameTrigger && (
                <p className="text-sm text-red-500">{error.errorMessageName}</p>
              )}
              {error.errorLastNameTrigger && (
                <p className="text-sm text-red-500">{error.errorMessageLastName}</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap flex-col md:flex-row justify-between gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Email <p className="text-red-600">*</p></legend>
              <input type="email" ref={emailRef} defaultValue={email || ""}
                onChange={() => setError({ ...error, errorEmailTrigger: false, errorMessageEmail: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorEmailTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="Email" />
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Confirm Email <p className="text-red-600">*</p></legend>
              <input type="email" ref={confirmEmailRef}
                onChange={() => setError({ ...error, errorConfirmEmailTrigger: false, errorMessageConfirmPassword: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorConfirmEmailTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="Confirm Email" />
            </fieldset>
            <div className={` w-full text-center ${(error.errorEmailTrigger || error.errorConfirmEmailTrigger) ? "block" : "hidden"}`}>
              {error.errorEmailTrigger && (
                <p className="text-sm text-red-500">{error.errorMessageEmail}</p>
              )}
              {error.errorConfirmEmailTrigger && (
                <p className="text-sm text-red-500">{error.errorMessageConfirmEmail}</p>
              )}
            </div>
          </div>
          <div className="flex flex-nowrap flex-col gap-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password <p className="text-red-600">*</p></legend>
              <input type="password" ref={passwordRef}
                onChange={() => setError({ ...error, errorPasswordTrigger: false, errorMessagePassword: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorPasswordTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="Password" />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Confirm Password <p className="text-red-600">*</p></legend>
              <input type="password" ref={confirmPasswordRef}
                onChange={() => setError({ ...error, errorConfirmPasswordTrigger: false, errorMessageConfirmPassword: "" })}
                className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${error.errorConfirmPasswordTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
                placeholder="Confirm Password" />
            </fieldset>
            <div className={` w-full text-center ${(error.errorPasswordTrigger || error.errorConfirmPasswordTrigger) ? "block" : "hidden"}`}>
              {error.errorPasswordTrigger && (
                <p className="text-sm text-red-500">{error.errorMessagePassword}</p>
              )}
              {error.errorConfirmPasswordTrigger && (
                <p className="text-sm text-red-500">{error.errorMessageConfirmPassword}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button className="my-2 btn btn-primary w-full">Sign up!</button>
          </div>
        </form>
        <div className="flex flex-wrap items-center justify-cente mt-4 text-center">
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}