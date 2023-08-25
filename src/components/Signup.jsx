import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 

  const onSubmit = async (e) => {
    e.preventDefault();

    const playMusic = () => {
        const audio = new Audio("/path/to/your/music.mp3");
        audio.play();
      };

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
      playMusic();
    } catch (error) {
      setError("Ingrese datos validos por favor");
    }
  };

  return (
      <div className="login-wrapper">
        <h1 className="title-login">Por favor crear una cuenta</h1>
        <div className="login-box">
        <p>Registrarse</p>
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
          <button className="btn-giro" type="submit" onClick={onSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign up
          </button>
        </form>
          {error && <p className="error">{error}</p>} 
          <p>Ya tenes cuenta? <NavLink className="p-regis" to="/login">Inicia sesion</NavLink></p>
      </div>
    </div>
  );
};

export default Signup;