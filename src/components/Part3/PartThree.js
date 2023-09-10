import React from 'react';
import { Parallax } from 'react-parallax';

import hh3 from '../../assets/hh3.jpg';


const PartThree = () => {
  return (
    <>
    <section>
      <Parallax
              blur={{ min: -2, max: 2 }}
              bgImage={hh3}
              bgImageAlt="Homehub-corporate-1"
              strength={-500}
          >
              
              <div class='container' style={{marginTop:'12rem'}}>
                  <div class='row d-flex justify-content-center'>
                    <div class='col col-lg-4 col-md-6 col-sm-6' style={{marginTop:'10rem'}}>
                      <p class='lead fs-4 fw-lighter' style={{color:'#ffffff', letterSpacing:'.2rem', lineHeight:'3rem'}}>Simplify your everyday tasks and experience a new way of living in your home.</p>
                      <div class='d-grid g-2 mt-5'>
                        <button class='btn btn-outline-light fw-light fs-5' style={{borderRadius:'3rem'}}>Join the Homehub Community</button>
                        <button class='btn btn-link fw-lighter fs-5 mt-2' style={{color:'#ffffff'}}>Our newsletter</button>
                      </div>
                    </div>
                  </div>
              </div>

              <div style={{ height: '300px' }} />
                            
          </Parallax>
        </section>
    </>
  )
}

export default PartThree