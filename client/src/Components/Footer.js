import React from 'react';


const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">

<div className="footer-left">
    <h3>HELPDESK</h3>

    <p className="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">About</a>
        |
        <a href="#">Contact</a>
        |
        <a href="#">Blog</a>
    </p>

    <p className="footer-company-name">Copyright © 2024 <strong>HELPDESK</strong> All rights reserved</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Ghaziabad</span>
            Delhi</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+216 74**9**258</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:sagar00001.co@gmail.com">xyz@gmail.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the plateform</span>
        <strong>HELPDESK</strong> est le service de support et d'assistance d'une entreprise.
        
        destiné à résoudre les problèmes des usagers d'un service ou d'un produit.
       
    </p>
    <div className="footer-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
    </div>
</div>
</footer>
        </div>
    );
};

export default Footer;