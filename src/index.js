import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedComponent } from './components/ProtectedComponent';
import TestCam from './components/TestCam';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <Router>
          <Routes>
            <Route path="/510pay" element={
              <ProtectedComponent>
                <App />
              </ProtectedComponent>
            } />
            <Route path="/510pay/signIn" element={<SignIn />} />
            <Route path="/510pay/signUp" element={<SignUp />} />
            <Route path='/510pay/testcam' element={<TestCam />} />
          </Routes>
        </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
