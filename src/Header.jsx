import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'; 

const Header = () => {
  return (
    <div>
      <div className="Nav">
        <div className="logo">
          <h1>Fashion</h1>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Your Product..."  />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faUser} /> 
          <FontAwesomeIcon icon={faHeart} />
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
