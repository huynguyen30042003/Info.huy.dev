import imgUser from './img/img-user.png'
import viewNote from './img/view-note.png'
import imgUser1 from './img/img-user-1.png'
import convert from './img/convert.png'
import post from './img/post.png'
import linkFb from './img/linkFb.png'
import linkZalo from './img/linkZalo.png'
import linkEmail from './img/linkEmail.png'
import call from './img/call.png'
import './App.css';
import { useState } from 'react'
function App() {
  const [isFacebook,setIsFacebook]=useState(1);
  const [isEmail,setIsEmail]=useState(0);
  const [isZalo,setIsZalo]=useState(0);
  const clickFacebook =()=>{
    setIsFacebook(1);
    setIsEmail(0);
    setIsZalo(0);
    console.log('fb');
  }
  const clickEmail =()=>{
    setIsFacebook(0);
    setIsEmail(1);
    setIsZalo(0);
    console.log('email');
  }
  const clickZalo=()=>{
    setIsFacebook(0);
    setIsEmail(0);
    setIsZalo(1);
    console.log('zalo');

  }


  return (
    <>
      <div className='center'>
      <div className='myCv'>
        <div className='header'>
          <div className='user'>
            <div className='sign'>
            <a>NhatHuy</a>
            </div>
          </div>
          <div className='nav'>
            <a target="_blank" rel="noreferrer" href='#introduction' className='toInformation'>Information</a>
            <a target="_blank" rel="noreferrer" href='#Projects' className='toProject'>Project</a>
            <a target="_blank" rel="noreferrer" href='#Contact-information' className='toContact'>Contact</a>
            <a target="_blank" rel="noreferrer" href='#Footer' className='toFooter'>Footer</a>
          </div>
          <div className='contact'>
            <button href='#Contact-information' className='button-contact '>Contact me</button>
        </div>
        </div>
          <div className='content'>
            <div id='introduction'>
              <div className='left-intro '>
                <img src={imgUser1}></img>
              </div>
              <div className='right-intro'>
                <div className='introduce'>
                  <a1>Hi, I'm Nhat Huy,</a1>
                  <a2>I am a new developer, I am learning about front end and I will constantly improve myself. I'm working to gain experience</a2>
                </div>
              </div>
            </div>
            <div id='Projects'>
              <a className='pj-a'>My Projects</a>
              <div className='project project-1'>
                <div className='info'>
                  <div className='info-pj'>
                    <a>Notes</a>
                    <div className='user-by'>
                      <div className='user-by-de user-by1'>HTML</div>
                      <div className='user-by-de user-by2'>CSS</div>
                      <div className='user-by-de user-by3'>REACTjs</div>
                    </div>
                    <div className='view'>
                      <a>View now</a>
                    </div>
                  </div>
                </div>
                <div className='view-pj'>
                  <img src={viewNote}></img>
                </div>
              </div>
              <div className='project project-2'>
              <div className='info'>
                  <div className='info-pj'>
                    <a>Convert</a>
                    <div className='user-by'>
                      <div className='user-by-de user-by1'>HTML</div>
                      <div className='user-by-de user-by2'>CSS</div>
                      <div className='user-by-de user-by3'>REACTjs</div>
                    </div>
                    <div className='view'>
                      <a>View now</a>
                    </div>
                  </div>
                </div>
                <div className='view-pj'>
                  <img src={convert}></img>
                </div>
              </div>
              <div className='project project-3'>
              <div className='info'>
                  <div className='info-pj'>
                    <a>Post-demo</a>
                    <div className='user-by'>
                      <div className='user-by-de user-by1'>HTML</div>
                      <div className='user-by-de user-by2'>CSS</div>
                      <div className='user-by-de user-by3'>REACTjs</div>
                    </div>
                    <div className='view'>
                      <a>View now</a>
                    </div>
                  </div>
                </div>
                <div className='view-pj'>
                  <img src={post}></img>
                </div>
              </div>
            </div>
            <div id='Contact-information'>
            <div className='boxContact'>
            <a className='contact-a'>Contact</a>
            
            <div className='typeOfContact'>
              <div
              onClick={clickFacebook} 
              className={isFacebook==1?'con Contact-fb click-contact color-click':'con Contact-fb click-contact'}
              // className='con Contact-fb click-contact'
              >
                <i className="fa-brands fa-facebook"></i>
                <a>Facebook</a>
              </div>
              <div
              onClick={clickEmail}
              className={isEmail==1?'con Contact-email color-click':'con Contact-email'}
              // className='con Contact-email'
              >
                <i className="fa-solid fa-envelope"></i>
                <a>Email</a>
              </div>
              <div 
              onClick={clickZalo}

              className={isZalo==0?'con Contact-Zalo ':'con Contact-Zalo color-click'}>
                <a>Zalo</a>
              </div>
            </div>
              
              <div
              className={isFacebook==0?'link link-fb display-none' :'link link-fb'}
               >
                <img src={linkFb}></img>
              </div>
              <div 
              className={isEmail==0?'link link-email display-none':'link link-email'}>
                <img src={linkEmail}></img>
              </div>              
              <div 
              className={isZalo==0?'link link-zalo display-none':'link link-zalo'}>
                <img src={linkZalo}></img>
              </div>
              {/* <div className='link link-fb'>
                <img src={linkEmail}></img>
              </div> */}

            </div>
            <div className='other-contact'>
              <a >Number phone:<br></br> (+84)961061430</a>
              <div className='email-add'>

              <a >Email:<br></br> nguyenkhoanhathuy@gmail.com</a>
              </div>
            </div>
            </div>
            <div className='Footer' id='Footer'>
              <div className='footer-left'>
                  <a>nguyenkhoanhathuy</a>
                  <div className='send'>
                  <i class="fa-regular fa-copyright"></i>
                  <a>2023, Built and designed by Huy</a>
                </div>
              </div>
              <div className='footer-right'>
                <span> Links</span>
                <div className='footer-links'>
                  <a href='#introduction'>Information</a>
                  <a href='#Projects'>Project</a>
                  <a href='#Contact-information'>Contact</a>
                </div>
              </div>
              <div className='get-in-touch'>
                

                <span >Get in touch</span>
                <div className='get-in-touch-item'>
                <a target="_blank" href='https://www.facebook.com/avoidshift3004/'>Facebook</a>
                <a href='#Contact-information'>Email</a>
                  
                </div>
              </div>
            <div href='#introduction' className='up'><a href='#introduction'>

            <i  className=" fa-solid fa-angles-up"></i>
            </a>

            </div>
            </div>
          </div>
        </div>  
      </div>        

    </>
  );
}

export default App;
