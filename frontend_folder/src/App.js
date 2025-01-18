import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Signin from './components/signup/Signin';
import Signup from './components/signup/Signup';
import Todo from './components/todo/Todo';


function App() {
  return (
    <>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes> 
    <Footer />
  </Router>


    {/* <Home /> */}

    </>
  )
}

export default App