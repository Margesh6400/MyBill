// src/utils/auth.js
export const CREDENTIALS = {
    username: "admin",
    password: "admin123"
  };
  
  export const checkAuth = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
  };
  
  export const login = (username, password) => {
    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  };
  
  export const logout = () => {
    localStorage.removeItem('isAuthenticated');
  };