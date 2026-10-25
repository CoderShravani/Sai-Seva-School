import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import { SchoolDataProvider } from './context/SchoolDataContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { AdmissionFormModal } from './components/AdmissionFormModal';
import { DonationModal } from './components/DonationModal';
import { VolunteerModal } from './components/VolunteerModal';
import { AdminConfigModal } from './components/AdminConfigModal';
import { LightboxModal } from './components/LightboxModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { DonatePage } from './pages/DonatePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyAndChildProtectionPage } from './pages/PrivacyAndChildProtectionPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { AcademicEducationPage } from './pages/AcademicEducationPage';
import { TherapeuticSupportPage } from './pages/TherapeuticSupportPage';
import { LifeSkillsPage } from './pages/LifeSkillsPage';
import { VocationalTrainingPage } from './pages/VocationalTrainingPage';
import { CoCurricularPage } from './pages/CoCurricularPage';
import { CounsellingPage } from './pages/CounsellingPage';
import { GalleryItem } from './types';

type RouteState = {
  activeTab: string;
  selectedProgramId: string | null;
};

function getRouteState(pathname: string): RouteState {
  const path = pathname.replace(/\/+$/, '') || '/';

  const programRoutes: Record<string, string> = {
    '/programs/academic': 'academic',
    '/programs/therapy': 'therapy',
    '/programs/lifeskills': 'lifeskills',
    '/programs/vocational': 'vocational',
    '/programs/cocurricular': 'cocurricular',
    '/programs/counselling': 'counselling',
  };

  if (programRoutes[path]) {
    return { activeTab: 'programs', selectedProgramId: programRoutes[path] };
  }

  const routes: Record<string, string> = {
    '/': 'home',
    '/about': 'about',
    '/programs': 'programs',
    '/facilities': 'facilities',
    '/admissions': 'admissions',
    '/gallery': 'gallery',
    '/achievements': 'achievements',
    '/donate': 'donate',
    '/faq': 'faq',
    '/contact': 'contact',
    '/privacy': 'privacy',
    '/terms': 'terms',
  };

  return { activeTab: routes[path] || 'home', selectedProgramId: null };
}

function routeForState(activeTab: string, selectedProgramId: string | null): string {
  if (selectedProgramId) {
    return `/programs/${selectedProgramId}`;
  }

  const routes: Record<string, string> = {
    home: '/',
    about: '/about',
    programs: '/programs',
    facilities: '/facilities',
    admissions: '/admissions',
    gallery: '/gallery',
    achievements: '/achievements',
    donate: '/donate',
    faq: '/faq',
    contact: '/contact',
    privacy: '/privacy',
    terms: '/terms',
    'terms-conditions': '/terms',
    'terms-disclaimer': '/terms',
    academic: '/programs/academic',
    therapy: '/programs/therapy',
    lifeskills: '/programs/lifeskills',
    vocational: '/programs/vocational',
    cocurricular: '/programs/cocurricular',
    counselling: '/programs/counselling',
  };

  return routes[activeTab] || '/';
}


export function MainAppContent() {
  const [activeTab, setActiveTab] = useState<string>(() => getRouteState(window.location.pathname).activeTab);
  const [selectedProgramId, setSelectedProgramId] = useState<string | null>(() => getRouteState(window.location.pathname).selectedProgramId);
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isAccessibilityToolbarOpen, setIsAccessibilityToolbarOpen] = useState(false);
  const [isAdminConfigModalOpen, setIsAdminConfigModalOpen] = useState(false);
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  // Keep the address synchronized with the selected page.
useEffect(() => {
  const syncFromUrl = () => {
    const route = getRouteState(window.location.pathname);
    setActiveTab(route.activeTab);
    setSelectedProgramId(route.selectedProgramId);
  };

  window.addEventListener('popstate', syncFromUrl);
  return () => window.removeEventListener('popstate', syncFromUrl);
}, []);

