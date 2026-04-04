import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import Treatments from './components/Treatments';
import FounderSection from './components/FounderSection';
import ServicesGrid from './components/ServicesGrid';
import Testimonials from './components/Testimonials';
import FloatingWidgets from './components/FloatingWidgets';
import WelcomeSection from './components/WelcomeSection';
import ContactSection from './components/ContactSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import TreatmentPage from './pages/TreatmentPage';
import AdminBlogList from './pages/AdminBlogList';
import AdminBlogCreate from './pages/AdminBlogCreate';
import AdminGallery from './pages/AdminGallery';
import AdminReviews from './pages/AdminReviews';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ClinicGallery from './pages/ClinicGallery';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import NewPatientsPage from './pages/NewPatientsPage';
import ProblemsWeTreat from './pages/ProblemsWeTreat';
import BadBreath from './pages/BadBreath';
import CosmeticDentistry from './pages/CosmeticDentistry';
import TeethWhitening from "./pages/TeethWhitening";
import DentalBonding from "./pages/DentalBonding";
import DentalCrowns from "./pages/DentalCrowns";
import Veneers from "./pages/Veneers";
import RestorativeDentistry from "./pages/RestorativeDentistry";
import ImplantRestoration from "./pages/ImplantRestoration";
import Bridges from "./pages/Bridges";
import SameDayCrowns from "./pages/SameDayCrowns";
import InlaysOnlays from "./pages/InlaysOnlays";
import GeneralDentistry from "./pages/GeneralDentistry";
import CleaningsExams from "./pages/CleaningsExams";
import Fillings from "./pages/Fillings";
import MercuryFillingRemoval from "./pages/MercuryFillingRemoval";
import Sedation from "./pages/Sedation";
import FamilyDentistry from "./pages/FamilyDentistry";
import PediatricDentistry from "./pages/PediatricDentistry";
import EmergencyDentistry from "./pages/EmergencyDentistry";
import Mouthguards from "./pages/Mouthguards";
import Sealants from "./pages/Sealants";
import GumTreatment from "./pages/GumTreatment";
import FluorideTreatment from "./pages/FluorideTreatment";
import ToothExtractions from "./pages/ToothExtractions";
import SpecialNeedsDentistry from "./pages/SpecialNeedsDentistry";
import MaxillofacialSurgery from "./pages/MaxillofacialSurgery";
import MinorOralSurgery from "./pages/MinorOralSurgery";
import DentalImplants from "./pages/DentalImplants";
import SmileMakeover from "./pages/SmileMakeover";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Treatments />
        <FounderSection />
        <ServicesGrid />
        <FAQ />
        <Testimonials />
        <WelcomeSection />
        <ContactSection />
      </main>
      <FloatingWidgets />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatment/:slug" element={<TreatmentPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/blogs" element={<AdminBlogList />} />
          <Route path="/admin/blog/new" element={<AdminBlogCreate />} />
          <Route path="/admin/gallery" element={<AdminGallery />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/clinic" element={<ClinicGallery />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/new-patients" element={<NewPatientsPage />} />
          <Route path="/problems-we-treat" element={<ProblemsWeTreat />} />
          <Route path="/bad-breath" element={<BadBreath />} />
          <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
          <Route path="/teeth-whitening" element={<TeethWhitening />} />
          <Route path="/dental-bonding" element={<DentalBonding />} />
          <Route path="/dental-crowns" element={<DentalCrowns />} />
          <Route path="/veneers" element={<Veneers />} />
          <Route path="/treatment/restorative" element={<RestorativeDentistry />} />
          <Route path="/treatment/implant-restoration" element={<ImplantRestoration />} />
          <Route path="/treatment/bridges" element={<Bridges />} />
          <Route path="/treatment/same-day-crowns" element={<SameDayCrowns />} />
          <Route path="/treatment/inlays-onlays" element={<InlaysOnlays />} />
          <Route path="/treatment/general-dentistry" element={<GeneralDentistry />} />
          <Route path="/treatment/cleaning-exams" element={<CleaningsExams />} />
          <Route path="/treatment/fillings" element={<Fillings />} />
          <Route path="/treatment/mercury-filling-removal" element={<MercuryFillingRemoval />} />
          <Route path="/treatment/sedation" element={<Sedation />} />
          <Route path="/treatment/family-dentistry" element={<FamilyDentistry />} />
          <Route path="/treatment/pediatric-dentistry" element={<PediatricDentistry />} />
          <Route path="/treatment/emergency-dentistry" element={<EmergencyDentistry />} />
          <Route path="/treatment/mouthguards" element={<Mouthguards />} />
          <Route path="/treatment/sealants" element={<Sealants />} />
          <Route path="/treatment/gum-treatment" element={<GumTreatment />} />
          <Route path="/treatment/fluoride-treatment" element={<FluorideTreatment />} />
          <Route path="/treatment/tooth-extractions" element={<ToothExtractions />} />
          <Route path="/treatment/special-needs-dentistry" element={<SpecialNeedsDentistry />} />
          <Route path="/treatment/maxillofacial-surgery" element={<MaxillofacialSurgery />} />
          <Route path="/treatment/minor-oral-surgery" element={<MinorOralSurgery />} />
          <Route path="/treatment/dental-implants" element={<DentalImplants />} />
          <Route path="/treatment/smile-makeover" element={<SmileMakeover />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
