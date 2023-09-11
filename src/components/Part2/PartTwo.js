import React from 'react';
import { Parallax } from 'react-parallax';

import hh2 from '../../assets/hh2-2.jpg';
import SeparadorHHOffice from './SeparadorHHOffice';

const PartTwo = () => {
  return (
    <>
    <section class='sectionTwoHH'>
      <Parallax
              blur={{ min: -2, max: 2 }}
              bgImage={hh2}
              bgImageAlt="Homehub-corporate-1"
              strength={-200}
          >
              
              <div class='container mt-5 mb-5'>
                  <div class='row'>
                  <div style={{ height: '200px' }} />
                    <div class='col col-lg-9 col-sm-11'>
                      <p class='lead fs-6 fw-lighter text-start text-white'>Transform your home into a <b>smart, connected space</b> with our innovative home automation app. <b>Homehub</b> gives you full control of your home devices from the convenience of your smartphone, tablet or computer.</p>
                      <p class='lead fs-6 fw-lighter text-start text-white mt-4'>This way, you will just have one task to do in your home... <b>relax</b>.</p>
                    </div>
                    <div class='row'>
                      <div class='col col-lg-3 col-sm-5 col-xs-5 text-start'><button class='btn btn-outline-light rounded-pill mt-4 p-3 fw-light'>Discover our plans</button></div>
                    </div>
                  </div>
              </div>

              <div style={{ height: '200px' }} />
              
          </Parallax>
        </section>

        <section>
          <SeparadorHHOffice />
        </section>

    </>
  )
}

export default PartTwo