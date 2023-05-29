import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchCurrentUser } from 'redux/authOperations';
import { getRefreshingCurrentUser } from 'redux/seleclors';

import css from './App.module.css';

import Navigation from './Navigation/Navigation';
import NotFound from 'pages/NotFound';
import Home from 'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Phonebook from 'pages/Phonebook/Phonebook';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export default function App() {
  const isRefreshingCurrentUser = useSelector(getRefreshingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <div className={css.container}>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route
              index
              element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
              }
            />
            <Route
              path="phonebook"
              element={
                <PrivateRoute navigateTo="/login">
                  <Phonebook />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted navigateTo="/phonebook">
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted navigateTo="/phonebook">
                  <Register />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    )
  );
}
