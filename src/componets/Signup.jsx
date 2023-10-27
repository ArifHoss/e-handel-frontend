// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './Signup.module.css';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [streetName, setStreetName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    }
    return (
        <div className={styles.signupContainer}>
            <form onSubmit={handleSubmit}>
                <h2>Please signup here!</h2>
                <div className={styles.inputGroup}>
                    <label htmlFor="firstName">FirstName *</label>
                    <input type="text" id="firstName" placeholder="John" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="lastName">LastName *</label>
                    <input type="text" id="lastName" placeholder="Doe" value={lastName}
                           onChange={(e) => setLastName(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="email">Email *</label>
                <input type="text" id="email" placeholder="Email.." value={email}
                       onChange={(e) => setEmail(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="password">Password *</label>
                <input type="text" id="password" placeholder="password" value={password}
                       onChange={(e) => setPassword(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="streetName">Street *</label>
                <input type="text" id="streetName" placeholder="street" value={streetName}
                       onChange={(e) => setStreetName(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="postcode">Postcode *</label>
                <input type="text" id="postcode" placeholder="postcode" value={postcode}
                       onChange={(e) => setPostcode(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="country">Country *</label>
                <input type="text" id="country" placeholder="country" value={country}
                       onChange={(e) => setCountry(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone *</label>
                <input type="text" id="phone" placeholder="phone" value={phone}
                       onChange={(e) => setPhone(e.target.value)} className={styles.inputField}/>
                </div>

                <div className={styles.inputGroup}>
                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" placeholder="gender" value={gender}
                       onChange={(e) => setGender(e.target.value)} className={styles.inputField}/>
                </div>

                <button type="submit" className={styles.signupButton}>Sign me up</button>
            </form>
        </div>
    );
}
export default Signup;
