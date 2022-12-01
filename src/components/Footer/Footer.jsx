import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            necessitatibus ea possimus non tempora nulla totam facere odit
            debitis voluptate, laboriosam id, autem magnam maiores, ut pariatur
            voluptatum recusandae veritatis!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            necessitatibus ea possimus non tempora nulla totam facere odit
            debitis voluptate, laboriosam id, autem magnam maiores, ut pariatur
            voluptatum recusandae veritatis!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Sello-Hub</span>
          <span className="copyright">
            CopyRight &:2022.All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
