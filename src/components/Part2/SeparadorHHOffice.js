import React from 'react';
import './styles.css';
import hhOfficeLogo from '../../assets/hhofficeLogoBlack.png';
import hhOfficeCorporate from '../../assets/hhOfficeLogo.png';


const Separador2 = () => {
  return (
    <div class='container hhOffice'>
      <div class='row' style={{paddingTop:'10rem', paddingBottom:'10rem'}}>
        <div class='col col-lg-6 col-sm-11'>
          <p class='lead fs-6 fw-lighter text-start' style={{color:'#353535', letterSpacing:'.2rem', lineHeight:'3rem'}}>Access the control of the different devices in your work areas thanks to our app designed fully for work environments: <b>Homehub Office</b>.
          </p>
  
          <p class='lead fs-6 fw-lighter text-start mt-5' style={{color:'#353535', letterSpacing:'.2rem', lineHeight:'3rem'}}>Hundreds of customers and businesses already <b>rely on us to make their daily lives easier and infinitely enjoyable.</b>
          </p>

          <div class='row d-flex justify-content-lg-start'>
            <div class='col'>
              <a href='#'><img class="rounded float-start mt-5" src={hhOfficeLogo} alt='Homehub Office' style={{height:'50px'}} /></a>
            </div>
            {/* <div class='col'>
              <button class='btn btn-dark mt-5' style={{borderRadius:'3rem'}}>Discover</button>
            </div> */}
          </div>
          
        </div>
        
      </div>
    </div>
  )
};

export default Separador2