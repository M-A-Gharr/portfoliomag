
import { Code, Globe, ShoppingBag, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

type Project = {
  id: number;
  icon: JSX.Element;
  link?: string;
  demo?: string;
};

const ProjectsSection = () => {
  const { t } = useTranslation();
  
  const projects: Project[] = [
    {
      id: 1,
      icon: <ShoppingBag className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#"
    },
    {
      id: 2,
      icon: <Globe className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#"
    },
    {
      id: 3,
      icon: <User className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#"
    },
    {
      id: 4,
      icon: <ShoppingBag className="h-8 w-8 text-highlight" />,
      link: "#",
      demo: "#"
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
          <div 
            key={project.id}
            className="group bg-secondary/20 border border-secondary/20 rounded-xl overflow-hidden transition-all duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
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
                  {t(`projects.items.${project.id}.technologies`, { returnObjects: true }).map((tech: string) => (
                    <Badge key={tech} variant="outline" className="bg-secondary/30 hover:bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-foreground/70 mb-2">{t('projects.features')}</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                  {t(`projects.items.${project.id}.features`, { returnObjects: true }).map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
