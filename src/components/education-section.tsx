import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Trophy } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science in Computing (Data Analytics)",
      institution: "Princess Nourah Bint Abdulrahman University",
      location: "Riyadh, Saudi Arabia",
      year: "2021",
      gpa: "4.72/5",
      achievements: [
        "Master's dissertation: Recognizing Facial Expression in Occluded Images via Convolutional Neural Networks.",
        "Member of the 2024 Research Center, contributing to innovative data analytics research.",
        "Participated in the 2025 Curriculum Development Committee for the Master's Program in Data Analytics, aligning content with market needs."
      ],
      primary: true
    },
    {
      degree: "Bachelor in Computer Science",
      institution: "Al Jouf University",
      location: "Saudi Arabia",
      year: "2014",
      gpa: "4.55/5",
      primary: false
    }
  ];

  const certifications = [
    {
      title: "Design Thinking & Innovation",
      provider: "CST",
      year: "2025"
    },
    {
      title: "Customer-Focused Selling Strategies",
      provider: "GLOMACS",
      year: "2025"
    },
    {
      title: "Certified KPI Practitioner",
      provider: "National Center for Performance Measurement (Adaa)",
      year: "2024"
    },
    {
      title: "KPI Fundamentals",
      provider: "National Center for Performance Measurement (Adaa)",
      year: "2024"
    },
    {
      title: "Essentials of OKRs (Objectives & Key Results)",
      provider: "CST",
      year: "2024"
    },
    {
      title: "Public Speaking, Presentation & Storytelling Masterclass",
      provider: "UBI",
      year: "2024"
    },
    {
      title: "Fundamentals of Regulation 1",
      provider: "Regulatory Policy Institute",
      year: "2023"
    },
    {
      title: "Fundamentals of Strategic Planning",
      provider: "GLOMACS",
      year: "2023"
    },
    {
      title: "Design Planning & Problem Diagnostic Strategy",
      provider: "GLOMACS",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Academic excellence and continuous professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Background</h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className={`${
                    edu.primary 
                      ? 'bg-gradient-to-r from-portfolio-primary/5 to-portfolio-accent/5 border-portfolio-primary/20' 
                      : 'bg-gradient-to-r from-portfolio-secondary/5 to-portfolio-primary/5 border-portfolio-secondary/20'
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`text-2xl mr-4 mt-1 ${edu.primary ? 'text-portfolio-primary' : 'text-portfolio-secondary'}`}>
                        <GraduationCap className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                        <p className="text-lg font-medium text-portfolio-neutral mb-2">{edu.institution}</p>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-600">{edu.primary ? '' : `${edu.location} • ${edu.year}`}</span>
                          <Badge className={`${edu.primary ? 'bg-portfolio-primary' : 'bg-portfolio-secondary'} text-white`}>
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                        {edu.achievements && (
                          <div className="mt-3">
                            <ul className="space-y-1 text-sm text-gray-600">
                              {edu.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className="flex items-start">
                                  <span className="text-portfolio-primary mr-2 mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="text-portfolio-accent text-lg mr-3">
                        <Award className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">{cert.title}</h5>
                        <p className="text-sm text-portfolio-neutral">{cert.provider} • {cert.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            </div>

              <Card className="bg-portfolio-accent/5 border-portfolio-accent/20">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="text-portfolio-accent text-lg mr-3">
                      <Trophy className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">200+ Professional Development courses</h5>
                      <p className="text-sm text-portfolio-neutral">leadership, communication, Data Science in R, Power BI, and analytics, plus self-development in life skills and personal growth</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="text-portfolio-accent text-lg mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-gray-900">Wellness: Certified 200-Hour Yoga Teacher Training (200YTT)</h5>
                      <p className="text-sm text-portfolio-neutral">Certified Professional • 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
