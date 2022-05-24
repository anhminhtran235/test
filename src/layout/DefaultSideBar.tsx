import { NavLink } from "react-router-dom";
import { ReactComponent as Banner } from '../images/banner.svg';

export const DefaultSideBar = () => {
  return (
    <div className="default-sidebar">
      <div className="logo">
        <Banner width="calc(25vw - 32px)" height="100%" />
      </div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/interviews">Interviews</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div className="sidebar-footer">
        <a href="https://www.instagram.com/worldpeacecollective/?utm_medium=copy_link" target="_blank">Socials</a>
      </div>
    </div>
  )
}

export default DefaultSideBar;
