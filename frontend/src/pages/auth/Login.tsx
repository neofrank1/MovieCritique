import { Link } from "react-router";
import { Card } from "../../components/Card";
import React from "react";
import { type ErrorLoginData } from "../../types/error.types";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

export default function Login() {
  
  let { email } = useParams();
  let navigate = useNavigate();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const [errorEmail, setErrorEmail] = React.useState<ErrorLoginData>({ errorTrigger: false, errorMessage: "" });
  const [errorPassword, setErrorPassword] = React.useState<ErrorLoginData>({ errorTrigger: false, errorMessage: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle login logic here

    const FormData = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    }

    if (!FormData.email) {
      setErrorEmail({ errorTrigger: true, errorMessage: "Email is required" });
      emailRef.current?.focus();  
    }

    if (!FormData.password || FormData.password.length < 8) {
      setErrorPassword({ errorTrigger: true, errorMessage: "Password must be at least 8 characters long" });
      passwordRef.current?.focus();
    }

    if (FormData.email?.includes("@") === false) {
      setErrorEmail({ errorTrigger: true, errorMessage: "Please enter a valid email address" });
      emailRef.current?.focus();
    }

    if (FormData.email && FormData.password) {
      // Perform login action, e.g., send data to the server
      console.log("Login Attempt");

      axios.post("http://localhost:3000/auth/login", {
        email: FormData.email,
        password: FormData.password,
      })
      .then(response => {
        // Handle successful signup, e.g., redirect to login page
        console.log("Signup successful");
        navigate(`/`);
      })
      .catch(error => {
        // Handle signup error, e.g., display error message
        console.error("Signup error:", error);
      });
    }

  }

  return (
    <div className="flex flex-col items-center justify-center h-screen lg:px-0 px-4">
      <Card className="w-full max-w-md p-8 shadow-lg bg-base-200">
        <h2 className="text-2xl font-bold mb-6 text-center mx-auto">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email || ""}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errorEmail.errorTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
              placeholder="Enter your email"
              ref={emailRef}
              onChange={() => setErrorEmail({ errorTrigger: false, errorMessage: "" })}
            />
          </div>
          <p className={`${errorEmail.errorTrigger ? "" : "hidden"} text-red-500 text-sm`}>{errorEmail.errorMessage}</p>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm ${errorPassword.errorTrigger ? "focus:outline-red-500 border-red-500" : ""}`}
              placeholder="Enter your password"
              onChange={() => setErrorPassword({ errorTrigger: false, errorMessage: "" })}
            />
          </div>
          <p className={`${errorPassword.errorTrigger ? "" : "hidden"} text-red-500 text-sm`}>{errorPassword.errorMessage}</p>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
          <p className="text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/sign_up" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </Card>
    </div>
  );
}