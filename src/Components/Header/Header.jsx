import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
    </div>
  )
}
