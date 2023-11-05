import { useContext } from "react";
import { AuthContext } from "./AuthContext.jsx";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { setLoggedIn, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        setUser('');
        localStorage.removeItem('user');
        navigate("/");
    };

    return (
        <a href="/" onClick={(e) => {
            e.preventDefault();
            handleLogout();
        }}>Logout</a>
    );
};

export default Logout;
