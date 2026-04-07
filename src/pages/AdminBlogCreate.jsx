import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, ArrowLeft, Image as ImageIcon, Send, FileText, X, Plus } from 'lucide-react';
import JoditEditor from 'jodit-react';
import './AdminGalleryNew.css';

const AdminBlogCreate = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Dynamic categories
  const [categories, setCategories] = useState([]);
  const [showNewCat, setShowNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [catCreating, setCatCreating] = useState(false);

  const navigate = useNavigate();

  const getAdminInfo = () => {
    const info = localStorage.getItem('adminInfo');
    return info ? JSON.parse(info) : null;
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
      if (res.ok) setCategories(await res.json());
    } catch {}
  };

  useEffect(() => { fetchCategories(); }, []);

  const handleCreateCategory = async () => {
    if (!newCatName.trim()) return;
    const adminInfo = getAdminInfo();
    try {
      setCatCreating(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: adminInfo ? `Bearer ${adminInfo.token}` : '' },
        body: JSON.stringify({ name: newCatName.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        setCategories(prev => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
        setCategory(data.name);
        setNewCatName('');
        setShowNewCat(false);
      } else {
        alert(data.message || 'Failed to create category.');
      }
    } catch { alert('Error creating category.'); }
    finally { setCatCreating(false); }
  };

  const logout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const clearThumbnail = () => {
    setThumbnail(null);
    setThumbnailPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Title and Content are required.');
      return;
    }

    const adminInfo = getAdminInfo();
    if (!adminInfo || !adminInfo.token) { navigate('/admin'); return; }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (excerpt) formData.append('excerpt', excerpt);
    if (category) formData.append('category', category);
    if (publishDate) formData.append('publishDate', publishDate);
    if (thumbnail) formData.append('thumbnail', thumbnail);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${adminInfo.token}` },
        body: formData
      });

      if (res.ok) {
        navigate('/admin/blogs');
      } else {
        setError('Failed to publish blog post.');
      }
    } catch {
      setError('Cannot connect to server.');
    } finally {
      setLoading(false);
    }
  };

  const joditConfig = useMemo(() => ({
    readonly: false,
    height: 560,
    theme: 'default',
    toolbarAdaptive: false,
    toolbarSticky: true,
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    style: {
      font: '16px/1.8 Inter, system-ui, sans-serif',
      color: '#1f2937',
      background: '#ffffff',
    },
    // Inject CSS into the preview/fullscreen iframe so text is always visible
    iframe: true,
    iframeStyle: `
      body {
        font-family: Inter, system-ui, sans-serif;
        font-size: 16px;
        line-height: 1.8;
        color: #1f2937;
        background: #ffffff;
        padding: 20px 28px;
        margin: 0;
      }
      h1,h2,h3,h4 { color: #3b4657; font-family: 'Playfair Display', Georgia, serif; }
      a { color: #c57b43; }
      blockquote {
        border-left: 4px solid #c57b43;
        padding: 12px 18px;
        margin: 20px 0;
        background: rgba(197,123,67,0.05);
        border-radius: 0 8px 8px 0;
        font-style: italic;
        color: #4b5563;
      }
      ul { list-style-type: disc; padding-left: 22px; }
      ol { list-style-type: decimal; padding-left: 22px; }
      ol.roman { list-style-type: upper-roman; }
      ol.lower-roman { list-style-type: lower-roman; }
      ol.alpha { list-style-type: lower-alpha; }
      li { margin-bottom: 6px; }
      img { max-width: 100%; border-radius: 8px; }
      p { margin: 0 0 14px; }
    `,
    uploader: {
      url: `${import.meta.env.VITE_API_URL}/api/blogs/upload-image`,
      format: 'json',
      method: 'POST',
      headers: { Authorization: `Bearer ${getAdminInfo()?.token}` },
      isSuccess: (resp) => !resp.error,
      process: (resp) => ({
        files: resp.data.files,
        path: resp.data.path,
        baseurl: resp.data.baseurl,
        error: resp.error,
        message: resp.message,
        isImages: resp.data.isImages
      })
    },
    controls: {
      // Add custom "Roman Numerals" list to the ol button dropdown
      ol: {
        list: {
          default: 'Numbered List',
          'upper-roman': 'Roman (I, II, III…)',
          'lower-roman': 'Roman (i, ii, iii…)',
          'lower-alpha': 'Alpha (a, b, c…)',
          'upper-alpha': 'Alpha (A, B, C…)',
        }
      },
      ul: {
        list: {
          default: 'Bullet List (•)',
          circle: 'Bullet (○)',
          square: 'Bullet (■)',
        }
      }
    },
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'paragraph', 'h1', 'h2', 'h3', '|',
      'superscript', 'subscript', '|',
      'link', 'image', '|',
      'left', 'center', 'right', 'justify', '|',
      'indent', 'outdent', '|',
      'blockquote', 'hr', '|',
      'table', '|',
      'fontsize', 'brush', '|',
      'undo', 'redo', '|',
      'copyformat', 'eraser', '|',
      'preview', 'fullsize', 'source'
    ]
  }), []);

  return (
    <div className="ag-layout">
      {/* HEADER */}
      <header className="ag-header">
        <div className="ag-header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel – Create Blog Post</span>
        </div>
        <div className="ag-nav">
          <Link to="/admin/blogs" className="ag-btn ag-btn-outline">
            <ArrowLeft size={16} /> Back to Blogs
          </Link>
          <Link to="/admin/gallery" className="ag-btn ag-btn-outline">Gallery</Link>
          <Link to="/admin/reviews" className="ag-btn ag-btn-outline">Reviews</Link>
          <button onClick={logout} className="ag-btn ag-btn-outline" style={{ color: '#ef4444' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="ag-content" style={{ maxWidth: '960px' }}>
        <div style={{ marginBottom: '24px' }}>
          <Link to="/admin/blogs" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#c57b43', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem' }}>
            <ArrowLeft size={16} /> Back to All Posts
          </Link>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', border: '1px solid #e5e7eb', boxShadow: '0 4px 24px rgba(59,70,87,0.07)', padding: '36px' }}>
          {/* Title */}
          <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #f3f4f6', paddingBottom: '20px' }}>
            <FileText size={24} color="#c57b43" />
            <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#111827', fontFamily: "'Playfair Display', serif" }}>
              Compose New Blog Post
            </h2>
          </div>

          {error && (
            <div style={{ padding: '12px 16px', background: '#fee2e2', border: '1px solid #fecaca', borderRadius: '8px', color: '#dc2626', marginBottom: '24px', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Row 1: Title + Date + Category */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '16px', marginBottom: '20px' }}>
              <div className="ag-form-group" style={{ margin: 0 }}>
                <label className="ag-label">Blog Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Write a compelling title…"
                  className="ag-input"
                  style={{ fontSize: '1.05rem' }}
                  required
                />
              </div>
              <div className="ag-form-group" style={{ margin: 0, minWidth: '180px' }}>
                <label className="ag-label" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>Category</span>
                  <button type="button" onClick={() => setShowNewCat(v => !v)} style={{ display: 'flex', alignItems: 'center', gap: '3px', background: 'none', border: 'none', color: '#c57b43', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer', padding: 0 }}>
                    <Plus size={13} /> New
                  </button>
                </label>
                {!showNewCat ? (
                  <select value={category} onChange={e => setCategory(e.target.value)} className="ag-input" style={{ background: 'white' }}>
                    <option value="">Select category…</option>
                    {categories.map(c => <option key={c._id} value={c.name}>{c.name}</option>)}
                  </select>
                ) : (
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <input
                      autoFocus
                      type="text"
                      value={newCatName}
                      onChange={e => setNewCatName(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), handleCreateCategory())}
                      placeholder="e.g. Cosmetic Tips"
                      className="ag-input"
                      style={{ flex: 1 }}
                    />
                    <button type="button" onClick={handleCreateCategory} disabled={catCreating} className="ag-btn ag-btn-primary" style={{ padding: '0 12px', flexShrink: 0 }}>
                      {catCreating ? '…' : <Plus size={16} />}
                    </button>
                    <button type="button" onClick={() => { setShowNewCat(false); setNewCatName(''); }} className="ag-btn ag-btn-outline" style={{ padding: '0 10px', flexShrink: 0 }}>
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
              <div className="ag-form-group" style={{ margin: 0, minWidth: '160px' }}>
                <label className="ag-label">Publish Date</label>
                <input type="date" value={publishDate} onChange={e => setPublishDate(e.target.value)} className="ag-input" />
              </div>
            </div>

            {/* Excerpt */}
            <div className="ag-form-group">
              <label className="ag-label">Excerpt (Optional) <span style={{ color: '#9ca3af', fontSize: '0.8rem', fontWeight: 400 }}>– shown in blog list cards</span></label>
              <textarea
                value={excerpt}
                onChange={e => setExcerpt(e.target.value)}
                placeholder="A short 1-2 sentence summary of this article…"
                rows={2}
                className="ag-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            {/* Thumbnail */}
            <div className="ag-form-group">
              <label className="ag-label">Cover Thumbnail Image</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <label style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  width: '160px', height: '110px', border: '2px dashed #c57b43', borderRadius: '10px',
                  cursor: 'pointer', background: 'rgba(197,123,67,0.04)', color: '#c57b43', transition: 'all 0.2s',
                  flexShrink: 0
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(197,123,67,0.08)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(197,123,67,0.04)'; }}
                >
                  <ImageIcon size={28} style={{ marginBottom: '8px' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Upload Image</span>
                  <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                </label>

                {thumbnailPreview && (
                  <div style={{ position: 'relative' }}>
                    <img src={thumbnailPreview} alt="Preview" style={{ width: '200px', height: '120px', objectFit: 'cover', borderRadius: '10px', border: '1px solid #e5e7eb' }} />
                    <button
                      type="button"
                      onClick={clearThumbnail}
                      style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', border: 'none', borderRadius: '50%', width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}
                    >
                      <X size={12} />
                    </button>
                  </div>
                )}

                {!thumbnailPreview && (
                  <p style={{ fontSize: '0.85rem', color: '#9ca3af', margin: 0 }}>
                    Recommended aspect ratio: 16:9 (e.g. 1280×720px)
                  </p>
                )}
              </div>
            </div>

            {/* Rich Text Editor */}
            <div className="ag-form-group">
              <label className="ag-label">Blog Content *</label>
              <div style={{ border: '1px solid #d1d5db', borderRadius: '8px', overflow: 'hidden' }}>
                <JoditEditor
                  ref={editor}
                  value={content}
                  config={joditConfig}
                  tabIndex={1}
                  onBlur={newContent => setContent(newContent)}
                  onChange={() => {}}
                />
              </div>
            </div>

            {/* Submit */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px', borderTop: '1px solid #f3f4f6', paddingTop: '24px' }}>
              <Link to="/admin/blogs" className="ag-btn ag-btn-outline" style={{ padding: '12px 24px' }}>
                Cancel
              </Link>
              <button
                type="submit"
                disabled={loading}
                className="ag-btn ag-btn-primary"
                style={{ padding: '12px 32px', fontSize: '1rem', opacity: loading ? 0.75 : 1 }}
              >
                <Send size={18} />
                {loading ? 'Publishing…' : 'Publish Blog Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBlogCreate;
