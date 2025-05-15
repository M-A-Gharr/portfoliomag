import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { FileText, Briefcase, BookOpen, Github, Download } from "lucide-react";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

const FreelanceAvailability = () => {
  const {t} = useTranslation();
  
  const services = [
    t(`bonus.freelance.servicesList.0`),
    t(`bonus.freelance.servicesList.1`),
    t(`bonus.freelance.servicesList.2`),
    t(`bonus.freelance.servicesList.3`),
    t(`bonus.freelance.servicesList.4`),
    t(`bonus.freelance.servicesList.5`),
    t(`bonus.freelance.servicesList.6`),
    t(`bonus.freelance.servicesList.7`),
    t(`bonus.freelance.servicesList.8`)
  ]

  const technologies = [
    { name: "React", icon: <FileText className="h-5 w-5" /> },
    { name: "Node.js", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Git", icon: <Github className="h-5 w-5" /> },
    { name: "GitLab CI/CD", icon: <BookOpen className="h-5 w-5" /> },
  ];

  const handleCVDownload = () => {
    try {
      // Create a URL to a sample CV PDF file (assuming it's in the public folder)
      const cvUrl = "public/cv/MAG-en.pdf";
      
      // Create a link element
      const link = document.createElement("a");
      link.href = cvUrl; // Path to your CV file
      link.setAttribute("download", t.name === 'fr' ? "cv-francais.pdf" : "resume-english.pdf"); // Set the file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show a success message
      toast.success(t(`bonus.freelance.downloadStarted`));
      console.log(`CV download initiated in ${t.name}`);
    } catch (error) {
      // Show an error message
      toast.error(t(`bonus.freelance.downloadError`));
      console.error("Download error:", error);
    }
  };

  return (
    <Card className="border border-indigo-200 overflow-hidden hover:shadow-md transition-all duration-300 w-full max-w-[700px] mx-auto">
      <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
        <CardTitle className="text-xl text-center text-blue-600 dark:text-indigo-300">
          {t(`bonus.freelance.availableForWork`)}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 md:px-6 py-4">
        <h4 className="font-semibold mb-2 text-base md:text-lg">{t(`bonus.freelance.availableForWork`)}:</h4>
        <ul className="space-y-2 mb-6 text-sm md:text-base">
          {services.map((service, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
        
        <Separator className="my-4" />
        
        <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
          {technologies.map((tech, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className={cn(
                "bg-blue-50 dark:bg-blue-900/20 transition-all ease-in-out animate-scale-in hover:border-highlight/40 hover:shadow-lg hover:shadow-highlight/15",
                "flex items-center gap-1 py-1 px-3"
              )}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row sm:justify-between gap-3 px-4 pb-4">
        <Button 
          className="bg-indigo-500 hover:bg-indigo-600 text-white w-full"
          onClick={() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          {t(`bonus.freelance.contactMe`)}
        </Button>
        <Button 
          variant="outline"
          className="bg-highlight hover:bg-highlight-dark w-full flex items-center gap-2"
          onClick={handleCVDownload}
        >
          <Download className="h-4 w-4" />
          {t(`bonus.freelance.downloadCV`)}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FreelanceAvailability;
