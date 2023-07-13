import React from 'react';
import './App.scss';
import Category from './Components/Category';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Category />
    </div>
  );
}

export default App;
