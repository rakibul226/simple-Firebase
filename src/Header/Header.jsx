import {NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <ul className="flex gap-7 justify-center text-2xl bg-slate-600  py-5">
                <li>
                    <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-white " : ""
                            }
                            >
                            Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-white " : ""
                            }
                            >
                            Login
                    </NavLink>
                </li>
            
                <li>
                    <NavLink
                            to="/heroLogin"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-white " : ""
                            }
                            >
                            Registration
                    </NavLink>
                </li>

                <li>
                    <NavLink
                            to="/loginWEP"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? " text-white " : ""
                            }
                            >
                            Email Login
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;