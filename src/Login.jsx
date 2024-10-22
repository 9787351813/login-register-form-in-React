import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for showing pop-up

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        // Show the pop-up after login
        setShowPopup(true);

        // Hide the pop-up after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    name="email" 
                />
                <label htmlFor="password">Password</label>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="********" 
                    id="password" 
                    name="password" 
                />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Register here.
            </button>

            {/* Pop-up to show login success */}
            {showPopup && <div className="popup">Login Successful!</div>}
        </div>
    )
}
