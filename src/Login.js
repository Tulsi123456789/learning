import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IE from './IE.png';

function LoginForm() {
  const [fadeIn, setFadeIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!email.trim() || !password.trim()) {
      setError('Email and password are required!');
      return;
    }

    // Clear error and navigate
    setError('');
    navigate('/Home');
  };

  return (
    <div className="login-section">
      <div className={`login-box p-4 bg-white rounded shadow text-center animate__animated ${fadeIn ? 'animate__fadeInDown' : ''}`}>
        <img src={IE} alt="Logo" className="login-logo" />
        <h4 className="fw-bold logo-title">Login</h4>
        <p className="login-subtitle">Please fill your detail to access your account.</p>

        {error && <div className="alert alert-danger py-1">{error}</div>}

        <form onSubmit={handleLogin}>
          <div className="form-group text-start">
            <label htmlFor="email" className="fw-semibold">Email</label>
            <input
              type="email"
              id="email"
              className="form-control border-0 border-bottom"
              placeholder="Enter your email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="form-group text-start mb-3">
            <label htmlFor="password" className="fw-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="form-control border-0 border-bottom"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-end forget mb-3">
            <a href="/" className="forget small">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button btn-primary w-100 rounded-pill shadow-sm">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
