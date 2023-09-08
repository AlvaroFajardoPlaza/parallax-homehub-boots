import { Parallax } from 'react-parallax';
import './styles.css';

import hh1 from '../../assets/hh1.jpg';
import hhLogoWhite from '../../assets/HH-whiteLogo-400-05.png';
import hhCircle from '../../assets/hcircle-08-08.png';
import DownloadButtons from './DownloadButtons';
import BenefitCards from './BenefitCards';
import Separador1 from './Separador1';
import NavBar from '../NavBar/NavBar';

const PartOne = () => (
    <>
    <header>
        <Parallax
            blur={{ min: -5, max: 5 }}
            bgImage={hh1}
            bgImageAlt="Homehub-corporate-1"
            strength={-500}
        >
                <div className='hhCircleBox mt-4'>
                    <img className='hhCircle' src={hhCircle} alt='' />
                </div>

                <img className='hh-logo-white-400' src={hhLogoWhite} alt='Homehub Logo' />
                
                <h3 class='lead fs-3 fw-lighter text-white mt-5'>Living life a simpler way</h3>
            
            <div class='row mt-5'>
                <DownloadButtons />
            </div>

            <div class='row mt-5'>
                <BenefitCards />
            </div>

            <div style={{ height: '200px' }} />
            
        </Parallax>
    </header>

    <Separador1 />
    </>
);

export default PartOne;