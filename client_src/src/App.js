import React from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'
import Result from './components/Result'
import Pagination from './components/Pagination';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div className="container">
      <Result />
    </div>
    <div className="container" align="right">
      <Pagination />
    </div>
  </div>
)

export default App;
