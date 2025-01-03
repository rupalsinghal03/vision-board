import React from 'react'
import logo1 from '../assets/logo1.png'
import '../assets/style.css'
function Header() {
    return (
        <div>
            <nav className="navbar text-white">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
                        <img src={logo1} alt="" width="50" height="50" className="d-inline-block align-text-top" />
                        Vision Board
                    </a>
                    <div class="text-dark nav-list fw-bold">
                        <a class="" href="#">Trending</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header