import React from 'react';
import { Parallax } from 'react-parallax';

import hh2 from '../../assets/hh2-2.jpg';
import SeparadorHHOffice from './SeparadorHHOffice';

const PartTwo = () => {
  return (
    <>
    <section>
      <Parallax
              blur={{ min: -2, max: 2 }}
              bgImage={hh2}
              bgImageAlt="Homehub-corporate-1"
              strength={-500}
          >
              
              <div class='container' style={{marginTop:'5rem'}}>
                  <div class='row'>
                    <div class='col col-lg-9 col-sm-11' style={{marginTop:'10rem'}}>
                      <p class='lead fs-4 fw-lighter text-start' style={{color:'#ffffff', letterSpacing:'.2rem', lineHeight:'3rem'}}>Transform your home into a smart, connected space with our innovative home automation app. HomeHub360 gives you full control of your home devices from the convenience of your smartphone, tablet or computer.</p>
                      <p class='lead fs-4 fw-lighter text-start mt-4' style={{color:'#ffffff', letterSpacing:'.2rem'}}>This way, you will just have one task to do in your home... <b>relax</b>.</p>
                    </div>
                  </div>
              </div>

              <div style={{ height: '300px' }} />
              
          </Parallax>
        </section>

        <section>
          <SeparadorHHOffice />
        </section>

    </>
  )
}

export default PartTwo