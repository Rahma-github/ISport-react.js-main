import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
