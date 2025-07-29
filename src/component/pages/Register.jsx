import React from 'react'
import { Link } from 'react-router-dom';
const Register = () => {
  // page title
  document.title = 'Register | ARCN Staff Enrollment Portal';
  return (
    <div className='page-wrapper alingn-center'>
      <div className="create-account-container container-padding">
        <div className="left-col">

          <div className="left-col-container">
            <h1 className='create-account__title'>Welcome Back</h1>
            <p className='create-account__description'>Please fill in the details below to create your account.</p>
            <p className='create-account__description'>Already have an account? <Link className='create-account__link' to="/login"> Login here </Link> </p>
          </div>

        </div>

        <div className="right-col">
          <h1 className='create-account__title'>Create an Account</h1>
          <form className='create-account__form'>
            <input type="text" placeholder="Full Name" className='create-account__input' />
            <input type="email" placeholder="Email Address" className='create-account__input' />
            <input type="password" placeholder="Password" className='create-account__input' />
            <input type="password" placeholder="Confirm Password" className='create-account__input' />
            <input type="text" placeholder="Phone Number" className='create-account__input' />
            <button type="submit" className='create-account__button'>Register</button>
          </form>
        </div>

      </div>

    </div>
  )
}

export default Register