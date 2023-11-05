import {useContext, useState} from "react";
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext.jsx";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, error} = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password);
        navigate('/');
        console.log('User '+{username}+' logged in successfully')
    };
    const handleSignupButtonClick = () => {
        navigate('/signup');
    }


    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2>Login</h2>

                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.inputGroup}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="John Doe"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.inputField}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.inputField}
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
                <h2>Or</h2>
                <button type="button" onClick={handleSignupButtonClick} className={styles.signupButton}>SignUp</button>
            </form>
        </div>
    );
};
export default Login;