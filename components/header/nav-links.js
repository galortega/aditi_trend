import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { categories } from "../../utils/constants";
import _ from "lodash";

const NavLinks = ({ extraClassName }) => {
  const router = useRouter();
  const { route } = router;

  /*const handleDropdownStatus = (e) => {
    let clickedItem = e.currentTarget.parentNode;
    clickedItem.querySelector(".dropdown-list").classList.toggle("show");
  };*/
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
          <a>Tienda</a>
        </Link>
      </li>
      <li className="search-btn search-toggler">
        <span>
          <i className="azino-icon-magnifying-glass"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavLinks;
