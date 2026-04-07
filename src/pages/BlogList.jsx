import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import './Blog.css';


const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({ name: '', phone: '' });
  const [formStatus, setFormStatus] = useState({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        if (res.ok) {
          const data = await res.json();
          setBlogs(data);
          setFilteredBlogs(data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/categories`);
        if (res.ok) setCategories(await res.json());
      } catch {}
    };
    fetchCategories();
  }, []);

  const getExcerpt = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;
    const text = div.textContent || div.innerText || '';
    return text.substring(0, 140) + '...';
  };

  const handleSearch = () => {
    const q = searchQuery.trim().toLowerCase();
    let result = blogs;
    if (q) result = result.filter(b => b.title.toLowerCase().includes(q) || (b.excerpt || '').toLowerCase().includes(q));
    if (selectedCategory) result = result.filter(b => (b.category || '').toLowerCase() === selectedCategory.toLowerCase());
    setFilteredBlogs(result);
  };

  const handleCategoryClick = (catName) => {
    const next = catName === selectedCategory ? '' : catName;
    setSelectedCategory(next);
    const q = searchQuery.trim().toLowerCase();
    let result = blogs;
    if (q) result = result.filter(b => b.title.toLowerCase().includes(q) || (b.excerpt || '').toLowerCase().includes(q));
    if (next) result = result.filter(b => (b.category || '').toLowerCase() === next.toLowerCase());
    setFilteredBlogs(result);
  };

  const handleConsultSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: '', msg: '' });
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: form.name, lastName: '', phone: form.phone, email: 'not-provided@blog.com' }),
      });
      if (res.ok) {
        setFormStatus({ type: 'success', msg: '✓ Request sent! We will call you shortly.' });
        setForm({ name: '', phone: '' });
      } else {
        setFormStatus({ type: 'error', msg: 'Failed to send. Please try again.' });
      }
    } catch {
      setFormStatus({ type: 'error', msg: 'Cannot connect. Please call us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <div className="blog-page">
        {/* HERO */}
        <section className="blog-hero">
          <div className="container">
            <h1>Dental <span>Blog</span> & Insights</h1>
            <p>Expert advice, tips and the latest news from the 32 Signature Smilez team</p>
            <div className="blog-hero-divider" />
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="container blog-container">
          {/* ── BLOG GRID ── */}
          <div className="blog-main">
            {loading ? (
              <div className="blog-empty">
                <BookOpen size={48} />
                <p>Loading articles…</p>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="blog-empty">
                <BookOpen size={48} />
                <p>No articles found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredBlogs.map(blog => {
                  const date = new Date(blog.publishDate);
                  const imgSrc = blog.thumbnail
                    ? (blog.thumbnail.startsWith('http') ? blog.thumbnail : `${import.meta.env.VITE_API_URL}${blog.thumbnail}`)
                    : null;

                  return (
                    <div className="blog-card" key={blog._id}>
                      <div className="blog-card-img">
                        {imgSrc
                          ? <img className="blog-card-img-inner" src={imgSrc} alt={blog.title} loading="lazy" />
                          : <div style={{ width:'100%', height:'100%', background: 'linear-gradient(135deg,#3b4657,#2e3847)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                              <BookOpen size={48} color="rgba(255,255,255,0.2)" />
                            </div>
                        }
                        <div className="blog-card-img-overlay" />
                        <div className="blog-date-badge">
                          <span className="day">{date.getDate()}</span>
                          <span className="month">{date.toLocaleString('default', { month: 'short' })}</span>
                        </div>
                        {blog.category && <span className="blog-card-tag">{blog.category}</span>}
                      </div>
                      <div className="blog-card-content">
                        <h3 className="blog-card-title">{blog.title}</h3>
                        <p className="blog-card-excerpt">{blog.excerpt || getExcerpt(blog.content)}</p>
                        <div className="blog-card-footer">
                          <Link to={`/blog/${blog._id}`} className="blog-read-more">
                            Read Article <span className="blog-read-more-arrow">→</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="blog-sidebar">
            {/* Search */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Search</h3>
              <input
                type="text"
                className="search-input"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
              />
              <button className="search-btn" onClick={handleSearch}>
                <Search size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Search
              </button>
            </div>

            {/* Book a Consultation */}
            <div className="sidebar-consult-widget">
              <h3 className="sidebar-title">Book a Consultation</h3>
              <form onSubmit={handleConsultSubmit}>
                <div className="consult-form-group">
                  <label className="consult-form-label">Full Name *</label>
                  <input type="text" className="consult-form-input" placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="consult-form-group">
                  <label className="consult-form-label">Phone Number *</label>
                  <input type="tel" className="consult-form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required />
                </div>
                <button type="submit" className="consult-submit-btn" disabled={submitting}>
                  {submitting ? 'Sending…' : 'Book Free Consultation →'}
                </button>
                {formStatus.msg && <div className={`consult-status ${formStatus.type}`}>{formStatus.msg}</div>}
              </form>
            </div>

            {/* Categories */}
            <div className="sidebar-widget">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="category-list">
                {categories.map(cat => (
                  <li key={cat._id}>
                    <Link
                      to="#"
                      style={selectedCategory === cat.name ? { color: 'var(--blog-gold)', background: 'rgba(197,123,67,0.08)' } : {}}
                      onClick={e => { e.preventDefault(); handleCategoryClick(cat.name); }}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
      <FloatingWidgets />
      <Footer />
    </>
  );
};

export default BlogList;
