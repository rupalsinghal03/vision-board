import React from 'react';
import logo1 from '../assets/logo1.png';
import '../assets/style.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-content d-flex flex-wrap align-items-center justify-content-between">
                        <div className="footer-brand d-flex align-items-center">
                            <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
                                <img
                                    src={logo1} alt="Logo" width="50" height="50" className="d-inline-block align-text-top"
                                /> Vision Board
                            </a>
                            <p className="m-0">"Dream it. Write it. Crush it. Repeat."</p>
                        </div>
                        <div className="social_icons d-flex">
                            <i className="bi bi-github"></i>
                            <i className="bi bi-linkedin"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-medium"></i>
                            <i className="bi bi-substack"></i>
                        </div>
                        <div className="footer-button d-flex align-items-center">
                            <button className="p-2 ps-3 pe-3">
                                Create your Vision Card <i className="bi bi-patch-plus ps-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="foo-motivation text-center mt-3">
                    ✨ Remember: If your dreams don't scare you, they're not big enough. 🚀
                </div>
            </div>
        </footer>
    );
}

export default Footer;
