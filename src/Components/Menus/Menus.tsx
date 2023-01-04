import { NavLink } from "react-router-dom";
import { menuItemProps } from "../../types";
import "./menus.scss";
const MenuItem = ({
  isActive = false,
  icon,
  iconAlt,
  title,
  path = "/blank",
}: menuItemProps) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive: _isActive }) =>
        `sidebar__list d-block ${isActive || _isActive ? "active" : ""}`
      }
    >
      <div className="sidebar__nav__link">
        <span className="sidebar__icons">
          <img className="imgs_holder" src={icon} alt={iconAlt} />
        </span>
        <span className="sidebar__label">{title}</span>
      </div>
    </NavLink>
  );
};

export default MenuItem;
