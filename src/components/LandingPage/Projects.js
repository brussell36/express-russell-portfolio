import { React, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import gardenhelper from '../images/garden-helper-homepage-cropped.png';
import gardenhelperhome from '../images/garden-helper-homepage.png';
import gardenhelpergif from '../images/garden-helper-gif.gif';
import damerow from '../images/damerow-ford-homepage-cropped.png';
import damerowhome from '../images/damerow-ford-homepage.png';
import mopop from '../images/mopop-modal-unexpanded-cropped.png';
import mopopmodal from '../images/mopop-modal-unexpanded.png';
import mopopexpanded from '../images/mopop-modal-expanded.png';
import blazers from '../images/blazers-pregame-page-cropped.png';
import blazersfull from '../images/blazers-pregame-page.png';
import tindog from '../images/tindog-cropped.png';
import tindogfull from '../images/tindog.png';
import theorem from '../images/theorem-employee-page.png';
import '../scss/components/_projects.scss';

export default function Projects() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);
  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);
  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);
  const handleClose4 = () => setShowModal4(false);
  const handleShow4 = () => setShowModal4(true);
  const handleClose5 = () => setShowModal5(false);
  const handleShow5 = () => setShowModal5(true);
  const handleClose6 = () => setShowModal6(false);
  const handleShow6 = () => setShowModal6(true);

  return (
    <>
      <h1>My Projects</h1>
      <div id='projects'>
        <div className='projects-container'>
          <div className='img-container'>
            <Image onClick={handleShow1} src={gardenhelper} alt='Garden Helper Homepage Cropped' />
            <Modal show={showModal1} onHide={handleClose1} id='garden-helper-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>Garden Helper</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={gardenhelperhome} alt='Garden Helper Homepage' />
                <div className='about-project'>
                  <p>
                    This project was conceived as my capstone project to display the skills I learned while attending the Epicodus full stack web development course.
                    I used a React.js frontend with Google Firebase to handle my backend.<br/>
                    The application is designed to help new gardeners decide on some plants that will fit the conditions existing in their garden. 
                    I chose all the plants as ones that I have found are low-maintinence and most are low-water as well.
                    The search function takes in the variables of sun, water, and soil.
                    The user gets to choose how much sun they get in their yard.
                    Then they choose whether they get a lot of rain or almost none and finally they can choose what type of soil they have. 
                    When the Get Plants! button is clicked it finds which plants in the database match the users specifications and returns them as cards the user can read and decide if they would like those plants.<br/>
                    There are heart buttons so that if a user likes particular plants they can save them to their favorites and view them on a separate page. 
                    If the heart button is clicked again it will remove that plant from their favorites.<br/>
                    I had quite a bit of trouble getting the button to function the way I wanted.
                    It was difficult to get the button to preform 2 separate functions depending on whether a condition was true or false.
                    Here is a link to the live version of the site <a href='https://garden-helper-98c3b.web.app/' target='_blank' rel='noreferrer'>Garden Helper.</a>
                  </p>
                </div>
                <Image className='modal-img' src={gardenhelpergif} alt='Garden Helper Search Page' />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose1}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className='img-container'>
            <Image onClick={handleShow2} src={damerow} alt='Damerow Ford Homepage' />
            <Modal show={showModal2} onHide={handleClose2} id='damerow-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>Damerow Ford</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={damerowhome} alt='Damerow Ford Homepage' />
                <div className='about-project'>
                  <p>While interning at Theorem Agency, we were tasked with redesigning the homepage of this dealership.<br/> 
                    We worked with the inhouse UI/UX designer on what the new page would look like. 
                    The two of us changed the hero image and created the 2 buttons the are on top of the image.<br/> 
                    We also redesigned the FAQ section to use an accordion when a user clicked on one of the questions. 
                    We also worked on a gallery of images that would zoom in when a user hovered over them.<br/> 
                    There was quite a bit of CSS work involved in all of the aspects we changed.
                    Here is a link to the live page <a href='https://www.damerowford.com/2021-ford-bronco.html' target='_blank' rel='noreferrer'>Damerow Ford.</a></p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose2}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className='img-container'>
            <Image onClick={handleShow3} src={mopop} alt='MoPOP Board of Directors page' />
            <Modal show={showModal3} onHide={handleClose3} id='mopop-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>MoPOP Board of Directors</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={mopopmodal} alt='MoPOP Board of Directors page' />
                <div className='about-project'>
                  <p>This project for the MoPOP Board of Directors was created while interning at Theorem Agency. 
                    I worked closely with the UI/UX designer and built the first mockup to their specifications. 
                    When it became clear that the initial version was not working quite the way we wanted it to function, we decided to try a couple new ideas.
                    I pitched an idea to have the cards, when clicked, drop down a description of the person on the board the user had clicked on.
                    We also thought it would be a good idea to make a modal version so each board member could have the same prominence when a user clicked on their card.
                    I built out all three versions and we took them to the client and they liked the modal version best. This is the screen shot of that version.</p>
                </div>
                <Image className='modal-img' src={mopopexpanded} alt='MoPOP Board of Directors modal expanded' />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose3}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className='img-container'>
            <Image onClick={handleShow4} src={blazers} alt='Blazers pregame page cropped' />
            <Modal show={showModal4} onHide={handleClose4} id='mopop-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>Blazers News Items</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={blazersfull} alt='Blazers pregame page' />
                <div className='about-project'>
                  <p>I am a native Portlander and I was thrilled to learn that we would be working on the Trailblazers page while at Theorem Agency.
                    This was the first project I was assigned to work on while there. The site uses a React frontend and we had just completed the React portion of our code school education.
                    It was great to solidify those skills by working on redesigning the news feed portion of the blazers page. I had to pull the data from an API that the blazers made available to us and display it on the page.
                    I used bootstrap cards and CSS flexbox to get the look the team wanted for their new news feed. My fellow interns also worked on other portions of this same page.
                    We collaborated to make sure that everything we were doing would fit in well with each other.<br/>
                    Go Blazers!
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose4}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className='img-container'>
            <Image onClick={handleShow5} src={tindog} alt='Tindog' />
            <Modal show={showModal5} onHide={handleClose5} id='mopop-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>Tindog</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={tindogfull} alt='Tindog home page' />
                <div className='about-project'>
                  <p>While deciding if I wanted to invest in my education and attend a code school, I took a class from UDemy.com.
                    I made this page while working on that class. This project helped me learn how to properly use HTML, CSS, and Bootstrap.
                    There was still much to learn, but this class helped me decide to go on to code school and round out my education.
                    Here is a link to the live page <a href='https://brussell36.github.io/tindog/' target='_blank' rel='noreferrer'>Tindog.</a>
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose5}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className='img-container'>
            <Image onClick={handleShow6} src={theorem} alt='Theorem employee portal' />
            <Modal show={showModal6} onHide={handleClose6} id='mopop-modal' dialogClassName='modal-90w'>
              <Modal.Header closeButton>
                <Modal.Title>Theorem Employee Portal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Image className='modal-img' src={theorem} alt='Theorem employee portal' />
                <div className='about-project'>
                  <p>During my internship at Theorem Agency they had an employee portal that had been designed, but had almost no styling.
                    I was tasked with making the pages look like the UI/UX designer was envisioning they would look like.
                    They all look like dashboards with quicklinks on the left hand side of the page. The data is not dynamic yet as they had not created the API I needed to utilize to get the proper information to show.
                    This project used React. Bootstrap was used heavily for the styles as well as SCSS for all of the custom styles.
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose6}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  )
}