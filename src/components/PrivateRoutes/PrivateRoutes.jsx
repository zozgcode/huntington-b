import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoutes = () => {
  const isAuthenticated = localStorage.getItem("token") ? true : false;
  const location = useLocation();

  if (!isAuthenticated && location.pathname !== '/login') {
    return <Navigate to='/login'/>;
  }

  return <Outlet/>;
}

export default PrivateRoutes;