useEffect(() => {
  const targetPath = routeForState(activeTab, selectedProgramId);

  if (window.location.pathname !== targetPath) {
    window.history.pushState({}, '', targetPath);
  }
}, [activeTab, selectedProgramId]);
// Scroll to top whenever tab or selected program changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, selectedProgramId]);

  const handleSelectProgram = (programId: string) => {
    setSelectedProgramId(programId);
    setActiveTab('programs');
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab !== 'programs') {
      setSelectedProgramId(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 transition-colors">
      {/* 1. Universal Responsive Sticky Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenAdmission={() => setIsAdmissionModalOpen(true)}
        onOpenDonate={() => handleTabChange('donate')}
        onOpenAccessibility={() => setIsAccessibilityToolbarOpen(true)}
        onOpenAdminModal={() => setIsAdminConfigModalOpen(true)}
        onSelectProgram={handleSelectProgram}
      />

      {/* 2. Main Page Content View Switcher */}
      <main id="main-content" className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onOpenDonate={() => handleTabChange('donate')}
            setActiveTab={handleTabChange}
            onOpenLightbox={(item) => setSelectedLightboxItem(item)}
            onSelectProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigateHome={() => handleTabChange('home')}
            onNavigateDonate={() => handleTabChange('donate')}
          />
        )}

        {activeTab === 'academic' && (
          <AcademicEducationPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'therapy' && (
          <TherapeuticSupportPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'lifeskills' && (
          <LifeSkillsPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'vocational' && (
          <VocationalTrainingPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'cocurricular' && (
          <CoCurricularPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'counselling' && (
          <CounsellingPage
            onBack={() => handleTabChange('home')}
            onNavigateHome={() => handleTabChange('home')}
            onNavigatePrograms={() => handleTabChange('programs')}
            onOpenAdmission={() => setIsAdmissionModalOpen(true)}
            onSelectOtherProgram={handleSelectProgram}
          />
        )}

        {activeTab === 'programs' && (
          selectedProgramId ? (
            selectedProgramId === 'academic' ? (
              <AcademicEducationPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : selectedProgramId === 'therapy' ? (
              <TherapeuticSupportPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : selectedProgramId === 'lifeskills' ? (
              <LifeSkillsPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : selectedProgramId === 'vocational' ? (
              <VocationalTrainingPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : selectedProgramId === 'cocurricular' ? (
              <CoCurricularPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : selectedProgramId === 'counselling' ? (
              <CounsellingPage
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
                onNavigatePrograms={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={handleSelectProgram}
              />
            ) : (
              <ProgramDetailPage
                programId={selectedProgramId}
                onBack={() => {
                  setSelectedProgramId(null);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAdmission={() => setIsAdmissionModalOpen(true)}
                onSelectOtherProgram={(id) => {
                  setSelectedProgramId(id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onNavigateHome={() => handleTabChange('home')}
              />
            )
          ) : (
            <ProgramsPage
              onOpenAdmission={() => setIsAdmissionModalOpen(true)}
              onSelectProgram={handleSelectProgram}
              onNavigateHome={() => handleTabChange('home')}
            />
          )
        )}

        {activeTab === 'facilities' && (
          <FacilitiesPage onNavigateHome={() => handleTabChange('home')} />
        )}

        {activeTab === 'admissions' && (
          <AdmissionsPage
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
            onNavigateHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage
            onOpenLightbox={(item) => setSelectedLightboxItem(item)}
            onNavigateHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'achievements' && (
          <AchievementsPage onNavigateHome={() => handleTabChange('home')} />
        )}

        {activeTab === 'donate' && (
          <DonatePage
            onOpenDonateModal={() => setIsDonationModalOpen(true)}
            onOpenVolunteerModal={() => setIsVolunteerModalOpen(true)}
            onNavigateHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'faq' && (
          <FaqPage
            onOpenAdmissionModal={() => setIsAdmissionModalOpen(true)}
            onNavigateHome={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage onNavigateHome={() => handleTabChange('home')} />
        )}

        {activeTab === 'privacy' && (
          <PrivacyAndChildProtectionPage onNavigateHome={() => handleTabChange('home')} />
        )}

        {(activeTab === 'terms' || activeTab === 'terms-conditions' || activeTab === 'terms-disclaimer') && (
          <TermsAndConditionsPage onNavigateHome={() => handleTabChange('home')} />
        )}
      </main>

      {/* 3. Comprehensive Institutional Footer */}
      <Footer
        setActiveTab={handleTabChange}
        onOpenAdmission={() => setIsAdmissionModalOpen(true)}
        onOpenDonate={() => handleTabChange('donate')}
        onOpenAdminModal={() => setIsAdminConfigModalOpen(true)}
        onOpenAccessibility={() => setIsAccessibilityToolbarOpen(true)}
      />

      {/* 4. Modals & Accessibility Overlays */}
      <AdmissionFormModal
        isOpen={isAdmissionModalOpen}
        onClose={() => setIsAdmissionModalOpen(false)}
      />

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />

      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />

      <AccessibilityToolbar
        isOpen={isAccessibilityToolbarOpen}
        onClose={() => setIsAccessibilityToolbarOpen(false)}
      />

      <AdminConfigModal
        isOpen={isAdminConfigModalOpen}
        onClose={() => setIsAdminConfigModalOpen(false)}
      />

      <LightboxModal
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <SchoolDataProvider>
          <MainAppContent />
        </SchoolDataProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  );
}

