
import { useTranslation } from 'react-i18next';
import { Badge } from '@/components/ui/badge';
import { 
  Code, Database, GitBranch, FileCode, 
  Cpu, Palette, Globe, Layout,
  Languages, Lightbulb 
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon?: JSX.Element;
};

type SkillCategory = {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
};

const SkillsSection = () => {
  const { t } = useTranslation();

  const skillCategories: SkillCategory[] = [
    {
      name: t('skills.frontend'),
      icon: <Layout className="h-6 w-6 text-highlight" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 85 },
        { name: 'Tailwind', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
      ]
    },
    {
      name: t('skills.backend'),
      icon: <Database className="h-6 w-6 text-highlight" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'Firebase', level: 80 },
      ]
    },
    {
      name: t('skills.tools'),
      icon: <GitBranch className="h-6 w-6 text-highlight" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: 'Postman', level: 85 },
      ]
    },
    {
      name: t('skills.other'),
      icon: <Palette className="h-6 w-6 text-highlight" />,
      skills: [
        { name: 'Figma', level: 75 },
        { name: 'Canva', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'i18n', level: 85 },
      ]
    },
    {
      name: t('skills.professional'),
      icon: <Lightbulb className="h-6 w-6 text-highlight" />,
      skills: [
        { name: t('skills.restApi'), level: 85 },
        { name: t('skills.seo'), level: 80 },
        { name: t('skills.wordpress'), level: 75 },
        { name: t('skills.git'), level: 90 },
        { name: t('skills.curiosity'), level: 95 },
        { name: t('skills.multilingual'), level: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title text-center">{t('skills.title')}</h2>
      
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, index) => (
          <div 
            key={category.name}
            className="bg-secondary/20 rounded-xl p-6 animate-slide-in-bottom group border border-secondary/20 overflow-hidden transition-all duration-300 hover:border-highlight/60 hover:shadow-lg hover:shadow-highlight/60"
            style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
          >
            <div className="flex items-center mb-6">
              {category.icon}
              <h3 className="text-xl font-semibold ml-3">{category.name}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2 group bg-secondary/20 border border-secondary/20 overflow-hidden transition-all duration-300 hover:border-highlight/60 hover:shadow-lg hover:shadow-highlight/60 hover:rounded-lg animate-scale-in">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-highlight rounded-full transition-all duration-1000 ease-out hover:bg-muted hover:shadow-md hover:scale-[1.01] hover:border-l-4"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: 'growWidth 1.5s ease-out'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {[...new Set(skillCategories.flatMap(cat => cat.skills.map(skill => skill.name)))].map((skill) => (
          <Badge 
            key={skill} 
            variant="outline"
            className="bg-secondary/30 text-foreground px-3 py-1 text-sm animate-scale-in duration-300 hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/10 hover:rounded-lg"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
