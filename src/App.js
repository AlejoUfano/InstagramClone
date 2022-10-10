import React, { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes'
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';

const Login = lazy(()=> import('./components/Pages/Login/Login.jsx'))
const SignUp = lazy(()=> import('./components/Pages/SignUp/SignUp.jsx'))
const Profile = lazy(()=> import('./components/Pages/Profile/Profile.jsx'))
const Dashboard = lazy(() => import('./components/Pages/Dashboard/Dashboard.jsx'));
const NotFound = lazy(() => import('./components/Pages/NotFound/NotFound.jsx'));
function App() {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>        
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard user={user} />} />
          <Route element={<NotFound />} />
        </Routes>
      </Suspense>
    </UserContext.Provider>
  );
}

export default App;
