import React from 'react'

const Home = () => {
  // page title
  document.title = 'Home | ARCN Staff Enrollment Portal';
  return (
    <div className='page-wrapper home-page'>
      <div className='home-page__banner_content'>
        <h1 className='home-page__title'>Welcome to the Official ARCN </h1>
        <button className='home-page__button'>Staff Enrollment Portal</button>
      </div>
    </div>
  )
}

export default Home