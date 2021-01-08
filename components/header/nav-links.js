import React from "react";
import Link from "next/link";

const NavLinks = ({ extraClassName }) => {
  const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
    console.log({ e });
  };
  return (
    <ul className={`main-menu__list ${extraClassName}`}>
      <li>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/moda">
          <a>Moda</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/lifestyle">
          <a>Lifestyle</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/cultura">
          <a>Cultura</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Conoce Áditi</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contactános</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>
            <span>
              <i className="fa-shopping-bag" />
              Tienda
            </span>
          </a>
        </Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          {/* <input
            type="email"
            name="EMAIL"
            id="mc-email"
            className=""
            placeholder="Email address"
         />*/}
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
