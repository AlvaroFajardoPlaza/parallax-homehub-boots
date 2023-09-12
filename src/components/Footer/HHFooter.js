import React from 'react';
import './styles.css';
import hhLogo from '../../assets/HH-whiteLogo-400-05.png'

const HHFooter = () => {
  return (
    <div class='container footer'>
        <div class='row d-flex justify-content-lg-between g-3 text-white pt-5'>
            
            <div class='col col-lg-3 col-sm-10 ps-4'>
              <div class='d-grid g-2'>
                <div class='row'>
                  <div class='col col-lg-5 col-sm-6'>
                    <a class="navbar-brand ps-2" href="#">
                        <img src={hhLogo} alt='Homehub Logo' class="img-fluid" />
                    </a>
                  </div>
                </div>

                
                <ul class='list-unstyled fw-lighter mt-3'>
                <div class='d-grid g-2'>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>info@homehub.com</li>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>+34 555 555 555</li>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Somewhere, Spain</li>
                  </div>
                </ul>
                

              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
              <div class='d-grid g-2'>
                <h5 class='lead mb-2 text-start ps-2'>Homehub Cloud</h5>
                <ul class='list-unstyled fw-lighter'>
                  <div class='d-grid g-2'>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Data Cloud</li>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Clients Private Area</li>
                  <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Setting&Docs</li>
                  </div>
                </ul>
              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
            <div class='d-grid g-2 text-start'>
                <h5 class='lead mb-2 text-start ps-2'>Homehub Community</h5>
                <ul class='list-unstyled fw-lighter'>
                  <div class='d-grid g-2'>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Join now</li>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Newsletter</li>
                  </div>
                </ul>
              </div>
            </div>

            <div class='col col-lg-3 col-sm-10'>
            <div class='d-grid g-2 text-start'>
                <h5 class='lead mb-2 text-start ps-2'>The Company</h5>
                <ul class='list-unstyled fw-lighter'>
                  <div class='d-grid g-2'>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Our history</li>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Meet the team</li>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Our mission with the world</li>
                    <li class='list-item btn text-start btn-sm btn-link fw-lighter mt-2 text-white text-decoration-none'>Work with us</li>
                  </div>
                </ul>
              </div>
            </div>

            <div class='row d-flex justify-content-between mt-4'>
              <p class='fw-lighter'>All rights reserved | <button class='btn btn-link pb-2 text-white btn-sm fw-lighter'>www.alvarofajardo.com</button></p>
            </div>

        </div>
    </div>
  )
}

export default HHFooter