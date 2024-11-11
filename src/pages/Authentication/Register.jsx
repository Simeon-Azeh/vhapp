import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'; // Google icon from react-icons

import { doCreateUserWithEmailAndPassword, doSignInWithGoogle, doSendEmailVerification } from '../../firebase/auth'; // Firebase functions
import VerificationModal from '../../components/VerificationModal';
import { updateProfile } from 'firebase/auth';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const validateForm = () => {
    let formErrors = {};

    if (!formData.username) {
      formErrors.username = 'Username is required';
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      try {
        const userCredential = await doCreateUserWithEmailAndPassword(formData.email, formData.password);
        const user = userCredential.user;
        // Update profile with username
        await updateProfile(user, {
          displayName: formData.username,
        });

        // Send email verification and show modal
        await doSendEmailVerification(user);
        
        // Display success message
        setSuccessMessage('Successfully registered. Please check your email to verify your account.');
        setModalVisible(true);  // Open the verification modal
      } catch (error) {
        // Handle Firebase errors with custom messages
        if (error.code === 'auth/email-already-in-use') {
          setApiError('This email is already in use. Please use a different email or Login.');
        } else if (error.code === 'auth/weak-password') {
          setApiError('Password is too weak. It must be at least 6 characters.');
        } else if (error.code === 'auth/invalid-email') {
          setApiError('The email address is not valid. Please enter a valid email.');
        } else {
          setApiError('Registration failed. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      await doSignInWithGoogle();
      navigate('/dashboard'); // Redirect to dashboard on successful Google sign-in
    } catch (error) {
      setApiError(error.message || 'Google authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-md">
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-slate-50">Create your account</h2>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account? <Link to="/login" className="font-medium text-[#95b627] hover:text-[#b8d865]">Login</Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegister} noValidate>
          <div className="space-y-4">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 focus:outline-none sm:text-sm bg-transparent text-gray-700"
                placeholder="Username"
              />
              {errors.username && <p className="mt-2 text-xs text-red-500">{errors.username}</p>}
            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 focus:outline-none sm:text-sm bg-transparent text-gray-700"
                placeholder="Email"
              />
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 focus:outline-none sm:text-sm bg-transparent text-gray-700"
                placeholder="Password"
              />
              {errors.password && <p className="mt-2 text-xs text-red-500">{errors.password}</p>}
            </div>

            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 focus:outline-none sm:text-sm bg-transparent text-gray-700"
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && <p className="mt-2 text-xs text-red-500">{errors.confirmPassword}</p>}
            </div>
          </div>

          {apiError && <p className="mt-2 text-xs text-red-500">{apiError}</p>}

          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#95b627] hover:bg-[#b8d865]"
              disabled={loading}
            >
              {loading ? 'Registering...' : 'Sign Up'}
            </button>
          </div>
        </form>
        

        <div className="flex items-center justify-center space-x-2">
          <button
            onClick={handleGoogleAuth}
            className="w-full mt-4 flex justify-center items-center px-4 py-3 border rounded-md text-sm font-medium text-gray-900 bg-white border-gray-300 hover:bg-gray-50"
          >
        
            <FcGoogle className="mr-2 text-2xl" />
           Continue with Google
          </button>
        </div>

        {/* Display success message */}
        {successMessage && (
          <div className="mt-4 text-center text-green-500">
            {successMessage}
          </div>
        )}
      </div>

      {/* Verification Modal */}
      {modalVisible && <VerificationModal />}
    </div>
  );
}

export default Register;
