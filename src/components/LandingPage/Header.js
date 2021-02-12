import React from 'react';
import '../scss/components/_header.scss'
import NavBar from './NavBar';

export default function Header() {
  return(
    <>
      <div id='header'>
        <NavBar />
        <h1 className='header-title'> I'm Benjamin Russell</h1>
        <h3 className='header-description'>A Full Stack Developer</h3>
      </div>
    </>
  )
}