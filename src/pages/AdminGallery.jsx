import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, Upload, Trash2, Folder, Image as ImageIcon, ArrowLeft, Plus } from 'lucide-react';
import './AdminStyles.css';

const AdminGallery = () => {
  const [folders, setFolders] = useState([]);
  const [currentFolderImages, setCurrentFolderImages] = useState([]);
  const [viewState, setViewState] = useState('folders'); // 'folders' | 'images'
  const [selectedFolder, setSelectedFolder] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    folderId: '',
    folderName: '',
    isNewFolder: 'false'
  });
  const [imageFile, setImageFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  const navigate = useNavigate();

  const getAdminInfo = () => {
    const info = localStorage.getItem('adminInfo');
    return info ? JSON.parse(info) : null;
  };

  const logout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin');
  };

  const fetchFolders = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folders`);
      if (res.ok) {
        const data = await res.json();
        setFolders(data);
      }
    } catch (err) {
      setError('Cannot connect to server to fetch folders.');
    } finally {
      setLoading(false);
    }
  };

  const fetchFolderImages = async (folder) => {
    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folders/${folder._id}/images`);
      if (res.ok) {
        const data = await res.json();
        setCurrentFolderImages(data);
        setSelectedFolder(folder);
        setViewState('images');
      }
    } catch (err) {
      setError('Cannot fetch folder images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const adminInfo = getAdminInfo();
    if (!adminInfo || !adminInfo.token) {
      navigate('/admin');
      return;
    }
    fetchFolders();
  }, [navigate]);

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }
    if (formData.isNewFolder === 'true' && !thumbnailFile) {
      alert("Please select a thumbnail for the new folder.");
      return;
    }
    if (formData.isNewFolder === 'false' && !formData.folderId) {
      alert("Please select a folder.");
      return;
    }

    try {
      setUploading(true);
      const adminInfo = getAdminInfo();
      const payload = new FormData();
      
      payload.append('title', formData.title);
      payload.append('description', formData.description);
      payload.append('isNewFolder', formData.isNewFolder);
      payload.append('folderId', formData.folderId);
      payload.append('folderName', formData.folderName);
      payload.append('image', imageFile);
      
      if (formData.isNewFolder === 'true') {
        payload.append('thumbnail', thumbnailFile);
      }

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/upload`, {
        method: 'POST',
        headers: {
          Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '',
        },
        body: payload,
      });

      if (res.ok) {
        const data = await res.json();
        
        // Refresh appropriate view
        if (viewState === 'folders') {
          fetchFolders();
        } else if (viewState === 'images' && selectedFolder && selectedFolder._id === data.folderId) {
          fetchFolderImages(selectedFolder);
        }
        
        closeModal();
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert("Failed to upload: " + (errorData.message || res.statusText));
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const deleteFolder = async (folderId, e) => {
    e.stopPropagation();
    if (!window.confirm("Are you sure? This will delete the folder AND ALL IMAGES inside it permanently.")) return;
    try {
      const adminInfo = getAdminInfo();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folder/${folderId}`, {
        method: 'DELETE',
        headers: { Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '' }
      });
      if (res.ok) {
        setFolders(folders.filter(f => f._id !== folderId));
      }
    } catch (err) {
      alert("Failed to delete folder.");
    }
  };

  const deleteImage = async (imageId) => {
    if (!window.confirm("Delete this image permanently?")) return;
    try {
      const adminInfo = getAdminInfo();
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/image/${imageId}`, {
        method: 'DELETE',
        headers: { Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '' }
      });
      if (res.ok) {
        setCurrentFolderImages(currentFolderImages.filter(img => img._id !== imageId));
      }
    } catch (err) {
      alert("Failed to delete image.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setImageFile(null);
    setThumbnailFile(null);
    setFormData({ title: '', description: '', folderId: '', folderName: '', isNewFolder: 'false' });
  };

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel - Clinic Gallery</span>
        </div>
        <div style={{display: 'flex', gap: '15px'}}>
          <Link to="/admin/dashboard" className="btn-dark logout-btn" style={{padding: '8px 15px', fontSize: '0.9rem', border: '1px solid #333'}}>
             Appointments
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
        <div className="table-header fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            {viewState === 'images' && (
              <button 
                onClick={() => { setViewState('folders'); setSelectedFolder(null); }} 
                className="btn-dark"
                style={{ padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h3>{viewState === 'folders' ? 'Manage Gallery Folders' : `Folder: ${selectedFolder?.name}`}</h3>
          </div>
          
          <button 
            onClick={() => setShowModal(true)} 
            className="btn-primary" 
            style={{padding: '10px 20px', fontSize: '0.9rem', display: 'flex', gap: '8px', cursor: 'pointer'}}
          >
            <Upload size={18} /> Upload Image
          </button>
        </div>

        <div className="table-container fade-in" style={{animationDelay: '0.1s', padding: '24px', background: 'var(--bg-card)', borderRadius: '12px'}}>
          {error && <div className="error-message">{error}</div>}
          {loading && <div className="loading-state">Loading...</div>}
          
          {!loading && viewState === 'folders' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {folders.length === 0 ? (
                <div className="empty-state" style={{gridColumn: '1 / -1'}}>No folders found. Upload an image to start a folder.</div>
              ) : (
                folders.map((folder) => (
                  <div key={folder._id} onClick={() => fetchFolderImages(folder)} style={{ cursor: 'pointer', position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.4)', backgroundColor: '#111', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.02)' } }}>
                    <img 
                      src={folder.thumbnailUrl} 
                      alt={folder.name} 
                      style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block', opacity: '0.8' }} 
                    />
                    <div style={{ padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(0,0,0,0.85)', position: 'absolute', bottom: 0, width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Folder size={18} color="var(--primary-gold)" />
                        <span style={{ fontWeight: '600', color: '#fff' }}>{folder.name}</span>
                      </div>
                      <button 
                        onClick={(e) => deleteFolder(folder._id, e)}
                        className="status-badge"
                        style={{ cursor: 'pointer', background: 'transparent', color: '#ef4444', border: 'none', padding: '4px' }}
                        title="Delete Entire Folder"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {!loading && viewState === 'images' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {currentFolderImages.length === 0 ? (
                <div className="empty-state" style={{gridColumn: '1 / -1'}}>No images in this folder.</div>
              ) : (
                currentFolderImages.map((img) => (
                  <div key={img._id} style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)', backgroundColor: '#111' }}>
                    <img 
                      src={img.imageUrl} 
                      alt={img.title} 
                      style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} 
                    />
                    <div style={{ padding: '12px', background: '#1a1a1a' }}>
                      <h4 style={{ margin: '0 0 5px', color: '#fff', fontSize: '1rem' }}>{img.title}</h4>
                      <p style={{ margin: 0, color: '#aaa', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{img.description}</p>
                    </div>
                    <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', borderTop: '1px solid #222' }}>
                      <span style={{ fontSize: '0.75rem', color: '#666' }}>{new Date(img.createdAt).toLocaleDateString()}</span>
                      <button 
                        onClick={() => deleteImage(img._id)}
                        className="status-badge"
                        style={{ cursor: 'pointer', background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '4px 10px' }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* UPLOAD MODAL */}
      {showModal && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="modal-content" style={{ background: '#1e1e1e', padding: '30px', borderRadius: '12px', width: '90%', maxWidth: '500px', border: '1px solid #333' }}>
            <h3 style={{ color: '#fff', marginTop: 0, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Upload size={20} color="var(--primary-gold)" /> Upload Gallery Image
            </h3>
            
            <form onSubmit={handleUploadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* Target Image File */}
              <div>
                <label style={{ display: 'block', color: '#ccc', marginBottom: '5px', fontSize: '0.9rem' }}>Main Image *</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => setImageFile(e.target.files[0])} 
                  required
                  style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}
                />
              </div>

              {/* Title & Description */}
              <div>
                <label style={{ display: 'block', color: '#ccc', marginBottom: '5px', fontSize: '0.9rem' }}>Image Title *</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})} 
                  required
                  placeholder="e.g., Before & After Implants"
                  style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: '#ccc', marginBottom: '5px', fontSize: '0.9rem' }}>Description</label>
                <textarea 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})} 
                  placeholder="Details about the procedure..."
                  rows="3"
                  style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '6px', resize: 'vertical' }}
                />
              </div>

              {/* Folder Selection / Creation Options */}
              <div style={{ background: '#222', padding: '15px', borderRadius: '8px', border: '1px solid #444', marginTop: '10px' }}>
                <label style={{ display: 'block', color: '#fff', fontWeight: '600', marginBottom: '10px' }}>Folder Destination *</label>
                
                <select 
                  value={formData.isNewFolder === 'true' ? 'NEW_FOLDER_SELECTION' : formData.folderId}
                  onChange={(e) => {
                    if (e.target.value === 'NEW_FOLDER_SELECTION') {
                      setFormData({...formData, isNewFolder: 'true', folderId: ''});
                    } else {
                      setFormData({...formData, isNewFolder: 'false', folderId: e.target.value});
                    }
                  }}
                  required
                  style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid #333', borderRadius: '6px', marginBottom: '15px' }}
                >
                  <option value="" disabled>Select a target folder...</option>
                  {folders.map(f => (
                    <option key={f._id} value={f._id}>{f.name}</option>
                  ))}
                  <option value="NEW_FOLDER_SELECTION">➕ Create New Folder...</option>
                </select>

                {/* Conditional New Folder Fields */}
                {formData.isNewFolder === 'true' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', animation: 'fadeIn 0.3s ease' }}>
                    <div>
                      <label style={{ display: 'block', color: '#ccc', marginBottom: '5px', fontSize: '0.85rem' }}>New Folder Name *</label>
                      <input 
                        type="text" 
                        value={formData.folderName} 
                        onChange={(e) => setFormData({...formData, folderName: e.target.value})} 
                        placeholder="e.g., Smile Makeovers"
                        required={formData.isNewFolder === 'true'}
                        style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid var(--primary-gold)', borderRadius: '6px' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', color: '#ccc', marginBottom: '5px', fontSize: '0.85rem' }}>Folder Thumbnail Cover *</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setThumbnailFile(e.target.files[0])} 
                        required={formData.isNewFolder === 'true'}
                        style={{ width: '100%', padding: '10px', background: '#111', color: '#fff', border: '1px solid var(--primary-gold)', borderRadius: '6px' }}
                      />
                    </div>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="btn-dark"
                  style={{ flex: 1, padding: '12px', border: '1px solid #444', borderRadius: '6px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={uploading}
                  style={{ flex: 1, padding: '12px', background: 'var(--primary-gold)', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '600', cursor: uploading ? 'not-allowed' : 'pointer' }}
                >
                  {uploading ? 'Processing...' : 'Upload Image'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminGallery;
