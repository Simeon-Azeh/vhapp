// src/pages/Authentication/GoogleCallback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/auth/callback?code=${code}`);
          const { token } = response.data;
          localStorage.setItem('token', token);
          window.history.replaceState(null, '', '/dashboard');
          navigate('/dashboard');
        } catch (error) {
          console.error('Google authentication failed', error);
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Loading...</div>;
}

export default GoogleCallback;