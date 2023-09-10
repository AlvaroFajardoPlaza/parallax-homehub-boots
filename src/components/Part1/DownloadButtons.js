import React from 'react';

const DownloadButtons = () => {
  return (
    <>
        <div class='row justify-content-center mt-5'>
                <div class='col mt-5'>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn btn-primary mt-5'>Get Homehub for Android</button>
                </div>
                <div class='col mt-5'>
                    <button href='#' onClick={()=> new URL('https://www.alvarofajardo.com')} class='btn btn-light mt-5'>Get Homehub for iOS</button>
                </div>
        </div>
    </>
  )
};

export default DownloadButtons