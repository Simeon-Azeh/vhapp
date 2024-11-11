/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { doPasswordReset } from '../../firebase/auth'; // Import the custom password reset function
import Loader from '../../components/Loader/Loader'; // Import the Loader component

function ForgotPassword() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // State to manage loading

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = t('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = t('Email is invalid');
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true); // Show loader
      try {
        await doPasswordReset(email); // Call the custom password reset function
        setMessage(t('If the email exists, you will receive a password reset link.'));
        setEmail(''); // Reset the email field after submission
      } catch (error) {
        setErrors({ api: t(error.message) || 'An error occurred' });
      } finally {
        setLoading(false); // Hide loader
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9f9] dark:bg-dark-body transition-colors py-12 px-4 sm:px-6 lg:px-8 font-inter">
      {loading && <Loader />} {/* Show loader when loading */}
      <div className="w-full max-w-md p-6 space-y-8 bg-white rounded-md">
        <div>
          <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-slate-50 font-montserrat-alt">
            {t('Forgot Password')}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
            {t("Enter your email address and we'll send you a link to reset your password.")}
          </p>
        </div>

        {message && <p className="text-center text-green-500">{message}</p>}       {/* Success message*/}

        <form className="mt-8 space-y-6" onSubmit={handleForgotPassword} noValidate>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">{t('Email address')}</label>
              <div className="relative">
                <FaEnvelope className="absolute z-50 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`appearance-none rounded-md relative block w-full px-10 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 border-solid'} dark:border-gray-700 placeholder-gray-600 dark:placeholder-gray-400 text-gray-900 dark:text-gray-200 bg-white dark:bg-[#222222] focus:outline-none focus:ring-[#D1EC79] focus:border-[#D1EC79] sm:text-sm`}
                  placeholder={t('Email address')}
                />
              </div>
              {errors.api && <p className="text-red-500 text-sm my-1">{errors.api}</p>} {/* API error */}
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-[#D1EC79] hover:bg-[#b8d865] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D1EC79]"
            >
              {t('Send reset link')}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link to="/login" className="font-medium text-[#95b627] hover:text-[#b8d865]">
            {t('Back to login')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
