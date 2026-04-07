import React, { useEffect, useState } from 'react';
import './ClinicGallery.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft, Folder } from 'lucide-react';

const staticGalleryImages = [
  { id: 0, src: '/clinic-gallery/uploaded_media_0_1774511569819.jpg', alt: 'Clinic Interior 1', size: 'large' },
  { id: 1, src: '/clinic-gallery/uploaded_media_1_1774511569819.jpg', alt: 'Clinic Interior 2', size: 'medium' },
  { id: 2, src: '/clinic-gallery/uploaded_media_2_1774511569819.jpg', alt: 'Clinic Interior 3', size: 'medium' },
  { id: 3, src: '/clinic-gallery/uploaded_media_3_1774511569819.jpg', alt: 'Clinic Interior 4', size: 'large' },
  { id: 4, src: '/clinic-gallery/uploaded_media_4_1774511569819.jpg', alt: 'Clinic Interior 5', size: 'wide' },
  { id: 5, src: '/clinic-gallery/media__1774513230942.jpg', alt: 'Clinic Interior 6', size: 'large' },
  { id: 6, src: '/clinic-gallery/media__1774513251008.jpg', alt: 'Clinic Interior 7', size: 'medium' },
  { id: 7, src: '/clinic-gallery/media__1774513256630.jpg', alt: 'Clinic Interior 8', size: 'wide' },
  { id: 8, src: '/clinic-gallery/media__1774513262076.jpg', alt: 'Clinic Interior 9', size: 'medium' },
  { id: 9, src: '/clinic-gallery/media__1774513272363.jpg', alt: 'Clinic Interior 10', size: 'medium' }
];

const ClinicGallery = () => {
  const [folders, setFolders] = useState([]);
  const [viewState, setViewState] = useState('folders'); // 'folders' | 'images'
  const [selectedFolder, setSelectedFolder] = useState(null);
  
  const [dynamicImages, setDynamicImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchFolders = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folders`);
        if (res.ok) {
          const data = await res.json();
          setFolders(data);
        }
      } catch (err) {
        console.error("Error fetching gallery folders", err);
      }
    };
    
    fetchFolders();
  }, []);

  const openFolder = async (folder) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/folders/${folder._id}/images`);
      if (res.ok) {
        const data = await res.json();
        // Map backend images to the required gallery object format
        const formatted = data.map((img, index) => {
          const sizes = ['large', 'medium', 'medium', 'wide', 'medium'];
          return {
            id: img._id,
            src: img.imageUrl,
            alt: img.title || `Clinic Image ${index + 1}`,
            title: img.title,
            description: img.description,
            size: sizes[index % 5]
          };
        });
        setDynamicImages(formatted);
        setSelectedFolder(folder);
        setViewState('images');
      }
    } catch (err) {
      console.error("Error fetching folder images", err);
    }
  };

  const displayImages = dynamicImages.length > 0 ? dynamicImages : (viewState === 'folders' ? [] : staticGalleryImages);

  const openLightbox = (img) => {
    setSelectedImage({
      ...img,
      title: img.title || img.alt,
      description: img.description || 'A beautiful shot from our clinic gallery.'
    });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header />
      <main className="clinic-gallery-page">
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <h1 className="glitch-text" data-text="Gallery">Gallery</h1>
            <p className="hero-subtitle">State-of-the-art facilities and life-changing smile transformations.</p>
            <div className="neon-divider"></div>
          </div>
        </section>

        <section className="gallery-container">
          
          {/* Breadcrumb Navigation when viewing images */}
          {viewState === 'images' && (
            <div className="gallery-breadcrumb fade-in">
              <button className="back-btn" onClick={() => setViewState('folders')}>
                <ArrowLeft size={18} /> Folders
              </button>
              <h2 className="folder-title">{selectedFolder?.name}</h2>
            </div>
          )}

          <div className="masonry-grid">
            
            {/* View State: FOLDERS */}
            {viewState === 'folders' && (
              folders.length > 0 ? (
                folders.map((folder) => (
                  <div 
                    key={folder._id} 
                    className="gallery-item large"
                    onClick={() => openFolder(folder)}
                  >
                    <div className="image-wrapper">
                      <img src={folder.thumbnailUrl} alt={folder.name} loading="lazy" />
                      <div className="image-overlay">
                        <span className="view-text">View Gallery</span>
                      </div>
                      <div className="folder-card-meta">
                        <Folder size={24} color="var(--primary-gold)" />
                        <h3>{folder.name}</h3>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#888'}}>
                  Loading Gallery Folders...
                </div>
              )
            )}

            {/* View State: IMAGES */}
            {viewState === 'images' && (
              displayImages.length > 0 ? (
                displayImages.map((image) => (
                  <div 
                    key={image.id} 
                    className={`gallery-item ${image.size}`}
                    onClick={() => openLightbox(image)}
                  >
                    <div className="image-wrapper">
                      <img src={image.src} alt={image.alt} loading="lazy" />
                      <div className="image-overlay">
                        <span className="view-text">Reveal Image</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{gridColumn: '1 / -1', textAlign: 'center', padding: '50px', color: '#888'}}>
                  This folder currently has no images.
                </div>
              )
            )}

          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <span className="close-btn" onClick={closeLightbox}>&times;</span>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <div className="lightbox-metadata">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ClinicGallery;
