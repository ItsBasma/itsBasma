import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import facialExpressionImage from "@assets/facial_expression_compressed.png";
import twitterSentimentImage from "@assets/stock_images/sentiment_analysis_v_63c83247.jpg";
import employeeAttritionImage from "@assets/stock_images/employee_attrition_p_a59be08d.jpg";
import heartDiseaseImage from "@assets/heart_disease_compressed.png";
import regulatoryDocImage from "@assets/regulatory_processing_compressed.png";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Facial Expression Recognition",
      description: "Developed a CNN-based model for recognizing facial expressions in occluded images. Presented at ICWSNUCA 22 conference in Cannes, France.",
      image: facialExpressionImage,
      tags: ["CNN", "Computer Vision"],
      category: "AI/ML Research",
      categoryColor: "bg-portfolio-primary/10 text-portfolio-primary"
    },
    {
      title: "CST Digital Channels (Mutasil)",
      description: "supporting improvements in customer satisfaction and digital user experience.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["UX Design", "Customer Journey", "Digital Transformation"],
      category: "Digital Platform",
      categoryColor: "bg-portfolio-secondary/10 text-portfolio-secondary"
    },
    {
      title: "Twitter Sentiment Analysis",
      description: "Built comprehensive data extraction pipeline with sentiment analysis using topic modeling to classify tweets into positive, negative, and neutral categories.",
      image: twitterSentimentImage,
      tags: ["Python", "NLP", "Tableau"],
      category: "NLP Analytics",
      categoryColor: "bg-portfolio-accent/10 text-portfolio-accent"
    },
    {
      title: "Regulatory Document Processing",
      description: "Developed Python-based automation tool for converting regulatory documents and linking stakeholder feedback to facilitate efficient decision-making.",
      image: regulatoryDocImage,
      tags: ["Python", "Excel", "Word", "Process Automation"],
      category: "Automation",
      categoryColor: "bg-portfolio-primary/10 text-portfolio-primary"
    },
    {
      title: "Employee Attrition Prediction",
      description: "Applied advanced data mining techniques to predict employee turnover patterns, enabling proactive HR interventions and retention strategies.",
      image: employeeAttritionImage,
      tags: ["Machine Learning", "Data Mining", "HR Analytics"],
      category: "Predictive Analytics",
      categoryColor: "bg-portfolio-secondary/10 text-portfolio-secondary"
    },
    {
      title: "Heart Disease Prediction",
      description: "Built machine learning models for early detection of heart diseases using clinical data and predictive analytics for improved healthcare outcomes.",
      image: heartDiseaseImage,
      tags: ["Predictive Modeling", "Medical Analytics"],
      category: "Healthcare ML",
      categoryColor: "bg-portfolio-accent/10 text-portfolio-accent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Key Projects</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Showcasing innovative solutions and research contributions in data analytics and customer experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-portfolio-card-bg hover:shadow-portfolio transition-all duration-300 overflow-hidden group border-portfolio-primary/20 hover:border-portfolio-primary/40">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge className={project.categoryColor}>{project.category}</Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
