import { useState } from 'react';
import TestimonialsCarousel from './testimonials/TestimonialsCarousel';
import BlogPostsCarousel from './blog/BlogPostsCarousel';
import FreelanceAvailability from './freelance/FreelanceAvailability';
import { useTranslation } from 'react-i18next';
const BonusProfessionnelsSection = () => {
  const {t} = useTranslation();

  return (
    <section
      id="bonus-professionnels"
      className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-background to-background/90 overflow-hidden"
    >
      {/* Glowing background bubbles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-highlight/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-highlight-dark/20 rounded-full blur-3xl z-0" />

      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 animate-fade-in">
          {t(`bonus.sectionTitle`)}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Testimonials */}
          <div className="bg-secondary/20 border border-secondary/20 rounded-xl p-6 transition-all duration-300 hover:border-highlight hover:shadow-xl hover:shadow-highlight/10 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.testimonials`)}</h3>
            <TestimonialsCarousel />
          </div>

          {/* Blog */}
          <div className="bg-secondary/20 border border-secondary/20 rounded-xl p-6 transition-all duration-300 hover:border-highlight hover:shadow-xl hover:shadow-highlight/10 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.blog`)}</h3>
            <BlogPostsCarousel />
          </div>

          {/* Availability */}
          <div className="bg-secondary/20 border border-secondary/20 rounded-xl p-6 transition-all duration-300 hover:border-highlight hover:shadow-xl hover:shadow-highlight/10 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-4">{t(`bonus.availability`)}</h3>
            <FreelanceAvailability />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusProfessionnelsSection;
