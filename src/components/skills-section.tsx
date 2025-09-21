import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Smartphone, TrendingUp, Database, BarChart3, Brain, Code } from "lucide-react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const coreSkills = [
    {
      icon: Smartphone,
      title: "Digital Services Development",
      description: "Customer journey mapping, digital transformation, service innovation"
    },
    {
      icon: TrendingUp,
      title: "Regulatory & Strategic Analytics",
      description: "KPI development, policy analysis, strategic planning, Vision 2030 alignment"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "ETL, data cleaning, preprocessing, automation"
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Modelling",
      description: "Predictive modelling, statistical analysis, performance measurement"
    },
    {
      icon: Brain,
      title: "Machine Learning & NLP",
      description: "Supervised/unsupervised models, text mining, deep learning"
    },
    {
      icon: Code,
      title: "Programming & Tools",
      description: "Python, R, SQL, Tableau, Power BI, Advanced Excel"
    }
  ];



  return (
    <section id="skills" className="py-20 bg-portfolio-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Skills</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Technical proficiencies and professional competencies developed through hands-on experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-portfolio-primary/30 transition-colors duration-200" data-testid={`skill-${skill.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                <div className="flex items-center mb-3">
                  <skill.icon className="h-5 w-5 text-portfolio-primary mr-3" />
                  <h3 className="text-lg font-bold text-portfolio-primary">{skill.title}</h3>
                </div>
                <p className="text-portfolio-neutral text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
