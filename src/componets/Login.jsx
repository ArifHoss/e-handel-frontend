// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import styles from './Login.module.css';
import {useNavigate} from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const users = [
        {username: 'arif', password: 'zoro123'},
        {username: 'miwa', password: 'zoro123'},
    ];

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            console.log('Login credentials', {username, password});
            navigate('/');
        } else {
            setErrorMessage('INVALID_USER_OR_PASSWORD!');
        }
    };
    const handleSignupButtonClick = () => {
        navigate('/signup');
    }
    


    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2>Login</h2>

                {errorMessage && <div className={styles.error}>{errorMessage}</div>}

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