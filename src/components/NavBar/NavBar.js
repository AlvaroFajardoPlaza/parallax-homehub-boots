import React from 'react';
import './styles.css';
import hhLogo from '../../assets/hhlogo22px-12.png';



const NavBar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg text-white">
        <div class="container-fluid">
            <div class='row'>
            <div class='col col-lg-5 col-sm-5'>
                <a class="navbar-brand" href="#">
                    <img src={hhLogo} alt='Homehub Logo' class="img-fluid" />
                </a>
            </div>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                <li class="nav-item dropdown fw-light me-2">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    OUR PLANS
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">PLAN #1</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #2</a></li>
                    <li><a class="dropdown-item" href="#">PLAN #3</a></li>
                </ul>
                </li>

                <li class="nav-item fw-light me-2">
                <a class="nav-link text-white" aria-current="page" href="#">OUR MISSION</a>
                </li>

                <li class="nav-item fw-light me-2">
                <a class="nav-link text-white" aria-current="page" href="#">THE TEAM</a>
                </li>

                <li class="nav-item fw-light me-2">
                <a class="nav-link text-white" aria-current="page" href="#">ABOUT US</a>
                </li>
            </ul>

            <form class="d-flex gap-2">
                <button class="btn btn-outline-light btn-sm fw-light fs-6 rounded-pill text-uppercase ps-3 pe-3" >register</button>
                <button class="btn btn-outline-light btn-sm fw-light fs-6 rounded-pill text-uppercase ps-3 pe-3" >login</button>
            </form>
            </div>
        </div>
    </nav>
    </>
  )
}

export default NavBar