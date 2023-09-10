import React from 'react';
import hhLogo from '../../assets/HH-whiteLogo-400-05.png'

const HHFooter = () => {
  return (
    <div class='container' style={{backgroundColor:'#99457d80', border:'1px solid #99457dCC', borderRadius:'1.5rem', boxShadow:'0px 1px 10px #10506B50'}}>
        <div class='row d-flex justify-content-lg-between g-3 text-white' style={{paddingTop:'3rem'}}>
            <div class='col col-lg-3 col-sm-10'>
              <div class='d-grid g-2 text-start'>
                <a class="navbar-brand" href="#">
                    <img src={hhLogo} alt='Homehub Logo' style={{height:'25px', paddingBottom:'5px', marginLeft:'1rem', marginRight:'2rem'}}/>
                </a>
                <h6 class='font-monospace fw-lighter mt-2' style={{fontSize:'.8rem'}}>Living life a simpler way.</h6>
                <ul class='list-unstyled fw-lighter mt-2'>
                  <li>info@homehub.com</li>
                  <li>+34 555 555 555</li>
                  <li>Somewhere, Spain</li>
                </ul>

              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
              <div class='d-grid g-2 text-start'>
                <h5 class='lead'>Homehub Cloud</h5>
                <ul class='list-unstyled fw-lighter' style={{lineHeight:'2.6rem'}}>
                  <li>Data Cloud</li>
                  <li>Clients Private Area</li>
                  <li>Setting&Docs</li>
                </ul>
              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
            <div class='d-grid g-2 text-start'>
                <h5 class='lead'>Homehub Community</h5>
                <ul class='list-unstyled fw-lighter' style={{lineHeight:'2.6rem'}}>
                  <li>Join now</li>
                  <li>Newsletter</li>
                </ul>
              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
            <div class='d-grid g-2 text-start'>
                <h5 class='lead'>The Company</h5>
                <ul class='list-unstyled fw-lighter' style={{lineHeight:'2.6rem'}}>
                  <li>Our history</li>
                  <li>Meet the team</li>
                  <li>Our mission with the world</li>
                  <li>Work with us</li>
                </ul>
              </div>
            </div>

            <div class='row d-flex justify-content-between mt-4'>
              <p class='fw-lighter font-monospace' style={{letterSpacing:'.15rem', fontSize:'.75rem'}}>All rights reserved / www.alvarofajardo.com</p>
            </div>

        </div>
    </div>
  )
}

export default HHFooter