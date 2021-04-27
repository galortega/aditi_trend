import React from "react";
import Link from "next/link";
import pageHeaderBg from "../assets/images/main-slider/banner-1.png";

const PageHeader = ({ title, crumbTitle, children }) => {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${pageHeaderBg})` }}
      ></div>

      <div className="container">
        <h2>{title}</h2>
        <ul className="thm-breadcrumb list-unstyled ">
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>-</li>
          <li>
            <span>{crumbTitle}</span>
          </li>
          {children && (
            <>
              <li>-</li>
              <li>{children}</li>
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
