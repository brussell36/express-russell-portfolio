import React from 'react';
import Container from 'react-bootstrap/Container';
import '../scss/components/_contact.scss';

export default function Contact() {
  return(
    <div id='contact'>
      <Container>
        <h3 className='contact-title'>Contact Me</h3>
        <a className='contact-link' href='https://www.linkedin.com/in/ben-russell36/' target='_blank' rel='noreferrer'>LinkedIn</a>
        <a className='contact-link' href='https://github.com/brussell36' target='_blank' rel='noreferrer'>GitHub</a>
        <p>© Copyright 2020 Benjamin Russell</p>
      </Container>
    </div>
  );
}