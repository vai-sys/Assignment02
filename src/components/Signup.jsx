import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
    const [isSubmit,setIssubmit]=useState(false);
    const navigate=useNavigate();
  
  const validationSchema = Yup.object({
    username: Yup.string().min(3, "Too Short!").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Password should be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values,{ resetForm }) => {
    console.log("Signup Form Data: ", values);
    setIssubmit(true);
    resetForm();
    setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Sign Up</h1>
        <Formik
          initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
           
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">Username</label>
              <Field
                name="username"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
            </div>

           
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

        
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <Field
                name="password"
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

          
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Sign Up
              </button>
            </div>

           {
            isSubmit && (
                <div className="flex justify-center items-center">
                    <p className="text-green-600  ">User Register Succesfully !</p>
                </div>
            )
           }


          
            <div className="flex justify-center items-center">
              <p className="text-gray-700 mr-2">Already have an account?</p>
              <Link to="/" className="text-sm text-blue-500 hover:underline">
                Log in
              </Link>
            </div>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
