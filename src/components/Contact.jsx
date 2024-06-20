import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/raeqjora", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-gradient">
          Contact Me
        </h1>
        <p className="text-lg text-center mb-8">
          Please fill out the form below to contact me
        </p>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-2xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-gradient">
              Send Your Message
            </h2>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300"
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="4"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-xl px-4 py-3 hover:bg-gradient-to-l focus:outline-none focus:shadow-outline transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
