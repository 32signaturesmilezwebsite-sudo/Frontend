import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, Upload, Trash2, Folder, ArrowLeft, Image as ImageIcon, Plus } from 'lucide-react';
import './AdminGalleryNew.css';

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
  const [creatingFolder, setCreatingFolder] = useState(false);
  const [uploadStats, setUploadStats] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    folderId: '',
    folderName: '',
    isNewFolder: 'false',
    folderType: 'image',
    mediaType: 'video-upload',
    videoLinkUrl: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
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

  const handleCreateFolderSubmit = async () => {
    if (!formData.folderName) return alert("Folder name is required.");
    if (!thumbnailFile) return alert("Thumbnail image is required.");
    
    try {
      setCreatingFolder(true);
      const adminInfo = getAdminInfo();
      const payload = new FormData();
      payload.append('folderName', formData.folderName);
      payload.append('folderType', formData.folderType);
      payload.append('thumbnail', thumbnailFile);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folders`, {
        method: 'POST',
        headers: { Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '' },
        body: payload
      });

      if (res.ok) {
        const newFolder = await res.json();
        setFolders([newFolder, ...folders]);
        setFormData({ ...formData, isNewFolder: 'false', folderId: newFolder._id, folderName: '' });
        setThumbnailFile(null);
      } else {
        const data = await res.json();
        alert(data.message || "Failed to create folder.");
      }
    } catch (err) {
      console.error(err);
      alert("Error creating folder.");
    } finally {
      setCreatingFolder(false);
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    if (formData.isNewFolder === 'true') {
      alert("Please save your new folder first using the 'Create Target Folder' button before uploading.");
      return;
    }
    
    // Validations based on type
    const selectedFolderData = folders.find(f => f._id === formData.folderId);
    if (!selectedFolderData) {
      alert("Please select a target folder.");
      return;
    }

    if (selectedFolderData.folderType === 'video') {
       if (formData.mediaType === 'video-upload' && !videoFile) return alert("Please select a video file to upload!");
       if (formData.mediaType === 'video-link' && !formData.videoLinkUrl) return alert("Please provide a valid video link!");
       if (!imageFile) return alert("Custom video thumbnail is required!");
    } else {
       if (!imageFile) return alert("Please select an image to upload.");
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
      payload.append('folderType', formData.folderType);
      
      const selectedFolderData = folders.find(f => f._id === (formData.isNewFolder === 'true' ? '' : formData.folderId));
      const currentFolderType = formData.isNewFolder === 'true' ? formData.folderType : (selectedFolderData?.folderType || 'image');
      
      const activeMediaType = currentFolderType === 'image' ? 'image' : formData.mediaType;
      payload.append('mediaType', activeMediaType);

      if (activeMediaType === 'video-link') {
        payload.append('videoLinkUrl', formData.videoLinkUrl);
      }
      
      if (imageFile) {
        payload.append('image', imageFile);
      }
      if (activeMediaType === 'video-upload' && videoFile) {
        payload.append('video', videoFile);
      }
      
      if (formData.isNewFolder === 'true') {
        payload.append('thumbnail', thumbnailFile);
      }

      const isVideoUpload = selectedFolderData.folderType === 'video' && formData.mediaType === 'video-upload';
      setUploadStats(null);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `${import.meta.env.VITE_API_URL}/api/gallery/upload`);
      if (adminInfo && adminInfo.token) {
        xhr.setRequestHeader('Authorization', `Bearer ${adminInfo.token}`);
      }

      let startTime = Date.now();

      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && isVideoUpload) {
          const percentComplete = (event.loaded / event.total) * 100;
          const timeElapsed = (Date.now() - startTime) / 1000;
          const uploadSpeed = timeElapsed > 0 ? event.loaded / timeElapsed : 0;
          const timeRemaining = uploadSpeed > 0 ? (event.total - event.loaded) / uploadSpeed : 0;

          setUploadStats({
            progress: percentComplete.toFixed(0),
            loaded: (event.loaded / (1024 * 1024)).toFixed(2),
            total: (event.total / (1024 * 1024)).toFixed(2),
            timeRemaining: timeRemaining > 0 ? timeRemaining.toFixed(0) : 0
          });
        }
      };

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const data = JSON.parse(xhr.responseText);
          if (viewState === 'folders') {
            fetchFolders();
          } else if (viewState === 'images' && selectedFolder && selectedFolder._id === data.folderId) {
            fetchFolderImages(selectedFolder);
          }
          closeModal();
        } else {
          try {
            const errorData = JSON.parse(xhr.responseText);
            alert("Failed to upload: " + (errorData.message || xhr.statusText));
          } catch {
            alert("Failed to upload.");
          }
        }
        setUploading(false);
      };

      xhr.onerror = () => {
        alert("Error uploading file. Please try again.");
        setUploading(false);
      };

      xhr.send(payload);

    } catch (err) {
      console.error(err);
      alert("Error wrapping upload process.");
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
    setVideoFile(null);
    setThumbnailFile(null);
    setUploadStats(null);
    setFormData({ title: '', description: '', folderId: '', folderName: '', isNewFolder: 'false', folderType: 'image', mediaType: 'video-upload', videoLinkUrl: '' });
  };

  return (
    <div className="ag-layout">
      {/* HEADER */}
      <header className="ag-header">
        <div className="ag-header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel - Clinic Gallery</span>
        </div>
        <div className="ag-nav">
          <Link to="/admin/dashboard" className="ag-btn ag-btn-outline">
            Appointments
          </Link>
          <Link to="/admin/blogs" className="ag-btn ag-btn-outline">
            Blogs
          </Link>
          <button onClick={logout} className="ag-btn ag-btn-outline" style={{ color: '#ef4444' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="ag-content">
        <div className="ag-toolbar">
          <h3>
            {viewState === 'images' && (
              <button 
                onClick={() => { setViewState('folders'); setSelectedFolder(null); }} 
                className="ag-icon-btn"
                title="Back to Folders"
              >
                <ArrowLeft size={18} />
              </button>
            )}
            {viewState === 'folders' ? 'Gallery Folders' : `Folder: ${selectedFolder?.name}`}
          </h3>
          
          <button onClick={() => setShowModal(true)} className="ag-btn ag-btn-primary">
            <Upload size={18} /> Upload Image
          </button>
        </div>

        {error && <div style={{ color: 'red', marginBottom: '20px' }}>{error}</div>}
        {loading && <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>Loading...</div>}
        
        {/* FOLDERS VIEW */}
        {!loading && viewState === 'folders' && (
          <div className="ag-grid">
            {folders.length === 0 ? (
              <div className="ag-empty">
                <Folder size={48} color="#d1d5db" />
                <span>No folders found. Click "Upload Image" to create your first folder.</span>
              </div>
            ) : (
              folders.map((folder) => (
                <div key={folder._id} onClick={() => fetchFolderImages(folder)} className="ag-card">
                  <img src={folder.thumbnailUrl} alt={folder.name} className="ag-card-img" />
                  <div className="ag-card-overlay">
                    <div className="ag-folder-info">
                      <div className="ag-folder-name">
                        <Folder size={18} color="#fcd34d" />
                        {folder.name}
                      </div>
                      <button 
                        onClick={(e) => deleteFolder(folder._id, e)}
                        className="ag-icon-btn ag-icon-btn-danger"
                        title="Delete Entire Folder"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* IMAGES VIEW */}
        {!loading && viewState === 'images' && (
          <div className="ag-grid">
            {currentFolderImages.length === 0 ? (
              <div className="ag-empty">
                <ImageIcon size={48} color="#d1d5db" />
                <span>No images in this folder yet.</span>
              </div>
            ) : (
              currentFolderImages.map((img) => (
                <div key={img._id} className="ag-card">
                  <div style={{ position: 'relative' }}>
                    <img src={img.imageUrl} alt={img.title} className="ag-card-img" style={{ height: '200px' }} />
                    <div className="ag-card-overlay image-overlay">
                       {/* Subtle overlay effect built in CSS */}
                    </div>
                  </div>
                  <div className="ag-image-info">
                    <h4 className="ag-image-title">{img.title}</h4>
                    <p className="ag-image-desc">{img.description}</p>
                    <div className="ag-image-meta">
                      <span>{new Date(img.createdAt).toLocaleDateString()}</span>
                      <button 
                        onClick={() => deleteImage(img._id)}
                        className="ag-icon-btn ag-icon-btn-danger"
                        style={{ width: 'auto', padding: '4px 8px', height: 'auto', gap: '4px', fontSize: '0.75rem' }}
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* UPLOAD MODAL */}
      {showModal && (
        <div className="ag-modal-overlay">
          <div className="ag-modal">
            <h3 className="ag-modal-title">
              <Upload size={22} color="#c57b43" /> Upload Gallery Image
            </h3>
            
            <form onSubmit={handleUploadSubmit}>
              {/* Folder Selection / Creation Options MUST BE FIRST */}
              <div className="ag-folder-sel-box" style={{ marginTop: 0, marginBottom: '24px' }}>
                <label className="ag-label" style={{ color: '#111827', fontSize: '1rem' }}>Destination Folder *</label>
                
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
                  className="ag-input"
                  style={{ marginBottom: '16px', background: 'white', fontWeight: '500' }}
                >
                  <option value="" disabled>Select a target folder...</option>
                  {folders.map(f => (
                    <option key={f._id} value={f._id}>{f.name} ({f.folderType === 'video' ? 'Video' : 'Image'})</option>
                  ))}
                  <option value="NEW_FOLDER_SELECTION">➕ Create a New Folder...</option>
                </select>

                {/* Conditional New Folder Fields */}
                {formData.isNewFolder === 'true' && (
                  <div style={{ animation: 'fadeIn 0.3s ease', borderTop: '1px solid #d1d5db', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.85rem', color: '#c57b43', fontWeight: '600' }}>Creating a New Folder</span>
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, isNewFolder: 'false', folderId: ''})} 
                        style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        Cancel & Select Existing
                      </button>
                    </div>
                    <div className="ag-form-group">
                      <label className="ag-label">Folder Type *</label>
                      <div style={{ display: 'flex', gap: '15px' }}>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                          <input type="radio" name="folderType" checked={formData.folderType === 'image'} onChange={() => setFormData({...formData, folderType: 'image'})} /> Image Gallery
                        </label>
                        <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                          <input type="radio" name="folderType" checked={formData.folderType === 'video'} onChange={() => setFormData({...formData, folderType: 'video'})} /> Video Gallery
                        </label>
                      </div>
                    </div>
                    <div className="ag-form-group">
                      <label className="ag-label">New Folder Name *</label>
                      <input 
                        type="text" 
                        value={formData.folderName} 
                        onChange={(e) => setFormData({...formData, folderName: e.target.value})} 
                        placeholder="e.g., Smile Makeovers"
                        required={formData.isNewFolder === 'true'}
                        className="ag-input"
                      />
                    </div>
                    <div className="ag-form-group" style={{ marginBottom: 0 }}>
                      <label className="ag-label">Folder Thumbnail Cover *</label>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={(e) => setThumbnailFile(e.target.files[0])} 
                        className="ag-input"
                        style={{ background: 'white' }}
                      />
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleCreateFolderSubmit}
                      disabled={creatingFolder}
                      className="ag-btn"
                      style={{ 
                        background: '#c57b43', 
                        color: 'white', 
                        width: '100%', 
                        marginTop: '16px', 
                        padding: '10px',
                        border: 'none',
                        borderRadius: '6px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        opacity: creatingFolder ? 0.7 : 1
                      }}
                    >
                      {creatingFolder ? 'Creating Folder...' : '➕ Create Target Folder'}
                    </button>
                  </div>
                )}
              </div>

              {/* Dynamic Form Content relying on Folder Type */}
              {(() => {
                const selectedFolderData = folders.find(f => f._id === formData.folderId);
                const currentFolderType = formData.isNewFolder === 'true' ? formData.folderType : (selectedFolderData?.folderType || 'image');
                
                return (
                  <>
                    {/* VIDEO UPLOAD UI */}
                    {currentFolderType === 'video' && (
                      <div className="ag-form-group" style={{ background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                        <label className="ag-label" style={{ color: '#0f172a' }}>Video Source *</label>
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '16px' }}>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                            <input type="radio" name="mediaType" checked={formData.mediaType === 'video-upload'} onChange={() => setFormData({...formData, mediaType: 'video-upload'})} /> Upload File (Max 100MB)
                          </label>
                          <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem' }}>
                            <input type="radio" name="mediaType" checked={formData.mediaType === 'video-link'} onChange={() => setFormData({...formData, mediaType: 'video-link'})} /> Paste Link (YouTube/Drive)
                          </label>
                        </div>

                        {formData.mediaType === 'video-upload' && (
                          <div className="ag-form-group">
                            <label className="ag-label">Upload Video File *</label>
                            <input type="file" accept="video/mp4,video/webm,video/quicktime" onChange={(e) => setVideoFile(e.target.files[0])} required className="ag-input" style={{ background: 'white' }} />
                            <small style={{ color: '#64748b', marginTop: '4px', display: 'block' }}>Must be under 100MB. Consider YouTube links for large videos.</small>
                          </div>
                        )}

                        {formData.mediaType === 'video-link' && (
                          <div className="ag-form-group">
                            <label className="ag-label">Paste Video Link *</label>
                            <input type="url" placeholder="https://www.youtube.com/watch?v=..." value={formData.videoLinkUrl} onChange={(e) => setFormData({...formData, videoLinkUrl: e.target.value})} required className="ag-input" style={{ background: 'white' }} />
                          </div>
                        )}
                        
                        <div className="ag-form-group" style={{ marginBottom: 0 }}>
                          <label className="ag-label">Custom Video Thumbnail Cover Image *</label>
                          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} required className="ag-input" style={{ background: 'white' }} />
                        </div>
                      </div>
                    )}

                    {/* IMAGE UPLOAD UI */}
                    {currentFolderType === 'image' && (
                      <div className="ag-form-group">
                        <label className="ag-label">Main Image *</label>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={(e) => setImageFile(e.target.files[0])} 
                          required
                          className="ag-input"
                          style={{ background: 'white' }}
                        />
                      </div>
                    )}
                  </>
                )
              })()}

              {/* Title & Description */}
              <div className="ag-form-group">
                <label className="ag-label">Title / Heading *</label>
                <input 
                  type="text" 
                  value={formData.title} 
                  onChange={(e) => setFormData({...formData, title: e.target.value})} 
                  required
                  placeholder="e.g., Before & After Implants"
                  className="ag-input"
                />
              </div>
              <div className="ag-form-group">
                <label className="ag-label">Description (Optional)</label>
                <textarea 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})} 
                  placeholder="Details about the procedure..."
                  rows="3"
                  className="ag-input"
                  style={{ resize: 'vertical' }}
                />
              </div>

              {/* Progress UI for Video Uploads */}
              {uploading && uploadStats && (
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: '#334155', fontWeight: '500' }}>
                    <span>Uploading Video... {uploadStats.progress}%</span>
                    <span>{uploadStats.loaded} MB / {uploadStats.total} MB</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#cbd5e1', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${uploadStats.progress}%`, height: '100%', background: '#c57b43', transition: 'width 0.2s ease' }} />
                  </div>
                  <div style={{ textAlign: 'right', marginTop: '8px', fontSize: '0.8rem', color: '#64748b' }}>
                    Estimated time remaining: {uploadStats.timeRemaining} seconds
                  </div>
                </div>
              )}

              <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="ag-btn ag-btn-outline"
                  style={{ flex: 1, padding: '12px' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={uploading || formData.isNewFolder === 'true'}
                  className="ag-btn ag-btn-primary"
                  style={{ flex: 1, padding: '12px', opacity: (uploading || formData.isNewFolder === 'true') ? 0.7 : 1 }}
                >
                  {uploading ? 'Processing...' : 'Upload Media'}
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
