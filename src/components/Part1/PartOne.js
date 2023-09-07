import { Parallax } from 'react-parallax';
import './styles.css';

import hh1 from '../../assets/hh1.jpg';
import hhLogoWhite from '../../assets/HH-whiteLogo-400-05.png';
import hhCircle from '../../assets/hcircle-08-08.png';

const PartOne = () => (
    <>
    <header>
        <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={hh1}
            bgImageAlt="Homehub-corporate-1"
            strength={-500}
        >
            <div className='hhCircleBox mt-5'>
                <img className='hhCircle' src={hhCircle} />
            </div>

            <img className='hh-logo-white-400' src={hhLogoWhite} alt='Homehub Logo' />
            
            <h3 class='lead fw-lighter text-white mt-4'>Living life a simpler way</h3>

            <div class='row row-app-download'>
                <div class='col mt-5'>
                    <button href='#' class='btn btn-lg btn-outline-light'>Get Homehub for Android</button>
                </div>
                <div class='col mt-5'>
                    <button href='#' class='btn btn-lg btn-primary'>Get Homehub for iOS</button>
                </div>
            </div>

            {/* HOMEHUB MAIN BENEFITS */}
            <div class='container container-benefits'>
                <div class='row row-cols-sm-2 row-cols-lg-4 gx-5 gy-5'>
                    <div class='col'>
                        <div class='box-benefit'>
                            <p class='lead fs-6 fw-lighter text-uppercase text-wrap p-3 '>energy savings</p>
                            <button class='btn btn-outline-light mt-4 fw-lighter'>Learn more</button>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='box-benefit'>
                            <p class='lead fs-6 fw-lighter text-uppercase text-wrap p-3 '>intuitive controls</p>
                            <button class='btn btn-outline-light mt-4 fw-lighter'>Learn more</button>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='box-benefit'>
                            <p class='lead fs-6 fw-lighter text-uppercase text-wrap p-3 '>advanced security</p>
                            <button class='btn btn-outline-light mt-4 fw-lighter'>Learn more</button>
                        </div>
                    </div>
                    <div class='col'>
                        <div class='box-benefit'>
                            <p class='lead fs-6 fw-lighter text-uppercase text-wrap p-3 '>intelligent devices</p>
                            <button class='btn btn-outline-light mt-4 fw-lighter'>Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '200px' }} />
            
            

        </Parallax>
    </header>

    <section class='container'>
    <div classname='row row-cols-sm-2 row-cols-lg-3 gx-3 gy-3'>
            <div class='col'>
                <div class='box'>
                    <p class='lead text-uppercase fs-2 fw-lighter'>in the palm of your hand...</p>
                </div>
            </div>
            <div class='col'>
                <div class='box'>
                <p class='lead text-uppercase fs-2 fw-lighter'>at any time</p>
                </div>
            </div>
        </div>
    </section>
    </>
);

export default PartOne;