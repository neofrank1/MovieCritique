import { Card } from "../../components/Card";
import React from "react";
import { Link } from "react-router";
import { useState, useRef } from "react";


export default function Signup() {

  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const confirmEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const fistNameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    const formData = {
      firstName: fistNameRef.current?.value,
      lastName: lastNameRef.current?.value,
      email: emailRef.current?.value,
      confirmEmail: confirmEmailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
    }

    console.log("Form submitted", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <Card className="w-full max-w-2xl p-2 shadow-lg bg-base-100">
        <h2 className="text-2xl font-bold mb-2 text-center">Sign Up</h2>
        <p className="text-center mb-6">Create your account to get started.</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-nowrap flex-col md:flex-row justify-between gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">First Name</legend>
              <input type="text" ref={fistNameRef} className="input" placeholder="Type here" />
              <p className="label hidden">Optional</p>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Last Name</legend>
              <input type="text" ref={lastNameRef} className="input" placeholder="Type here" />
              <p className="label hidden">Optional</p>
            </fieldset>
          </div>
          <div className="flex flex-nowrap flex-col md:flex-row justify-between gap-4">
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Email</legend>
              <input type="email" ref={emailRef} className="input" placeholder="Type here" required/>
              <p className="label hidden">Optional</p>
            </fieldset>
            <fieldset className="fieldset flex-1">
              <legend className="fieldset-legend">Confirm Email</legend>
              <input type="email" ref={confirmEmailRef} className="input" placeholder="Type here" required/>
              <p className="label hidden">Optional</p>
            </fieldset>
          </div>
          <div className="flex flex-nowrap flex-col gap-2">
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password" ref={passwordRef} className="input w-full" placeholder="Type here" required/>
              <p className="label hidden">Optional</p>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Confirm Password</legend>
              <input type="password" ref={confirmPasswordRef} className="input w-full" placeholder="Type here" required/>
              <p className="label hidden">Optional</p>
            </fieldset>
          </div>
          <div className="flex justify-center">
            <button className="my-2 btn btn-primary w-full">Sign up!</button>
          </div>
        </form>
        <div className="flex flex-wrap items-center justify-cente mt-4 text-center">
          <p className="m-0">Already have an account? <Link to="/login" className="text-blue-800">Login</Link> </p>
        </div>
      </Card>
    </div>
  );
}