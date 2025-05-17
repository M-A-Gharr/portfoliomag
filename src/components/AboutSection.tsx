
import { useTranslation } from 'react-i18next';
import { Briefcase, Link,CalendarIcon, Code, Layout, Brush, Star, Quote, Database, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Element } from 'react-scroll';


const AboutSection = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showCalendar, setShowCalendar] = useState(false);
  const services = [
    {
      icon: <Code className="h-10 w-10 text-highlight" />,
      title: t('about.services.web.title'),
      description: t('about.services.web.desc')
    },
    {
      icon: <Layout className="h-10 w-10 text-highlight" />,
      title: t('about.services.front.title'),
      description: t('about.services.front.desc')
    },
    {
      icon: <Brush className="h-10 w-10 text-highlight" />,
      title: t('about.services.ui.title'),
      description: t('about.services.ui.desc')
    }
  ];

  const handleBookNow = () => {
    if (date) {
      // In a real implementation, this would send the booking request
      console.log(`Booking requested for: ${format(date, 'PPP')}`);
      window.open('mailto:maminegharr@gmail.com?subject='+t('about.book.emailsubject')+'&body='+t('about.book.emailbody')+ 
        (date ? ` on ${format(date, 'PPP')}` : ''), '_blank');
    } else {
      setShowCalendar(true);
    }
  };

  return (
    <section id="about" className="section-container">
      <h2 className="section-title text-center">{t('about.title')}</h2>
      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-highlight mb-6 animate-fade-in group  transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10">
            <img 
              src="/images/profile/magprofile.png"
              alt="Developer mohamed amine gharrab profile dark mode"
              className="w-full h-full object-cover dark:block hidden transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <img 
              src="/images/profile/magprofile.png"
              alt="Developer mohamed amine gharrab profile light mode"
              className="w-full h-full object-cover dark:hidden block transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          
          <div className="p-6 rmax-w-md group bg-secondary/20 border border-secondary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-center mb-3">
              <Quote className="text-highlight h-8 w-8 mr-2" />
            </div>
            <p className="text-xl italic text-center font-medium ">
              {t('hero.quote')}
            </p>
          </div>
        </div>
        
        <div className="lg:w-2/3 space-y-8">
          {/* Resume */}
          <div className="bg-secondary/20 rounded-xl p-6 border border-secondary/20 overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center mb-6">
              <Briefcase className="mr-3 text-highlight" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.resume.title')}</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 rounded-lg border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{t('about.resume.current')}</span>
                  <h4 className="text-lg font-medium">{t('about.resume.currentRole')}</h4>
                  <p className="text-foreground/80">
                    {t('about.resume.currentDesc')}
                  </p>
                </div>
              </div>
              
              <div className="border-l-2 rounded-lg border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">{t('about.resume.previous')}</span>
                  <h4 className="text-lg font-medium">{t('about.resume.previousRole')}</h4>
                  <p className="text-foreground/80">
                    {t('about.resume.previousDesc')}
                  </p>
                </div>
              </div>
              
              <div className="border-l-2 rounded-lg border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
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
          <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom border border-secondary/20 overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center mb-6">
              <Star className="mr-3 text-highlight" size={28} />
              <h3 className="text-2xl font-semibold">{t('about.goals.title')}</h3>
            </div>

            <div className="space-y-6">
              <div className="bg-secondary/10 p-4 rounded-lg border-l-2 border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.expertise.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.expertise.desc')}
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg border-l-2 border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.innovation.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.innovation.desc')}
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg border-l-2 border-highlight/60 pl-4 ml-2 transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in">
                <h4 className="text-lg font-medium text-highlight mb-2">{t('about.goals.impact.title')}</h4>
                <p className="text-foreground/80">
                  {t('about.goals.impact.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* services I offer */}
      <div className="bg-secondary/20 justify-center rounded-xl p-6 md:p-8 animate-slide-in-bottom border border-secondary/20 overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center justify-center mb-6">
          <Briefcase className="text-highlight mr-3" size={38} />
          <h3 className="text-2xl font-semibold">{t('about.services.title')}</h3>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border border-border bg-card/50 backdrop-blur-sm hover:bg-card  overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-fit p-3 rounded-full bg-primary/10 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Element name="book" className='w-full flex justify-center mt-10'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('about.book.title')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('about.book.desc')}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                    <Code className="mr-1 h-3 w-3" /> React
                  </Badge>
                  <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                    <Database className="mr-1 h-3 w-3" /> API Integration
                  </Badge>
                  <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                    <Search className="mr-1 h-3 w-3" /> SEO
                  </Badge>
                  <Badge variant="outline" className="bg-blue-950/30 hover:bg-blue-900/30 border-blue-800/30">
                    <Link className="mr-1 h-3 w-3" /> Web Development
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn(
                        "w-full sm:w-auto justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : t('about.book.date')}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => {
                          setDate(newDate);
                          setShowCalendar(false);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  
                  <Button 
                    className="bg-highlight hover:bg-highlight-dark text-white w-full sm:w-auto"
                    onClick={handleBookNow}
                  >
                    {t('about.book.button')}
                  </Button>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/10 rounded-full filter blur-3xl"></div>
                  <div className="relative bg-blue-950/40 border border-blue-800/30 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-lg font-medium mb-4">{t('about.book.availability')}</h4>
                    <Separator className="my-3 bg-blue-800/30" />
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>{t('about.book.consultation')}</span>
                        <Badge>{t('about.book.consultdesc')}</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>{t('about.book.dev')}</span>
                        <Badge>{t('about.book.devdesc')}</Badge>
                      </li>
                      <li className="flex justify-between">
                        <span>{t('about.book.techreview')}</span>
                        <Badge>{t('about.book.techreviewtime')}</Badge>
                      </li>
                    </ul>
                    <Separator className="my-3 bg-blue-800/30" />
                    <p className="text-sm text-muted-foreground">
                      {t('about.book.responsetime')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Element>
        </div>
    </section>
  );
};

export default AboutSection;
