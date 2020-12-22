import React, { useEffect } from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";

import flag1 from "../../assets/images/resources/flag-1-1.jpg";
import logoDark from "../../assets/images/logo-dark.png";

const HeaderTwo = () => {
  useEffect(() => {
    mobileMenu();
    return () => {
      mobileMenu();
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".mobile-nav__toggler")
      .addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.toggle("expanded");
        e.preventDefault();
      });
    // search toggler
    let searchCloser = document.querySelectorAll(".search-toggler");
    searchCloser.forEach((searchCloserBtn) => {
      searchCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".search-popup").classList.toggle("active");
        e.preventDefault();
      });
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document
          .querySelector(".mobile-nav__wrapper")
          .classList.remove("expanded");
        e.preventDefault();
      });
    });
  };
  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p>Welcome to non profit charity platform</p>
          <div className="main-header__social">
            <a href="#" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link href="/">
              <a aria-label="logo image">
                <img src={logoDark} width="200" alt="" />
              </a>
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:adititrend@gmail.com">adititrend@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Teléfono</h3>
                <p>
                  <a href="tel:666-888-0000">(+593) 096 369 4764</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="fab fa-instagram"></i>
              <div className="header-info__box-content">
                <h3>Instagram</h3>
                <a href="https://www.instagram.com/adititrend/" aria-label="instagram">
                  <p>@adititrend</p>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius col-12" />
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
