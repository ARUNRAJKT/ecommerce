import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/mainPage';
import Addpage from '../pages/addPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
        <Route path='/addpage' element={<Addpage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
