import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import { BrowserRouter } from "react-router-dom";
import './styles/app.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
</BrowserRouter>,
);