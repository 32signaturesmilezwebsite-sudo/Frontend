import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, Calendar, Users, Activity, CheckCircle, Clock, Phone, Mail } from 'lucide-react';
import './AdminStyles.css';

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const getAdminInfo = () => {
    const info = localStorage.getItem('adminInfo');
    return info ? JSON.parse(info) : null;
  };

  const logout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin');
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      const adminInfo = getAdminInfo();
      if (!adminInfo || !adminInfo.token) {
        navigate('/admin');
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
          headers: {
            Authorization: `Bearer ${adminInfo.token}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setAppointments(data);
        } else {
          setError('Failed to fetch appointments. Session might be expired.');
          if (res.status === 401) logout();
        }
      } catch (err) {
        setError('Cannot connect to server');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [navigate]);

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'Pending' ? 'Approved' : 'Pending';
    const adminInfo = getAdminInfo();
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        const updatedApt = await res.json();
        setAppointments(appointments.map(a => a._id === id ? updatedApt : a));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel - Appointments</span>
        </div>
        <div style={{display: 'flex', gap: '15px', alignItems: 'center'}}>
          <Link to="/admin/gallery" className="btn-dark logout-btn" style={{padding: '8px 15px', fontSize: '0.9rem', border: '1px solid #333'}}>
             Gallery
          </Link>
          <Link to="/admin/blogs" className="btn-dark logout-btn" style={{padding: '8px 15px', fontSize: '0.9rem', border: '1px solid #333'}}>
             Blogs
          </Link>
          <button onClick={logout} className="logout-btn">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      <div className="dashboard-content container">
        <div className="stats-row fade-in">
          <div className="stat-card">
            <div className="stat-icon"><Calendar color="var(--primary-gold)" size={24} /></div>
            <div className="stat-info">
              <h3>{appointments.length}</h3>
              <p>Total Bookings</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Users color="#4285F4" size={24} /></div>
            <div className="stat-info">
              <h3>{appointments.filter(a => new Date(a.createdAt).toDateString() === new Date().toDateString()).length}</h3>
              <p>New Today</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><Activity color="#fbbc05" size={24} /></div>
            <div className="stat-info">
              <h3>Active</h3>
              <p>System Status</p>
            </div>
          </div>
        </div>

        <div className="table-container fade-in" style={{animationDelay: '0.1s'}}>
          <div className="table-header">
            <h3>Recent Booking Requests</h3>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          {loading ? (
            <div className="loading-state">Loading appointments...</div>
          ) : appointments.length === 0 ? (
            <div className="empty-state">No appointments found.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Patient Name</th>
                  <th>Contact Info</th>
                  <th>Message / Request</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((apt) => (
                  <tr key={apt._id}>
                    <td>
                      {new Date(apt.createdAt).toLocaleDateString()}
                      <br/>
                      <span className="sub-text">{new Date(apt.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </td>
                    <td><strong>{apt.firstName} {apt.lastName}</strong></td>
                    <td>
                      <a href={`tel:${apt.phone}`} className="contact-link phone-link">
                        <Phone size={13} style={{ marginRight: '6px' }} />
                        {apt.phone}
                      </a>
                      <br/>
                      <a href={`mailto:${apt.email}`} className="sub-text contact-link email-link">
                        <Mail size={12} style={{ marginRight: '6px' }} />
                        {apt.email}
                      </a>
                    </td>
                    <td className="msg-cell">{apt.message || <span className="sub-text">No message provided...</span>}</td>
                    <td>
                      <button 
                        onClick={() => toggleStatus(apt._id, apt.status || 'Pending')}
                        className={`status-badge ${apt.status && apt.status.toLowerCase() === 'approved' ? 'approved' : 'pending'}`}
                        title="Click to toggle status"
                      >
                        {apt.status && apt.status.toLowerCase() === 'approved' ? <CheckCircle size={14}/> : <Clock size={14}/>}
                        {apt.status || 'Pending'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
