import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "10px" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/plates">Plates</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>

        </nav>
    )
}