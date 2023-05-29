import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogging } from 'redux/seleclors';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const isLoggedIn = useSelector(getLogging);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to={navigateTo} /> : <>{children}</>;
}
