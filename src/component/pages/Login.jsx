import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  // page title
  document.title = 'Login | ARCN Staff Enrollment Portal';
  return (
    <div className='page-wrapper'>
      <div className="login-container container-padding">
        <div className="left-col">

          <div className="left-col-container">


            <h1 className='create-account__title'>Welcome Back</h1>
            <p className='create-account__description'>Please fill in the details below to login.</p>
            <p className='create-account__description'>Don't have an account? <Link className='create-account__link' to="/register"> Register here </Link> </p>
          </div>
        </div>
        <div className="right-col">
          <h1 className='create-account__title'>Login to Your Account</h1>
          <form className='create-account__form'>
            <input type="email" placeholder="Email Address" className='create-account__input' />
            <input type="password" placeholder="Password" className='create-account__input' />
            <button type="submit" className='create-account__button'>Login</button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login