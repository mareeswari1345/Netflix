import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Dummy registration
    navigate('/');
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleRegister}>
        <h2 style={{color : 'white'}}>Register</h2>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
        <p style={{color : 'white'}}>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;

