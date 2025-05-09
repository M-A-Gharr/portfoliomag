import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '@/i18n/config';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Update document title and meta description when language changes
    document.title = t('hero.title') + ' | M.A.G';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('hero.subtitle'));
    }
    
    // Set the document dir attribute based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [t, i18n.language]);

  return (
    <div className="min-h-screen bg-background text-foreground" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;