import React from 'react'
import './Navbar.css'
function Navbar() {
  return (


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-white">
        <div className="pl-5">
          <a class="navbar-brand" href="#">LogoCorporativo</a>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contactanos</a>
            </li>
            <li class="nav-item d-md-none d-sm-block">
              <a class="nav-link" href="#">Ingresar</a>
            </li>
          </ul>

        </div>
        <div className="divUser d-none d-md-block">
            <a class="nav-link" href="#">Ingresar</a>
          </div>
      </nav>

  )
}
export default Navbar;