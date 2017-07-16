import React from 'react';

export const CategoryList = () => {
  return (
    <nav id="primary_nav_wrap">
      <ul>
        <li className="current-menu-item"><a href="#">
            Agriculture & Food
          </a>
          <div>

            Sub Menu 1
            Sub Menu 2
            Sub Menu 3
            Sub Menu 5
          </div>
        </li>
        <li><a href="#">
            Apparel & Accessories</a>
          <div>
            Sub Menu 1
            Sub Menu 2
            Sub Menu 3
          </div>
        </li>
        <li><a href="#">Arts & Crafts</a>
          <div>
            Category 1
            Category 2
            Category 3
            Category 4
            Category 5
            Sub Menu 3
            Sub Menu 4
            Sub Menu 5
          </div>
        </li>
        <li><a href="#">Auto, Motorcycle Parts & Accessories</a></li>
        <li><a href="#">Bags, Cases & Boxes</a></li>
        <li><a href="#">Chemicals</a></li>
        <li><a href="#">Computer Products</a></li>
      </ul>
    </nav>
  )
};

