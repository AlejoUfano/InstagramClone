import React, { lazy, Suspense } from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Organisms/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import * as ROUTES from './constants/routes'

const Login = lazy(()=> import('./components/Pages/Login/Login.jsx'))

function App() {
  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>        
          <Route path={ROUTES.LOGIN} element={<Login/>}/>
          <Route path={ROUTES.DASHBOARD} element={<Home/>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
