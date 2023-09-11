import React from 'react';
import './styles.css';

const BenefitCards = () => {
  return (
    <div class='benefitCards'>
        <div class='row mt-5 gx-2 gy-2'>
            <div class="col-sm-6 col-lg-3">
                <div class="card text-white p-2" style={{backgroundColor: '#ffffff40'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3">energy savings</h5>
                    <p class="card-text fw-light">Discover all our programming settings for your devices.</p>
                    <button href="#" class="btn btn-outline-light rounded-pill">Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card text-white p-2" style={{backgroundColor: '#ffffff40'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" >intuitive controls</h5>
                    <p class="card-text fw-light">You will hold all your devices in the palm of your hand.</p>
                    <button href="#" class="btn btn-outline-light rounded-pill" >Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card text-white p-2" style={{backgroundColor: '#ffffff40'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" >advanced security</h5>
                    <p class="card-text fw-light">Homehub takes care of you and your home at every moment.</p>
                    <button href="#" class="btn btn-outline-light rounded-pill" >Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card text-white p-2" style={{backgroundColor: '#ffffff40'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3">intelligent devices</h5>
                    <p class="card-text fw-light">Learn how to connect your devices with our app now.</p>
                    <button href="#" class="btn btn-outline-light rounded-pill" >Learn More</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BenefitCards