import React from 'react'
import robot from '../assets/51DBd7O6GEL.jpg'

export const Profile = () => {
  return (
    <div className='profile'>
        <div className='picture-container'>
            <img src= {robot} alt='cute robot' />
        </div>
        <div className='info-container'>
            <h1>Hello Ethan Mojica</h1>
            <h3>dummyemail@something.com</h3>
        </div>
    </div>
  )
}
