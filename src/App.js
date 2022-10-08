import React, { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import * as ROUTES from './constants/routes'

const Login = lazy(()=> import('./components/Pages/Login/Login.jsx'))
const SignUp = lazy(()=> import('./components/Pages/SignUp/SignUp.jsx'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>        
          <Route path={ROUTES.LOGIN} element={<Login/>}/>
          <Route path={ROUTES.SIGN_UP} element={<SignUp/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
