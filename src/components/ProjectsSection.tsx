import { useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Globe, ShoppingBag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {motion, AnimatePresence}  from 'framer-motion';

type Project = {
  id: number;
  icon: JSX.Element;
  link?: string;
  demo?: string;
  images: string[]; // tablrau pour les url des images
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  
  const openModal = (images: string[]) => {
    setSelectedImages(images);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedImages([]);
  };

  const projects: Project[] = [
    {
      id: 1,
      icon: <ShoppingBag className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#",
      images: ["/images/profilecartoonblur.png","/images/profilecartoonblur.png","/images/profilecartoonblur.png"]
    },
    {
      id: 2,
      icon: <Globe className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#",
      images:["/images/profilecartoonblur.png","/images/profilecartoonblur.png","/images/profilecartoonblur.png"]
    },
    {
      id: 3,
      icon: <User className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#",
      images:["/images/profilecartoonblur.png","/images/profilecartoonblur.png","/images/profilecartoonblur.png"]
    },
    {
      id: 4,
      icon: <ShoppingBag className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#",
      images:["/images/profilecartoonblur.png","/images/profilecartoonblur.png","/images/profilecartoonblur.png"]
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">{t('projects.title')}</h2>
      <p className="section-subtitle text-center max-w-3xl mx-auto">
        {t('projects.subtitle')}
      </p>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="group bg-secondary/20 border border-secondary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-secondary/30 rounded-md">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{t(`projects.items.${project.id}.title`)}</h3>
                </div>
                <div className="flex space-x-1">
                  {project.link && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <p className="text-foreground/80 mb-4">{t(`projects.items.${project.id}.description`)}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{t('projects.technologies')}</h4>
                <div className="flex flex-wrap gap-2">
                {Array.isArray(t(`projects.items.${project.id}.technologies`, { returnObjects: true })) &&
  (t(`projects.items.${project.id}.technologies`, { returnObjects: true }) as string[]).map((tech, i) => (
                    <Badge key={tech} variant="outline" className="bg-secondary/30 hover:bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{t('projects.features')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                {Array.isArray(t(`projects.items.${project.id}.features`, { returnObjects: true })) &&
  (t(`projects.items.${project.id}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              {/* Swiper Slideshow */}
              {project.images.length > 0 && (
                <div className="mt-6 cursor-pointer" onClick={() => openModal(project.images)}>
                  <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={1}
                    className="rounded-lg overflow-hidden"
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img src={img} alt={`Project ${project.id} Image ${i + 1}`} className="w-full h-64 object-cover" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Popup Modal for slideshow */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl bg-white dark:bg-black rounded-xl overflow-hidden shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 text-gray-600 hover:text-black text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
        >
          ×
        </button>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          className="rounded-lg"
        >
          {selectedImages.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Selected Image ${i + 1}`}
                className="w-full h-[500px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default ProjectsSection;
