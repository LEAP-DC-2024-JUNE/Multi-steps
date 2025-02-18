"use client";
import ContactInfo from "@/components/ContactInfo";
import PersonalInfo from "@/components/personalinfo";
import ProfileInfo from "@/components/ProfileInfo";
import { ValidateForm } from "@/components/ValidateForm";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    phoneNumber: "",
    userName: "",
    file: "",
    dateBirth: "",
    date: "",
  });

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleSave = () => {
    console.log("HandleSave Triggered");
    const validationErrors = ValidateForm(formData, step);
    console.log("Validation Errors: ", validationErrors);

    setErrors(validationErrors);

    const isValid = Object.keys(validationErrors).length === 0;

    if (isValid) {
      setStep(step + 1);
      localStorage.setItem("formData", JSON.stringify(formData));
      localStorage.setItem("step", (step + 1).toString());
    }
  };

  useEffect(() => {
    const savedFormData = localStorage.getItem("formData");
    const savedStep = localStorage.getItem("step");
    if (savedFormData) {
      console.log(savedFormData);
      setFormData(JSON.parse(savedFormData));
    }
    if (savedStep) {
      setStep(parseInt(savedStep));
    }
  }, []);

  const handleBack = () => {
    setStep(step - 1);
  };
  console.log(formData);
  const HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(name);
  return (
    <motion.div
      className="bg-gray-100 min-h-screen flex flex-col justify-center items-center"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      key={step}
    >
      <div className=" items-center p-6 bg-white shadow-lg w-[500px] h-[620px]">
        {step === 1 ? (
          <PersonalInfo formData={formData} change={HandleInputChange} />
        ) : step === 2 ? (
          <ContactInfo
            formData={formData}
            setValid={setIsValid}
            change={HandleInputChange}
          />
        ) : (
          <ProfileInfo formData={formData} change={HandleInputChange} />
        )}

        <div className="flex justify-center items-center mt-10">
          {" "}
          <button
            onClick={handleBack}
            className={
              step === 1 ? "hidden  text-black " : "p-2t text-black rounded-xl"
            }
          >
            Back
          </button>
          <button
            onClick={handleSave}
            className={
              step === 2
                ? "p-2 ml-20 bg-black w-[150px] text-white"
                : "  bg-black w-[170px] h-[40px] text-white"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </motion.div>
  );
}
