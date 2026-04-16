import React, { useState, useEffect } from 'react';
import { X, Edit2, Trash2, Save, AlertCircle } from 'lucide-react';
import '../pages/AdminGalleryNew.css';

const ManageCategoriesModal = ({ isOpen, onClose, onCategoriesUpdated }) => {
  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  // Delete state
  const [deletingCat, setDeletingCat] = useState(null);
  const [replaceWith, setReplaceWith] = useState('');
  
  const [error, setError] = useState('');

  const getAdminInfo = () => {
    const info = localStorage.getItem('adminInfo');
    return info ? JSON.parse(info) : null;
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      
      const adminInfo = getAdminInfo();
      
      // Fetch categories
      const catRes = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
      if (catRes.ok) {
        setCategories(await catRes.json());
      }

      // Fetch blogs to know usage
      const blogRes = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
      if (blogRes.ok) {
        setBlogs(await blogRes.json());
      }
    } catch {
      setError('Failed to load data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchData();
      setEditingId(null);
      setDeletingCat(null);
      setError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleEdit = (cat) => {
    setEditingId(cat._id);
    setEditName(cat.name);
    setDeletingCat(null);
  };

  const saveEdit = async (id) => {
    if (!editName.trim()) return;
    const adminInfo = getAdminInfo();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${adminInfo.token}`,
        },
        body: JSON.stringify({ name: editName }),
      });
      if (res.ok) {
        setEditingId(null);
        await fetchData();
        onCategoriesUpdated();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || 'Failed to update category.');
      }
    } catch {
      setError('Cannot connect to server.');
    }
  };

  const handleDeleteInitiate = (cat) => {
    setDeletingCat(cat);
    setEditingId(null);
    setReplaceWith('');
  };

  const confirmDelete = async () => {
    const usageCount = blogs.filter(b => b.category === deletingCat.name).length;
    if (usageCount > 0 && !replaceWith) {
      setError('Please select a replacement category.');
      return;
    }

    const adminInfo = getAdminInfo();
    try {
      const url = new URL(`${import.meta.env.VITE_API_URL}/api/categories/${deletingCat._id}`);
      if (replaceWith) {
        url.searchParams.append('replaceWith', replaceWith);
      }

      const res = await fetch(url.toString(), {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${adminInfo.token}` },
      });

      if (res.ok) {
        setDeletingCat(null);
        await fetchData();
        onCategoriesUpdated();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.message || 'Failed to delete category.');
      }
    } catch {
      setError('Cannot connect to server.');
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(10, 14, 20, 0.7)', backdropFilter: 'blur(4px)'
    }}>
      <div style={{
        background: 'white', borderRadius: '16px', width: '100%', maxWidth: '600px',
        maxHeight: '85vh', display: 'flex', flexDirection: 'column', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px', borderBottom: '1px solid #f3f4f6' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>Manage Categories</h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280' }}>
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', overflowY: 'auto' }}>
          {error && (
            <div style={{ padding: '12px 16px', background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '8px', color: '#dc2626', marginBottom: '20px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AlertCircle size={18} /> {error}
            </div>
          )}

          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Loading...</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {categories.map(cat => {
                const usageCount = blogs.filter(b => b.category === cat.name).length;
                const isEditing = editingId === cat._id;
                const isDeleting = deletingCat && deletingCat._id === cat._id;

                return (
                  <div key={cat._id} style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px', background: isDeleting ? '#fef2f2' : '#f9fafb' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      {isEditing ? (
                        <input
                          type="text"
                          className="ag-input"
                          style={{ margin: 0, flex: 1, marginRight: '16px' }}
                          value={editName}
                          onChange={e => setEditName(e.target.value)}
                          onKeyDown={e => e.key === 'Enter' && saveEdit(cat._id)}
                          autoFocus
                        />
                      ) : (
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 600, color: '#111827', fontSize: '1.05rem' }}>{cat.name}</div>
                          <div style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '2px' }}>Used in {usageCount} blog post{usageCount !== 1 ? 's' : ''}</div>
                        </div>
                      )}

                      <div style={{ display: 'flex', gap: '8px' }}>
                        {isEditing ? (
                          <>
                            <button onClick={() => saveEdit(cat._id)} className="ag-btn ag-btn-primary" style={{ padding: '6px 12px' }}><Save size={14} /> Save</button>
                            <button onClick={() => setEditingId(null)} className="ag-btn ag-btn-outline" style={{ padding: '6px 12px' }}>Cancel</button>
                          </>
                        ) : isDeleting ? null : (
                          <>
                            <button onClick={() => handleEdit(cat)} className="ag-btn ag-btn-outline" style={{ padding: '6px 12px' }}><Edit2 size={14} /> Edit</button>
                            <button onClick={() => handleDeleteInitiate(cat)} className="ag-btn ag-btn-outline" style={{ padding: '6px 12px', color: '#ef4444', borderColor: '#fecaca' }}><Trash2 size={14} /> </button>
                          </>
                        )}
                      </div>
                    </div>

                    {isDeleting && (
                      <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed #fca5a5' }}>
                        <p style={{ margin: '0 0 12px', fontSize: '0.95rem', color: '#991b1b', fontWeight: 500 }}>
                          Are you sure you want to delete "{cat.name}"?
                        </p>
                        
                        {usageCount > 0 ? (
                          <div style={{ background: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #fecaca', marginBottom: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                              <AlertCircle color="#ef4444" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                              <div>
                                <p style={{ margin: '0 0 8px', fontSize: '0.9rem', color: '#111827', fontWeight: 600 }}>
                                  This category is used by {usageCount} blog post{usageCount !== 1 ? 's' : ''}.
                                </p>
                                <p style={{ margin: '0 0 12px', fontSize: '0.85rem', color: '#4b5563' }}>
                                  Before deleting, you must re-assign them to another category:
                                </p>
                                <select 
                                  value={replaceWith} 
                                  onChange={e => setReplaceWith(e.target.value)}
                                  className="ag-input"
                                  style={{ background: '#f9fafb' }}
                                >
                                  <option value="">Select replacement category...</option>
                                  {categories.filter(c => c._id !== cat._id).map(c => (
                                    <option key={c._id} value={c.name}>{c.name}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p style={{ margin: '0 0 16px', fontSize: '0.85rem', color: '#4b5563' }}>
                            This category is not used by any blog posts and can be safely deleted.
                          </p>
                        )}

                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <button onClick={() => setDeletingCat(null)} className="ag-btn ag-btn-outline" style={{ padding: '8px 16px' }}>Cancel</button>
                          <button onClick={confirmDelete} disabled={usageCount > 0 && !replaceWith} className="ag-btn ag-btn-primary" style={{ padding: '8px 16px', background: '#ef4444', borderColor: '#ef4444', opacity: (usageCount > 0 && !replaceWith) ? 0.5 : 1 }}>
                            Confirm Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {categories.length === 0 && (
                <div style={{ textAlign: 'center', padding: '30px', color: '#6b7280', fontStyle: 'italic' }}>
                  No categories found.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageCategoriesModal;
