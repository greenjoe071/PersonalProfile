import React from 'react';


import { About, Footer, Header, Skills, Testimonial, Work,  } from './container';
import { Navbar } from './components';

import './App.scss';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMlE1C_fUy8_zLSq7pAbcBrXd8T4vvsII",
  authDomain: "joes-portfolio-bc6eb.firebaseapp.com",
  projectId: "joes-portfolio-bc6eb",
  storageBucket: "joes-portfolio-bc6eb.appspot.com",
  messagingSenderId: "835112342599",
  appId: "1:835112342599:web:01830a41893c050864cd62",
  measurementId: "G-5Y06D9473C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const App = () => (
  <div className="app">
    <Navbar /> 
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer /> 
    
    
  </div>
);

export default App;
