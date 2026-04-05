import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Reset any global body backgrounds when entering login specifically
  useEffect(() => {
    document.title = "Admin Login | 32 Signature Smilez";
    const prevBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#1a1a1a';
    
    // Check if user is already logged in
    const adminInfo = localStorage.getItem('adminInfo');
    if (adminInfo) {
      navigate('/admin/dashboard');
    }

    return () => {
      document.body.style.backgroundColor = prevBg;
    };
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('adminInfo', JSON.stringify(data));
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('Cannot connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-bg"></div>
      <div className="admin-login-overlay"></div>
      
      <div className="admin-login-content">
        <div className="admin-login-card">
          
          <div className="admin-login-header">
            <Link to="/">
              <img src="/logo.png" alt="32 Signature Smilez Logo" className="admin-login-logo" />
            </Link>
            <h2>Admin Portal</h2>
            <p>Authorized access only</p>
          </div>

          {error && <div className="admin-error-msg">{error}</div>}

          <form onSubmit={handleLogin}>
            <div className="login-form-group">
              <label>Username or Email</label>
              <input 
                type="text" 
                className="login-form-input" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Enter admin username"
                required 
              />
            </div>
            
            <div className="login-form-group">
              <label>Password</label>
              <input 
                type="password" 
                className="login-form-input" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter password"
                required 
              />
            </div>

            <button type="submit" className="admin-btn-submit" disabled={loading}>
              {loading ? 'Authenticating...' : 'Secure Login'}
            </button>
          </form>
          
          <div className="admin-login-footer">
            <Link to="/" className="admin-back-link">← Return to Website</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
