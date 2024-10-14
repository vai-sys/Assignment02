
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link,useNavigate } from "react-router-dom";

import { useState } from "react";
const LoginPage = () => {
    const [submit,setSubmit]=useState(false);
    const navigate=useNavigate();
  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });


  const handleSubmit = (values,{resetForm}) => {
    console.log("Login Form Data: ", values);
    setSubmit(true);
    resetForm();
    setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
        
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

           
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <Field
                name="password"
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

         
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </div>
                
            {
            submit && (
                <div className="flex justify-center items-center">
                    <p className="text-green-600  ">User Login Succesfully !</p>
                </div>
            )
           }

                  
          
            <div className="flex justify-between items-center">
              <Link to="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
              <div className="flex justify-center items-center">
              <p className="mr-5"> Don't have an account?</p>
              <Link to="/signup" className="text-sm text-blue-500 hover:underline">
                Sign up
              </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
