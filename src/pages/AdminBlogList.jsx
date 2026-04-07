import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, Plus, Trash2, FileText, Calendar, Eye, Edit2 } from 'lucide-react';
import './AdminGalleryNew.css';

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);
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

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
      if (res.ok) {
        setBlogs(await res.json());
      } else {
        setError('Failed to fetch blogs');
      }
    } catch {
      setError('Cannot connect to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const adminInfo = getAdminInfo();
    if (!adminInfo || !adminInfo.token) { navigate('/admin'); return; }
    fetchBlogs();
  }, [navigate]);

  const deleteBlog = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog post permanently?')) return;
    const adminInfo = getAdminInfo();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`, {
        method: 'DELETE',
        headers: { Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '' }
      });
      if (res.ok) {
        setBlogs(blogs.filter(b => b._id !== id));
      } else {
        const data = await res.json().catch(() => ({}));
        alert('Failed to delete: ' + (data.message || 'Unknown error'));
      }
    } catch {
      alert('Error connecting to server.');
    }
  };

  return (
    <div className="ag-layout">
      {/* HEADER */}
      <header className="ag-header">
        <div className="ag-header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel – Blog Management</span>
        </div>
        <div className="ag-nav">
          <Link to="/admin/dashboard" className="ag-btn ag-btn-outline">Appointments</Link>
          <Link to="/admin/gallery" className="ag-btn ag-btn-outline">Gallery</Link>
          <Link to="/admin/reviews" className="ag-btn ag-btn-outline">Reviews</Link>
          <button onClick={logout} className="ag-btn ag-btn-outline" style={{ color: '#ef4444' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="ag-content">
        {/* TOOLBAR */}
        <div className="ag-toolbar">
          <h3><FileText size={22} color="#c57b43" /> Manage Blog Posts</h3>
          <Link to="/admin/blog/new" className="ag-btn ag-btn-primary">
            <Plus size={18} /> New Blog Post
          </Link>
        </div>

        {error && <div style={{ color: '#ef4444', margin: '0 0 20px', padding: '12px 16px', background: '#fee2e2', borderRadius: '8px' }}>{error}</div>}

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#6b7280' }}>Loading blog posts…</div>
        ) : blogs.length === 0 ? (
          <div className="ag-empty">
            <FileText size={48} color="#d1d5db" />
            <span>No blog posts yet. Click "New Blog Post" to create your first one.</span>
          </div>
        ) : (
          <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Thumbnail</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Title</th>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.8rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Published</th>
                  <th style={{ padding: '14px 20px', textAlign: 'right', fontSize: '0.8rem', fontWeight: 700, color: '#374151', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, idx) => (
                  <tr key={blog._id} style={{ borderBottom: idx < blogs.length - 1 ? '1px solid #f3f4f6' : 'none', transition: 'background 0.15s' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                    <td style={{ padding: '14px 20px' }}>
                      {blog.thumbnail ? (
                        <img
                          src={blog.thumbnail.startsWith('http') ? blog.thumbnail : `${import.meta.env.VITE_API_URL}${blog.thumbnail}`}
                          alt="thumbnail"
                          style={{ width: '70px', height: '50px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                        />
                      ) : (
                        <div style={{ width: '70px', height: '50px', background: '#f3f4f6', borderRadius: '8px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <FileText size={20} color="#9ca3af" />
                        </div>
                      )}
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ fontWeight: 600, color: '#111827', fontSize: '0.95rem' }}>{blog.title}</span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6b7280', fontSize: '0.88rem' }}>
                        <Calendar size={14} />
                        {new Date(blog.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                        <Link
                          to={`/admin/blog/edit/${blog._id}`}
                          title="Edit post"
                          style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: 'rgba(197,123,67,0.1)', border: '1px solid rgba(197,123,67,0.3)', borderRadius: '6px', color: '#c57b43', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }}
                        >
                          <Edit2 size={14} /> Edit
                        </Link>
                        <Link
                          to={`/blog/${blog._id}`}
                          target="_blank"
                          title="View post"
                          style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: '6px', color: '#374151', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s' }}
                        >
                          <Eye size={14} /> View
                        </Link>
                        <button
                          onClick={() => deleteBlog(blog._id)}
                          title="Delete"
                          style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '6px 12px', background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '6px', color: '#ef4444', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s' }}
                        >
                          <Trash2 size={14} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlogList;
