import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth.js';
import { useAuth } from '../../context/authContext';
import { IoAlertCircleOutline } from "react-icons/io5";

const Login = () => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    return newErrors;
  };

  const getCustomErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/user-disabled':
        return 'This user has been disabled. Please contact support.';
      case 'auth/user-not-found':
        return 'No user found with this email. Please sign up first.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please try again later.';
      case 'auth/invalid-credential': // Handle invalid credential error
        return 'Invalid credentials. Please check your email and password.';
      default:
        return 'An unknown error occurred. Please try again later.';
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);
  
    if (Object.keys(formErrors).length === 0 && !isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during sign-in:', error); // Log the full error to inspect its structure
        setErrorMessage(getCustomErrorMessage(error.code || 'default')); // Use 'default' if error.code is not available
      } finally {
        setIsSigningIn(false);
      }
    }
  };
  
  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate('/dashboard');
      } catch (error) {
        console.error('Error during Google sign-in:', error); // Log the full error to inspect its structure
        setErrorMessage(getCustomErrorMessage(error.code || 'default')); // Use 'default' if error.code is not available
      } finally {
        setIsSigningIn(false);
      }
    }
  };
  
  // Use useEffect to navigate if the user is already logged in
  useEffect(() => {
    if (userLoggedIn) {
      navigate('/dashboard');
    }
  }, [userLoggedIn, navigate]); // This effect runs whenever userLoggedIn changes

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg w-full max-w-xl">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">Sign In</h2>
          <p className="text-gray-400 mb-4 text-center">Welcome back, sign into your account</p>
          {errorMessage && <p className="bg-red-500 text-md text-center mb-5 text-white p-2 rounded flex items-center gap-2 justify-center"> <IoAlertCircleOutline /> {errorMessage}</p>}
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 bg-[#fff] text-[#002266] border gap-2 rounded-full font-medium hover:bg-[#002266] hover:text-white mx-auto transition mb-4"
            onClick={onGoogleSignIn}
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
          <p className="text-sm font-medium text-center m-4 text-gray-400">Or</p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full p-3 border border-gray-300  focus:outline-none focus:border-[#002266] rounded-md bg-transparent"
                placeholder="example@gmail.com"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full p-3 border border-gray-300  focus:outline-none focus:border-[#002266] rounded-md bg-transparent"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <Link to="/forgot-password" className="text-right text-sm text-[#002266] font-semibold mt-4 flex justify-end">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="w-full py-3 bg-[#95b627] text-white font-semibold rounded-full hover:bg-[#001b4f] transition"
              disabled={isSigningIn}
            >
              {isSigningIn ? 'Signing In...' : 'Sign In'}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6">
            Don't have an account? <Link to="/register" className="text-[#002266] font-medium">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
