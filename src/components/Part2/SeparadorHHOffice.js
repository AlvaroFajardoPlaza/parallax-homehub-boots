import React from 'react';
import './styles.css';
import hhOfficeLogo from '../../assets/hhofficeLogoBlack.png';
import hhOfficeCorporate from '../../assets/hhOfficeLogo.png';


const Separador2 = () => {
  return (
    <div class='officeContainer'>
    <div class='container hhOfficeSection'>
      <div class='row'>
        <div class='col col-lg-6 col-sm-11'>
          <p class='lead fs-6 fw-lighter text-start'>Access the control of the different devices in your work areas thanks to our app designed fully for work environments: <b>Homehub Office</b>.
          </p>
  
          <p class='lead fs-6 fw-lighter text-start mt-5'>Hundreds of customers and businesses already <b>rely on us to make their daily lives easier and infinitely enjoyable.</b>
          </p>

          <div class='row d-flex justify-content-lg-start'>
            <div class='col'>
              <a href='#'><img class="rounded float-start mt-5" src={hhOfficeLogo} alt='Homehub Office' style={{height:'50px'}} /></a>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
    </div>
  )
};

export default Separador2