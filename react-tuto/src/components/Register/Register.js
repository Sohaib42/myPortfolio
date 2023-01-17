import './Register.css';
import axios from 'axios';
import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Valider les données et envoyer les informations au serveur
        if (password !== confirmPassword) {
            // Afficher une erreur si les mots de passe ne correspondent pas
            return;
        }
        try {
            const res = axios.post('/register', {
                email: email,
                phone: phone,
                password: password
            });
            // Afficher un message de succès ou rediriger l'utilisateur vers une autre page
        } catch (err) {
            // Afficher une erreur si la requête échoue
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Adresse e-mail :
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Numéro de téléphone :
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <br />
            <label>
                Mot de passe :
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <label>
                Confirmation de mot de passe :
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </label>
            <br />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default Register;