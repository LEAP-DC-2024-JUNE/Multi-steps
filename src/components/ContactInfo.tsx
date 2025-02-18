"use client";
import { useState } from "react";
import PersonalInfo from "./personalinfo";

export default function ContactInfo({ change, formData, setValid }) {
  const [error, setError] = useState(false);

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);
    setError(!isValid);
    setValid(isValid);
  };

  return (
    <div className="flex flex-col ">
      <div>
        <img src="download.svg" width="80" height="80" alt="Logo" />
        <h1 className="mb-5 font-bold text-xl">Join Us!</h1>
        <h2 className="mb-10">
          Please provide all current information accurately.
        </h2>

        <h1>Email</h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => {
            change(e);
            validateEmail(e.target.value);
          }}
          className="mb-2 p-2 border"
          value={formData.email}
        />
        {error && <p className="text-red-500">Invalid email format</p>}

        <h1>Phone number</h1>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          onChange={change}
          value={formData.phoneNumber}
          className="mb-2 p-2 border"
        />

        <h1>Password</h1>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={change}
          value={formData.password}
          className="mb-2 p-2 border"
        />

        <h1>Confirm your password</h1>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          onChange={change}
          value={formData.confirmPassword}
          className="mb-2 p-2 border"
        />
      </div>
    </div>
  );
}
