// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!checkAuth()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;