import "react-toastify/dist/ReactToastify.css";
import { NavLink, Outlet } from "react-router-dom";

let activeStyle = {
  color: "white",
  backgroundColor: "#b99179 ",
  padding: "12px",
};
let deActiveStyle = {
  color: "white",
  backgroundColor: "grey",
  padding: "12px",
};

const StyleLink = ({ isActive }) => (isActive ? activeStyle : deActiveStyle);

function Login() {
  return (
    <div className="container mt-5 rounded">
      <div className="mt-5">
        <nav className="nav nav-justified">
          <li className="nav-item ">
            <NavLink to="SignIn" className="rounded" style={StyleLink}>
              Sign In
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="Register" className=" rounded" style={StyleLink}>
              Register
            </NavLink>
          </li>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
