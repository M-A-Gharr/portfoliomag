
import { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Youtube } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';
import Map from './Map';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate successful form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission notification after a few seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-highlight" />,
      label: t('contact.info.address'),
      value: t('contact.info.addressValue', 'Dubai, UAE'),
      link: null
    },
    {
      icon: <Mail className="h-5 w-5 text-highlight" />,
      label: t('contact.info.email'),
      value: "maminegharr@gmail.com",
      link: "mailto:maminegharr@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-highlight" />,
      label: t('contact.info.phone'),
      value: "+971 55 388 205",
      link: "tel:+971553882105"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-highlight" />,
      label: t('contact.info.linkedin'),
      value: "linkedin.com/in/m-amine-gharrab",
      link: "https://linkedin.com/in/m-amine-gharrab"
    },
    {
      icon: <Youtube className="h-5 w-5 text-highlight" />,
      label: t('contact.info.youtube'),
      value: "youtube.com/@username",
      link: "https://youtube.com/@username"
    }
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">{t('contact.title')}</h2>
      <p className="section-subtitle text-center max-w-3xl mx-auto">
        {t('contact.subtitle')}
      </p>
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom">
          <h3 className="text-2xl font-semibold mb-6">{t('contact.form.title')}</h3>
          
          {isSubmitted ? (
            <div className="p-4 bg-highlight/20 border border-highlight/30 rounded-lg mb-6">
              <p className="text-foreground font-medium">
                {t('contact.form.success')}
              </p>
            </div>
          ) : null}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">{t('contact.form.name')}</Label>
              <Input
                id="name"
                name="name"
                placeholder={t('contact.form.name')}
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="email">{t('contact.form.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('contact.form.email')}
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="message">{t('contact.form.message')}</Label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('contact.form.message')}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 min-h-[120px]"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-highlight hover:bg-highlight-dark text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </Button>
          </form>
        </div>
        
        {/* Contact and map */}
        <div className="space-y-8">
          <div className="bg-secondary/20 rounded-xl p-6 md:p-8 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-secondary/30 rounded-md mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/70">{item.label}</p>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-highlight transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[300px] rounded-xl overflow-hidden animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
