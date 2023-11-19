import { useState, useEffect } from 'react';
import axios from 'axios';

const useToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchTokenFromStorage = async () => {
      try {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error fetching token from storage:', error);
      }
    };

    fetchTokenFromStorage();
  }, []);

  const getToken = () => {
    return token;
  };

  const setTokenFromLogin = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return { token, getToken, setTokenFromLogin, removeToken };
};

export default useToken;
