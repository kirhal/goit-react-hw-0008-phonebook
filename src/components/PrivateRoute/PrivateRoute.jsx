import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLogging } from 'redux/seleclors';
// import { postContact } from 'redux/contactsOperations';
// import { getContactsList } from 'redux/seleclors';

export default function PrivateRoute({ children, navigateTo = '/' }) {
  const isLoggedIn = useSelector(getLogging);

  return isLoggedIn ? <>{children}</> : <Navigate to={navigateTo} />;
}
