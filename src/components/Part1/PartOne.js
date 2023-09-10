import { Parallax } from 'react-parallax';
import './styles.css';
import NavBar from '../NavBar/NavBar';

import hh1 from '../../assets/hh1.jpg';
import hhLogoWhite from '../../assets/HH-whiteLogo-400-05.png';
import hhCircle from '../../assets/hcircle-08-08.png';
import DownloadButtons from './DownloadButtons';
import BenefitCards from './BenefitCards';
import Separador1 from './Separador1';

const PartOne = () => {

    return(
        <>
        <header>
            <Parallax
                blur={{ min: -5, max: 5 }}
                bgImage={hh1}
                bgImageAlt="Homehub-corporate-1"
                strength={-500}
            >
                <NavBar />
                    <div className='hhCircleBox mt-4'>
                        <img className='hhCircle' src={hhCircle} alt='' />
                    </div>

                    <img className='hh-logo-white-400' src={hhLogoWhite} alt='Homehub Logo' />
                    
                    <h3 class='lead fs-5 fw-lighter text-white mt-5 font-monospace' style={{letterSpacing:'.25rem'}} >Living life a simpler way</h3>
                
                <div class='container' style={{marginTop:'10rem'}}>
                    <DownloadButtons />
                </div>

                <div class='container'>
                    <div class='row mt-5'>
                        <BenefitCards />
                    </div>
                </div>

                <div style={{ height: '200px' }} />
                
            </Parallax>
        </header>

        <Separador1 />

        </>
    )
};

export default PartOne;