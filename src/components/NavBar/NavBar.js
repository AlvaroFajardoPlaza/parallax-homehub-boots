import React from 'react';
import hhLogoWhite from '../../assets/HH-whiteLogo-400-05.png';


const NavBar = () => {
  return (
    <nav class='navbar navbar-expand-md navbar-dark bg-dark'>
        <div class='container bg-dark'>
            {/* LOGO DE MARCA DENTRO DE UNA ETIQUETA "A" */}
            <a href='#' class='navbar-brand'>
                <img src={hhLogoWhite} alt='Homehub Logo' style={{height:'18px'}} />
            </a>
            <button type='button' 
            class='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#nav'
            aria-controls='#nav'
            aria-label='Expand Navigation'>
                <span class='navbar-toggler-icon'></span>
            </button>

            {/* AL METER LA LISTA DENTRO DE UN DIV CON LA CLASE COLLAPSE, PODEMOS CREAR UN MENU RESPONSIVE EMPLEANDO BOOTSTRAP. NECESITAREMOS UN BOTÓN QUE ACTÚE COMO TOGGLER */}
            <div class='collapse navbar-collapse' id='nav'>
                <ul class='navbar-nav'>
                    <li class='nav-item'>
                        <a href='#' class='nav-link active' aria-current='page'>HOME</a>
                    </li>
                    <li class='nav-item'>
                        <a href='#' class='nav-link'>THE APP</a>
                    </li>
                    <li class='nav-item'>
                        <a href='#' class='nav-link'>TEAM</a>
                    </li>
                    <li class='nav-item'>
                        <a href='#' class='nav-link'>BLOG</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  )
}

export default NavBar