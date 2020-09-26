import React from 'react';
import './App.css';
import Header from './pages/header'
import SubHeader from './pages/sub-header'
import AppMain from './pages/app-main'
import Footer from './pages/footer'
import { BrowserRouter as Router } from "react-router-dom";

function App () {
  return (
    <div className="App">
      <Router>
        <Header />
        <SubHeader />
        <AppMain />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
