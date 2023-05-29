import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { getLogging } from 'redux/seleclors';
import UserMenu from 'components/UserMenu/UserMenu';

import { StyledLink, Header, AuthNav, AuthLink } from './Navigation.styled';

export default function Navigation() {
  const isLoggedIn = useSelector(getLogging);
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          {isLoggedIn && <StyledLink to="/phonebook">Phonebook</StyledLink>}
        </nav>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <AuthNav>
            <AuthLink to="/login">Login</AuthLink>
            <AuthLink to="/register">Register</AuthLink>
          </AuthNav>
        )}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
