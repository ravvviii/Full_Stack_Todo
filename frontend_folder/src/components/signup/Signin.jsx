import React from 'react';
import HeadingComp from './HeadingComp';
import './signup.css';

function Signin() {
  return (
    <div>
       <div className='signup'>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-4 column col-left  d-flex justify-content-center align-items-center'>  
          <HeadingComp first='Sign ' second='In' />
          </div>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center'>  
            <div className='d-flex flex-column w-100 p-5'>
                <input className='p-2 my-3 input-signup' name='email'  type='email' placeholder='Email' />
                
                <input className='p-2 my-3 input-signup' name='password'  type='password' placeholder='Password' />

                <button className='btn-signup '>Sign In</button>
            </div>
          </div>

         
        </div>
      </div>
    </div>

    </div>
  )
}

export default Signin