"use client";
import { useState, useEffect } from "react";

export default function ProfileInfo({ change, formData }) {
  const handleClick = () => {
    document.getElementById("file-input").click();
  };
  return (
    <div>
      <div>
        <img
          src="download.svg
  "
          width="80"
          height="80"
        ></img>
        <h1 className="mb-5 font-bold text-xl">Join Us!</h1>
        <h3 className="mb-10 ">
          Please provide all current information accurately.
        </h3>
        <h1>Date of birth</h1>
        <input
          type="date"
          name="date"
          onChange={change}
          value={formData.date || ""}
          className="mb-2 p-2 border"
        />
        <h1>Profile Image</h1>
        <div
          className="border p-4 w-[450px] bg-gray-100 rounded-lg h-[200px] text-lg text-center cursor-pointer"
          onClick={handleClick}
          onDrop={(e) => {
            e.preventDefault();
            const file = e.dataTransfer.files[0];
            if (file) {
              change({ target: { name: "file", value: file } });
            }
          }}
          onDragOver={(e) => e.preventDefault()}
        >
          <h1 className="mt-14">Browse or Drop Image</h1>
        </div>

        <input
          id="file-input"
          type="file"
          name="file"
          placeholder="Enter your email"
          onChange={change}
          className="mb-2 p-2 border hidden"
        />
      </div>
    </div>
  );
}
