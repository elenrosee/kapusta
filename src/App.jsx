import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar } from 'components';
import { GlobalStyle } from 'GlobalStyle';
import {
  fetchCurrentUser,
  getIsFetchingCurrent,
  getIsLoggedIn,
} from 'redux/user';
import { useMediaQuery } from 'react-responsive';
import { Breakpoints } from 'common';

const AuthView = lazy(() => import('./views/AuthView'));
const HomeView = lazy(() => import('./views/HomeView'));
const MobileHomeView = lazy(() => import('./views/MobileHomeView'));
const ReportView = lazy(() => import('./views/ReportView'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <h2>loading...</h2>
      ) : (
        <>
          <GlobalStyle />
          <AppBar />
          <Suspense fallback={<h2>loading...</h2>}>
            <Routes>
              <Route
                path="/"
                exact
                element={
                  isLoggedIn ? <Navigate to="/transactions" /> : <AuthView />
                }
              />
              <Route
                path="/transactions"
                exact
                element={
                  isLoggedIn ? (
                    isMobile ? (
                      <MobileHomeView />
                    ) : (
                      <HomeView />
                    )
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/reports"
                exact
                element={isLoggedIn ? <ReportView /> : <Navigate to="/" />}
              />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
};
