import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (username, email, password, confirmPassword) => {
    try {
      const response = await axios.post(`${API_URL}/register`, {
        name: username,
        email,
        password,
        password_confirmation: confirmPassword,
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
};
  
export const logout = () => {
    localStorage.removeItem('token');
};

export const forgotPassword = async (email) => {
    try {
      const response = await axios.post(`${API_URL}/forgot-password`, {
        email,
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'An error occurred');
      } else {
        throw new Error('An error occurred');
      }
    }
};

export const googleAuth = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth`);
      window.location.href = response.data.url;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'Some error occurred');
      } else {
        throw new Error('An error occurred');
      }
    }
};