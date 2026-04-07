import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, BookOpen } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';
import './Blog.css';

const categories = [
  'Anti Aging', 'Dental Implants', 'Oral Hygiene',
  'Smile Makeover', 'Children Dentistry', 'Clear Aligners'
];

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [form, setForm] = useState({ name: '', phone: '' });
  const [formStatus, setFormStatus] = useState({ type: '', msg: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
          document.title = `${data.title} | 32 Signature Smilez`;
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelated = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/blogs`);
        if (res.ok) {
          const data = await res.json();
          setRelatedBlogs(data.filter(b => b._id !== id).slice(0, 3));
        }
      } catch {}
    };

    fetchBlog();
    fetchRelated();
  }, [id]);

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
        setFormStatus({ type: 'error', msg: 'Failed to send. Please call us directly.' });
      }
    } catch {
      setFormStatus({ type: 'error', msg: 'Cannot connect. Please call us directly.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return (
    <>
      <Header />
      <div style={{ padding: '160px 20px', textAlign: 'center', background: '#f9fafb', minHeight: '100vh' }}>
        <BookOpen size={48} color="#c57b43" style={{ opacity: 0.5 }} />
        <p style={{ color: '#6b7280', marginTop: '16px' }}>Loading article…</p>
      </div>
      <Footer />
    </>
  );

  if (!blog) return (
    <>
      <Header />
      <div style={{ padding: '160px 20px', textAlign: 'center', background: '#f9fafb', minHeight: '100vh' }}>
        <p style={{ color: '#6b7280' }}>Blog post not found.</p>
        <Link to="/blog" style={{ color: '#c57b43', fontWeight: 600 }}>← Back to Blog</Link>
      </div>
      <Footer />
    </>
  );

  const thumbnail = blog.thumbnail
    ? (blog.thumbnail.startsWith('http') ? blog.thumbnail : `${import.meta.env.VITE_API_URL}${blog.thumbnail}`)
    : null;

  return (
    <>
      <Header />
      <div className="blog-page">
        {/* HERO — driven by blog title */}
        <section className="blog-hero" style={{ textAlign: 'left', padding: '140px 20px 60px' }}>
          <div className="container">
            <Link to="/blog" className="back-to-blog">← Back to Blog</Link>
            <h1 style={{ fontSize: 'clamp(1.9rem,4vw,3rem)', marginTop: '12px' }}>{blog.title}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '14px' }}>
              <Calendar size={15} />
              {new Date(blog.publishDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </section>

        <section className="container blog-container" style={{ paddingTop: '48px' }}>
          {/* ── POST CONTENT ── */}
          <div className="blog-main">
            {thumbnail && (
              <img src={thumbnail} alt={blog.title} className="post-thumbnail" />
            )}
            <div className="post-content" dangerouslySetInnerHTML={{ __html: blog.content }} />

            {/* Related Articles */}
            {relatedBlogs.length > 0 && (
              <div style={{ marginTop: '60px', borderTop: '2px solid #e5e7eb', paddingTop: '40px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', color: '#3b4657', marginBottom: '24px' }}>Related Articles</h3>
                <div className="blog-grid">
                  {relatedBlogs.map(rb => {
                    const imgSrc = rb.thumbnail
                      ? (rb.thumbnail.startsWith('http') ? rb.thumbnail : `${import.meta.env.VITE_API_URL}${rb.thumbnail}`)
                      : null;
                    const date = new Date(rb.publishDate);
                    return (
                      <div className="blog-card" key={rb._id}>
                        <div className="blog-card-img">
                          {imgSrc
                            ? <img className="blog-card-img-inner" src={imgSrc} alt={rb.title} loading="lazy" />
                            : <div style={{ width:'100%', height:'100%', background:'linear-gradient(135deg,#3b4657,#2e3847)', display:'flex', alignItems:'center', justifyContent:'center' }}><BookOpen size={40} color="rgba(255,255,255,0.2)" /></div>
                          }
                          <div className="blog-card-img-overlay" />
                          <div className="blog-date-badge">
                            <span className="day">{date.getDate()}</span>
                            <span className="month">{date.toLocaleString('default', { month: 'short' })}</span>
                          </div>
                        </div>
                        <div className="blog-card-content">
                          <h3 className="blog-card-title">{rb.title}</h3>
                          <div className="blog-card-footer">
                            <Link to={`/blog/${rb._id}`} className="blog-read-more">
                              Read Article <span className="blog-read-more-arrow">→</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside className="blog-sidebar">
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
                  <li key={cat}>
                    <Link to="/blog">{cat}</Link>
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

export default BlogPost;
