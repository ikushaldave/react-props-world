import { NavLink } from "react-router-dom";
import UserInfo from "./UserInfo";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact>
            <i className="lni lni-home"></i>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" activeClassName="active">
            <i className="lni lni-text-format"></i>
            <span>Articles</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" activeClassName="active">
            <i className="lni lni-users"></i>
            <span>People</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            <i className="lni lni-phone"></i>
            <span>Contact</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/help" activeClassName="active">
            <i className="lni lni-support"></i>
            <span>Help & Support</span>
          </NavLink>
        </li>
      </ul>

      {props.isLogin && (
        <div className="bg">
          <UserInfo data={props.userInfo} />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
