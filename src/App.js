import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Study from './components/pages/study/Study';
import PageListQuestion from './components/pages/study/question/PageListQuestion';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/study" element={<Study />}/>
          <Route exact path="/review" element={<Services />}/>
          <Route exact path="/question-list/part/:partId/:groupId" element={<PageListQuestion />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
