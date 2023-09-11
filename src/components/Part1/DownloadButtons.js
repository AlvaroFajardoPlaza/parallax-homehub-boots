import React from 'react';

const DownloadButtons = () => {
  return (
    <>
      <div class='d-grid justify-content-center mt-5 mb-5'>
        <div class='row d-flex justify-content-center mt-5 g-2'>
                <div class='col col-lg-5 mt-5'>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn fw-light btn-primary mt-5 rounded-pill'>Homehub for Android</button>
                </div>
                <div class='col col-lg-5 mt-5'>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn fw-light btn-light mt-5 rounded-pill'>Homehub for iOS</button>
                </div>
        </div>
      </div>
    </>
  )
};

export default DownloadButtons