import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/heroLogin">Hero Login</Link>

            
        </div>
    );
};

export default Header;