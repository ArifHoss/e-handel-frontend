import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    const users = [
        {username: 'arif', password: '1234'},
        {username: 'miwa', password: '1234'},
    ];

    const login = (username, password) => {
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            setUser(user);
            setLoggedIn(true);
            setError(null);
        } else {
            setError('INVALID_USER_OR_PASSWORD');
        }
    };

    const value = {
        error,
        setError,
        user,
        setUser,
        loggedIn,
        setLoggedIn,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
