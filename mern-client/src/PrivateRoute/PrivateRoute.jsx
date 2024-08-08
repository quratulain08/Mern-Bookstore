import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show loading spinner if the authentication state is being determined
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner aria-label="Loading" />
      </div>
    );
  }

  // If user is authenticated, allow access to the children components
  if (user) {
    return children;
  }

  // Redirect to login if user is not authenticated
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
