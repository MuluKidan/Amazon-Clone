import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AmazonLogo from ".././White amazon-logo.webp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{basket, user}, dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if (user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
      {/* the logo */}
      <Link to="/">
        <img className="header__logo" src={AmazonLogo} />
      </Link>
      {/* the search input bar and the search icon */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* the four options */}
      <div className="header__nav">
        <Link to= {!user && "./Login"}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">Hello {!user? 'Guest': user.email}</span>
          <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign In'}</span>
        </div>
        </Link>
<Link to ={"/Orders"}>
        <div className="header__option">
          <span className="header__optionLineOne">Returning</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
<Link to = "/checkout">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
