import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user.email);
        navigate("/");
    })
    .catch((error) => {
        const errorCode = setError("Email or password is incorrect");
        const errorMessage = error.message;
        console.log('Login error:', errorMessage);
    });
};

return (
    <div className="login-wrapper">
        <h1 className="title-login">Por favor iniciar sesion</h1>
        <div className="login-box">
        <p>Login</p>
            <form>
            <div className="user-box">
                <input
                required
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
            </div>
            <div className="user-box">
                <input
                required
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
            </div>
            <button className="btn-giro" onClick={onLogin}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Ingresar
            </button>
            </form>
            {error && <p className="error">{error}</p>}
            <p className="p-cuenta">No tenes cuenta? <NavLink className="p-regis" to="/signup">Registrate!</NavLink></p>
        </div>
    </div>
);
};

export default Login;