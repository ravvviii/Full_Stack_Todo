import React from 'react';
import "./Home.css";
function Home() {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1>Organize your <br /> work and life, finally</h1>
        <p>
          Become focused, organised, and calm with <br />
          todo app. The world's #2 task manager app
        </p>

        <button className='home-btn p-2 '>Make Todo List</button>
      </div>
    </div>
  );
}

export default Home;
