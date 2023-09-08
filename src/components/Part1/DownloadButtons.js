import React from 'react';

const DownloadButtons = () => {
  return (
        <div class='row mt-5'>
                <div class='d-flex justify-content-center mt-5 gx-2'>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn btn-outline-light mt-5'>Get Homehub for Android</button>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn btn-primary mt-5'>Get Homehub for iOS</button>
                </div>
        </div>
  )
};

export default DownloadButtons