import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [showPopup, setShowPopup] = useState(false); // State for the pop-up

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        // Show the pop-up when form is successfully submitted
        setShowPopup(true);

        // Hide the pop-up after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input 
                    value={name} 
                    name="name" 
                    onChange={(e) => setName(e.target.value)} 
                    id="name" 
                    placeholder="Full Name" 
                />
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
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here.
            </button>

            {/* Pop-up that shows after successful registration */}
            {showPopup && <div className="popup">Registered Successful!</div>}
        </div>
    );
};
