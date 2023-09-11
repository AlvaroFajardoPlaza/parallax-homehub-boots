import React from 'react';
import './styles.css';
import hhLogo from '../../assets/hhlogo22px-12.png';



const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg text-white">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={hhLogo} alt='Homehub Logo' />
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                <li class="nav-item dropdown fw-light">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    OUR PLANS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">PLAN #1</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #2</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #3</a></li>
                </ul>
                </li>

                <li class="nav-item fw-light">
                <a class="nav-link text-white" aria-current="page" href="#">THE TEAM</a>
                </li>

                <li class="nav-item fw-light">
                <a class="nav-link text-white" aria-current="page" href="#">ABOUT US</a>
                </li>
            </ul>

            <form class="d-flex gap-2">
                <button class="btn btn-outline-light btn-sm text-uppercase fw-light text-white rounded-pill" >register</button>
                <button class="btn btn-outline-light btn-sm text-uppercase fw-light text-white rounded-pill" >login</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar