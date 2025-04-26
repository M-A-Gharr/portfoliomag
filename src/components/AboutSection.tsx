
import { useTranslation } from 'react-i18next';
import { Briefcase, Star, Quote } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="section-container">
      <h2 className="section-title text-center">{t('about.title')}</h2>
      
      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-highlight mb-6 animate-fade-in">
            <img 
              src="/portfoliomag/images/profilecartoonblurdark.png"
              alt="Developer profile dark mode"
              className="w-full h-full object-cover dark:block hidden"
            />
            <img 
              src="/portfoliomag/images/profilecartoonblur.png" 
              alt="Developer profile light mode"
              className="w-full h-full object-cover dark:hidden block"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="bg-secondary/30 p-6 rounded-xl max-w-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-3">
              <Quote className="text-highlight h-8 w-8 mr-2" />
            </div>
            <p className="text-xl italic text-center font-medium">
              {t('hero.quote')}
            </p>
          </div>
        </div>
        
        <div className="lg:w-2/3 space-y-8">
          {/* Resume */}
          <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <Briefcase className="mr-3 text-highlight" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.resume.title')}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-highlight/60 pl-4 ml-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{t('about.resume.current')}</span>
                  <h4 className="text-lg font-medium">{t('about.resume.currentRole')}</h4>
                  <p className="text-foreground/80">
                    {t('about.resume.currentDesc')}
                  </p>
                </div>
              </div>
              
              <div className="border-l-2 border-highlight/60 pl-4 ml-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{t('about.resume.previous')}</span>
                  <h4 className="text-lg font-medium">{t('about.resume.previousRole')}</h4>
                  <p className="text-foreground/80">
                    {t('about.resume.previousDesc')}
                  </p>
                </div>
              </div>
              
              <div className="border-l-2 border-highlight/60 pl-4 ml-2">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{t('about.resume.education')}</span>
                  <h4 className="text-lg font-medium">{t('about.resume.educationRole')}</h4>
                  <p className="text-foreground/80">
                    {t('about.resume.educationDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Objectifs */}
          <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <Star className="mr-3 text-highlight" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.goals.title')}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.expertise.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.expertise.desc')}
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.innovation.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.innovation.desc')}
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.impact.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.impact.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
