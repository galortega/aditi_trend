import React from "react";
import Link from "next/link";
import { categories } from "../../utils/constants";
import _ from "lodash";

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
      {_.map(categories, (category, index) => (
        <li key={index}>
          <Link href="/category/[category]" as={`/category/${category}`}>
            <a>{_.startCase(category)}</a>
          </Link>
        </li>
      ))}

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
        <Link href="/shop">
          <a>
            <>
              <a>Tienda</a>
              <i className="fa-shopping-bag ml-2"></i>
            </>
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
