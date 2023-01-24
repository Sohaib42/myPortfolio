import React, { useState } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Hash the password before sending it to the server
        const hashedPassword = await bcrypt.hash(password, 10);

        // Send a request to the server to check if the credentials are valid
        // Replace with actual request
        const response = await fetch('api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password: hashedPassword }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();

        if (data.token) {
            // Save the token in localStorage
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="Login">
            {isLoggedIn ? (
                <div>Welcome, you are logged in!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit">Log in</button>
                </form>
            )}
        </div>
    );
}
export default Login;