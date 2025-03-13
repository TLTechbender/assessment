"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telegramUsername: string;
}

interface SubmitStatus {
  success: boolean;
  message: string;
}

export default function FormComponent() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    telegramUsername: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

        
        //I don't know what this returns cos the api not available
      const data: { message: string; data?: string } = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Form submitted successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          telegramUsername: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ success: false, message: "Failed to submit form" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isEmailValid = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = (): boolean => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      isEmailValid(formData.email)
    );
  };

  return (
    <div className="rounded-[10px] w-full">
      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded-lg ${
            submitStatus.success
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          <p className="font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-7 items-end">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First"
            className="w-full px-4 py-3  text-base leading-[100%]  bg-[#FFFFFF33] rounded-[10px] text-[#ABAEB4] tracking-[0%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-required="true"
          />

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last Name"
            className="w-full px-4 py-3 text-base leading-[100%]  bg-[#FFFFFF33] rounded-[10px] text-[#ABAEB4] tracking-[0%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-required="true"
          />

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className={` w-full px-4 py-3 bg-[#FFFFFF33] rounded-[10px] font-normal text-base leading-[100%] text-[#ABAEB4] tracking-[0%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
              formData.email && !isEmailValid(formData.email)
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
            aria-required="true"
            aria-invalid={
              formData.email ? !isEmailValid(formData.email) : false
            }
          />
          {formData.email && !isEmailValid(formData.email) && (
            <p className="text-xs text-red-500 mt-1">
              Please enter a valid email address.
            </p>
          )}

          <div className="relative w-full">
            <span className="absolute left-3 top-3 text-gray-500 ">@</span>
            <input
              type="text"
              id="telegramUsername"
              name="telegramUsername"
              value={formData.telegramUsername}
              onChange={handleChange}
              placeholder="Telegram Username"
              className="w-full pl-8 pr-4 py-3  text-base leading-[100%]  bg-[#FFFFFF33] rounded-[10px] text-[#ABAEB4] tracking-[0%] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isFormValid()}
            className={`hero-btn transition-colors px-[30px] capitalize rounded-[25px] py-3 w-full max-w-[257px] mx-auto md:mx-0 ${
              isSubmitting || !isFormValid()
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
            }`}
            aria-disabled={isSubmitting || !isFormValid()}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin -ml-1 mr-3 h-5 w-5 max-w text-[#ABAEB4]" />
                Submitting...
              </span>
            ) : (
              "Register your interest now"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
