import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, ArrowLeft, LayoutDashboard, Image, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import './AdminGalleryNew.css';
import './AdminHowToUse.css';

const SECTIONS = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'gallery',   label: 'Gallery',   icon: <Image size={18} /> },
  { id: 'blog',      label: 'Blog',      icon: <BookOpen size={18} /> },
];

const Step = ({ number, caption, image, label }) => (
  <div className="htu-step">
    <div className="htu-step-badge">{number}</div>
    <div className="htu-step-body">
      {label && <p className="htu-step-label">{label}</p>}
      {image && (
        <div className="htu-img-wrap">
          <img src={image} alt={caption} />
        </div>
      )}
      {caption && <p className="htu-step-caption">{caption}</p>}
    </div>
  </div>
);

const AdminHowToUse = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState('dashboard');

  const logout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin');
  };

  return (
    <div className="ag-layout htu-layout">

      {/* ── HEADER ── */}
      <header className="ag-header">
        <div className="ag-header-brand">
          <h2>32 Signature Smilez</h2>
          <span>Admin Panel – How to Use</span>
        </div>
        <nav className="ag-nav">
          <Link to="/admin/dashboard" className="ag-btn ag-btn-outline">
            <ArrowLeft size={16} /> Dashboard
          </Link>
          <Link to="/admin/gallery" className="ag-btn ag-btn-outline">Gallery</Link>
          <Link to="/admin/blogs"   className="ag-btn ag-btn-outline">Blogs</Link>
          <button onClick={logout} className="ag-btn ag-btn-outline" style={{ color: '#ef4444' }}>
            <LogOut size={16} /> Logout
          </button>
        </nav>
      </header>

      <div className="htu-page-wrap">

        {/* ── SIDEBAR NAV ── */}
        <aside className="htu-sidebar">
          <p className="htu-sidebar-title">Contents</p>
          {SECTIONS.map(s => (
            <button
              key={s.id}
              className={`htu-sidebar-item ${active === s.id ? 'active' : ''}`}
              onClick={() => {
                setActive(s.id);
                document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              {s.icon} {s.label}
              <ChevronRight size={14} className="htu-chevron" />
            </button>
          ))}
        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="htu-main">

          {/* ════════════════════════════════
                  1. DASHBOARD
              ════════════════════════════════ */}
          <section id="dashboard" className="htu-section">
            <div className="htu-section-header">
              <LayoutDashboard size={28} color="#c57b43" />
              <div>
                <h2>1. How the Dashboard Works</h2>
                <p>Manage all patient appointment requests from one central view.</p>
              </div>
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Calling a Patient</h3>
              <Step
                number="1"
                image="/Screenshot 2026-04-12 190705.png"
                caption='Clicking here you can directly call the Patient'
              />
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Approving a Booking</h3>
              <Step
                number="2"
                image="/Screenshot 2026-04-12 190835.png"
                caption='After contacting the patient you can click here to turn it into Approved'
              />
            </div>
          </section>

          {/* ════════════════════════════════
                  2. GALLERY
              ════════════════════════════════ */}
          <section id="gallery" className="htu-section">
            <div className="htu-section-header">
              <Image size={28} color="#c57b43" />
              <div>
                <h2>2. Gallery</h2>
                <p>Organise your clinic's photos and videos into folders visible on the public Gallery page.</p>
              </div>
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Getting Started</h3>
              <Step number="1" label="Currently the Gallery is empty"
                image="/Screenshot 2026-04-12 191023.png" />
              <Step number="2" label='Click on "Upload Image"'
                image="/Screenshot 2026-04-12 191119.png" />
              <Step number="3" label="This Form will open"
                image="/Screenshot 2026-04-12 191156.png" />
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Creating a Folder</h3>
              <Step number="4" label='You can create a new folder from here'
                image="/Screenshot 2026-04-12 191234.png" />
              <Step number="5" label="This type of form will open for Folder Creation"
                image="/Screenshot 2026-04-12 191322.png" />
              <Step number="6" label="For an Image Folder — insert a Folder title &amp; upload a thumbnail"
                image="/Screenshot 2026-04-12 191410.png" />
              <Step number="7" label="For a Video Folder — same steps apply"
                image="/Screenshot 2026-04-12 191537.png" />
              <Step number="8" label='After creating a folder it will appear as "Folder Name (Folder Type)"'
                image="/Screenshot 2026-04-12 191702.png" />
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Uploading Media</h3>
              <Step number="9"
                label="Simply add the Image (10 MB max), Title &amp; Description, then click Upload Media" />
              <Step number="10" label="For a Video Folder — choose to upload a video (max 100 MB) or paste a YouTube/Drive link"
                image="/Screenshot 2026-04-12 192021.png" />
              <Step number="11" label="Fill the details &amp; click Upload"
                image="/Screenshot 2026-04-12 192153.png" />
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Managing &amp; Deleting</h3>
              <Step number="12" label="You can manage Folders from here"
                image="/Screenshot 2026-04-12 192253.png" />
              <Step number="13" label="To delete a whole Folder click the 🗑️ Button"
                image="/Screenshot 2026-04-12 192400.png" />
              <Step number="14" label="To delete a single image/video, enter the folder and delete one item at a time" />
            </div>
          </section>

          {/* ════════════════════════════════
                  3. BLOG
              ════════════════════════════════ */}
          <section id="blog" className="htu-section">
            <div className="htu-section-header">
              <BookOpen size={28} color="#c57b43" />
              <div>
                <h2>3. Blog</h2>
                <p>Write, format, and publish professional blog articles directly from the admin panel.</p>
              </div>
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Creating a Blog Post</h3>
              <Step number="1" label='Click here to create a Blog'
                image="/Screenshot 2026-04-12 192520.png" />
              <Step number="2"
                label="Fill in Blog Title, choose a Category (create one if needed), and choose the Publish Date"
                image="/Screenshot 2026-04-12 192631.png" />
            </div>

            <div className="htu-card">
              <h3 className="htu-card-title">Writing &amp; Formatting Content</h3>
              <Step number="3" label="This is the main content area where you write your article"
                image="/Screenshot 2026-04-12 192807.png" />
              <Step number="4" label="You can add Bullet Points for lists"
                image="/Screenshot 2026-04-12 192912.png" />
              <Step number="5" label="You can choose Number types (1, 2, 3 / I, II, III / a, b, c)"
                image="/Screenshot 2026-04-12 193003.png" />
              <Step number="6" label="You can insert Images inside the paragraph"
                image="/Screenshot 2026-04-12 193048.png" />
            </div>

            <div className="htu-card htu-publish-card">
              <div className="htu-publish-icon">🚀</div>
              <h3>Ready to go?</h3>
              <p>After filling in all the details, click <strong>Publish</strong> to make the blog post live on the website instantly.</p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default AdminHowToUse;
