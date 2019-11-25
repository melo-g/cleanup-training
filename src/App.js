import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Content from './components/Content/Content.js';
import Footer from './components/Footer/Footer.js';
import Form from './components/Form/Form.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
