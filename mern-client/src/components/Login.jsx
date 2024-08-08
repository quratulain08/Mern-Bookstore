import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import googleLogo from "../assets/google-logo.svg";

const Login = () => {



    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState(""); // Initialize error as an empty string
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"; // Default to home page
   
    const handleLogin = async (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email,password).then((userCredential) =>{
    const user = userCredential.user;
    alert("Login Successfully!")
    navigate(from,{replace:true})
      })
      .catch((error)=>{
        const errorCode = error.code;
        const errorMessage=error.message;
        setError(errorMessage)
      })
    
     
    };
    //signup using google
    const handleRegister = async () => {
      try {
        const result = await loginWithGoogle();
        const user = result.user;
        alert("Sign Up Successfully!");
        navigate(from, { replace: true });
      } catch (error) {
        console.error("Error during Google sign up:", error.message); // Debugging statement
        setError(error.message);
      }
    };

    
  return (
    <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 transform -skew-y-6 shadow-lg bg-gradient-to-r from-blue-300 to-blue-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Log In </h1>
          </div>
          <div className="divide-y divide-gray-200">
            <form
              onSubmit={handleLogin}
              className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full h-10 text-gray-900 border-b-2 border-gray-300 peer focus:outline-none focus:border-blue-600"
                  placeholder="Password"
                  required
                />
              </div>
          {error? <p className='text-base text-red-600'>Email or password is not correct:</p>:""}
              <p>
                If you haven't an account, please 
                <Link to="/sign-up" className="text-blue-700 underline">
                  Sign Up
                </Link>{' '}
                here.
              </p>
              <div className="relative">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                    Log In
                </button>
              </div>
            </form>
          </div>
          <hr />
          <div className='flex flex-col items-center w-full gap-3 mt-5 '>
              <button onClick={handleRegister} className='block'><img src={googleLogo} alt='' className='inline-block w-12 h-12' />Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login