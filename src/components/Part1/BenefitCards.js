import React from 'react';
import './styles.css';

const BenefitCards = () => {
  return (
    <div class='container'>
        <div class='row mt-3 gx-2 gy-2'>
            <div class="col-sm-6 col-lg-3">
                <div class="card" style={{background:'#ffffff40', color:'#ffffff', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B50'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" style={{letterSpacing:'0.3rem'}}>energy savings</h5>
                    <p class="card-text fw-light">Discover all our programming settings for your devices.</p>
                    <button href="#" class="btn btn-outline-light">Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card" style={{background:'#ffffff40', color:'#ffffff', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B50'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" style={{letterSpacing:'0.3rem'}}>intuitive controls</h5>
                    <p class="card-text fw-light">You will hold all your devices in the palm of your hand.</p>
                    <button href="#" class="btn btn-outline-light">Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card" style={{background:'#ffffff40', color:'#ffffff', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B50'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" style={{letterSpacing:'0.3rem'}}>advanced security</h5>
                    <p class="card-text fw-light">Homehub takes care of you and your home at every moment.</p>
                    <button href="#" class="btn btn-outline-light">Learn More</button>
                </div>
                </div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="card" style={{background:'#ffffff40', color:'#ffffff', border:'1px solid #ffffff50', boxShadow:'0px 3px 20px #10506B50'}}>
                <div class="card-body">
                    <h5 class="card-title text-uppercase fw-lighter mt-2 mb-3" style={{letterSpacing:'0.3rem'}}>intelligent devices</h5>
                    <p class="card-text fw-light">Learn how to connect your devices with our app now.</p>
                    <button href="#" class="btn btn-outline-light">Learn More</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BenefitCards