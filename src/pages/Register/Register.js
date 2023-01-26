
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./register.css";
import {Link} from 'react-router-dom';
function Register (props){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [isRegistered, setIsRegistered] = useState(false);
    const handleSubmit = async e => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:3000/register", {
            username,
            password,
            email
          });
          setIsRegistered(true);
        } catch (err) {
          console.error(err);
        }
    };
    useEffect(() => {
        if (isRegistered) {
          props.history.push("/home");
        }
      }, [isRegistered, props.history]);
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            {message && <p>{message}</p>}
            <form className="registerForm" onSubmit={handleSubmit}>
                <label>Username</label>
                    <input className="registerInput" type="text" name= "username" placeholder="Enter your username..." value={username} onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                    <input className="registerInput" type="email" name= "email" placeholder="Enter your email..." value={email} onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                    <input className="registerInput" type="password" name= "password" placeholder="Enter your password..." value={password} onChange={e => setPassword(e.target.value)} />
                <button className="registerButton" type="submit">Register</button>
            </form>
            <Link to="/Login" className="btn btn-primary">Login</Link>
        </div>
    )
}
export default Register;