import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="my-4 border-2 bg-slate-400 text-2xl font-medium text-center flex gap-4 justify-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/comments">Comments</NavLink>
        </div>
    );
};

export default Header;