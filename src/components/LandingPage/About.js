import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import benrussell from '../images/ben-russell-portrait.jpg';
import '../scss/components/_about.scss';

export default function About() {
  return(
    <div id='about'>
      <Container>
        <h3 className='about-title'>About Me</h3>
        <div className='about-content'>
          <Image className='about-img' src={benrussell} alt='Portrait of Benjamin Russell' />
          <p className='about-text'>I am a 34 year old living in Portland, Oregon and before I decided to change careers I was a carpenter/handyman.
            I have also worked in the printing industry before. I made the change to web development after my father-in-law retired and I did not want to continue running the business by myself.
            I still do some carpentry as a hobby and am creating small tables and desks for my family and friends in my free time.
            While attending Epicodus I discovered that I enjoy working on the front end of web sites primarily. React was some of the most fun I had while studying there.
            That being said we did learn about back end technologies and I also enjoy making a site function as smoothly and realiably as possible for all users.
            I am now searching for a job where I can utilize my strengths in front end development and sharpen my skills when it comes to back end, for example authentication and database management.
            This career path is facinating because there is so much you can do and so much you can learn every day.
          </p>
        </div>
      </Container>
    </div>
  );
}