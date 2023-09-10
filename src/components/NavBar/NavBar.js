import React from 'react';
import hhLogo from '../../assets/HH-whiteLogo-400-05.png';


const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#ffffff4D'}}>
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={hhLogo} alt='Homehub Logo' style={{height:'20px', paddingBottom:'5px', marginLeft:'1rem', marginRight:'2rem'}}/>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                {/* <li class="nav-item fw-light">
                <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li> */}

                <li class="nav-item dropdown fw-light">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{letterSpacing:'.1rem', color:'#ffffff'}}>
                    OUR PLANS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">PLAN #1</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #2</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #3</a></li>
                </ul>
                </li>

                <li class="nav-item fw-light">
                <a class="nav-link" aria-current="page" href="#" style={{letterSpacing:'.1rem', color:'#ffffff'}}>THE TEAM</a>
                </li>

                <li class="nav-item fw-light">
                <a class="nav-link" aria-current="page" href="#" style={{letterSpacing:'.1rem', color:'#ffffff'}}>ABOUT US</a>
                </li>
            </ul>

            <form class="d-flex gap-2">
                <button class="btn btn-outline-light text-uppercase fw-light" style={{letterSpacing:'.2rem', borderRadius:'1rem'}} >register</button>
                <button class="btn btn-outline-light text-uppercase fw-light" style={{letterSpacing:'.2rem', borderRadius:'1rem'}}>login</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar