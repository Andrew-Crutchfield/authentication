import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import PrivateRoute from './routes/PrivateRoute'; // Assuming PrivateRoute is in the `routes` folder

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* Wrap protected routes with a Route using PrivateRoute as the element */}
        <Route element={<PrivateRoute />}>
          {/* Only authenticated users can access these routes */}
          <Route path="/main" element={<MainPage />} />
          {/* Add more protected routes as needed */}
        </Route>
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;