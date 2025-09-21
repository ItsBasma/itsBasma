import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import cstLogo from "@/assets/image_1757789463245.png";
import stcLogo from "@/assets/image_1757789802813.png";
import omnifiaLogo from "@/assets/image_1757790001356.png";
import thiqahLogo from "@/assets/image_1757790054039.png";
import topLogo from "@/assets/image_1757790258976.png";
import tawadLogo from "@/assets/image_1757791259636.png";
import tetecLogo from "@/assets/image_1757792730016.png";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "current",
      title: "Senior Customer Journey Development Specialist",
      company: "Communications, Space & Technology Commission (CST)",
      period: "May 2025 - Present",
      status: "Current",
      statusColor: "bg-blue-100 text-blue-700",
      cardBg: "bg-blue-50",
      accent: "text-blue-700",
      dotColor: "bg-blue-600",
      logo: cstLogo,
      achievements: [
        "Led customer journey enhancements for telecom projects, including the CST Digital Channels Mutasil initiative, supporting improvements in customer satisfaction and digital user experience.",
        "Analyzed historical data and recommended service readiness optimizations, contributing to an 85% customer satisfaction rating for government telecom services during Hajj 2025, earning certificates of appreciation.",
        "Independently developed a Python-based tool to streamline regulatory document processing, integrating stakeholder feedback to improve policymaking efficiency.",
        "Led regulatory study on child online protection best practices, producing an awareness guide published across service providers' websites in alignment with Vision 2030.",
        "Tracked performance metrics consistently to identify areas for continuous improvement and drive operational excellence in telecom service delivery."
      ]
    },
    {
      id: "previous",
      title: "Business Experience Specialist",
      company: "Communications, Space & Technology Commission (CST)",
      period: "Jan 2023 - Apr 2025",
      status: "Previous",
      statusColor: "bg-indigo-100 text-indigo-700",
      cardBg: "bg-indigo-50",
      accent: "text-indigo-700",
      dotColor: "bg-indigo-600",
      logo: cstLogo,
      achievements: [
        "Utilized qualitative and quantitative data analytics to identify pain points, delivering actionable insights that enhanced service SLAs and customer satisfaction scores.",
        "Designed end-to-end customer journeys, aligning with Saudi Vision 2030's digital transformation goals.",
        "Defined KPIs for CX Index to assess service providers' customer journeys, evaluate satisfaction, stickiness, and performance for CST regulatory reporting.",
        "Coordinated cross-sector workshops and conducted comprehensive requirements analysis to support commission goals and ensure compliance with established standards."
      ]
    },
    {
      id: "huawei",
      title: "CX Analyst",
      company: "Huawei (STC Project)",
      period: "Nov 2021 - Dec 2022",
      status: "Analytics",
      statusColor: "bg-purple-100 text-purple-700",
      cardBg: "bg-purple-50",
      accent: "text-purple-700",
      dotColor: "bg-purple-600",
      logo: stcLogo,
      achievements: [
        "Built a Twitter sentiment analysis pipeline using Tweepy, snscrape, and NLP techniques to track public perception and identify customer experience improvement opportunities for STC products.",
        "Developed and trained machine learning models including Naive Bayes, SVM, Decision Trees, and K-Means to classify and cluster feedback, generating actionable insights for business decisions.",
        "Designed Tableau dashboards to visualize sentiment trends and engagement patterns, enabling decision-makers to monitor customer feedback effectively.",
        "Centralized customer experience data across multiple channels, streamlining reporting processes and delivering monthly, quarterly, and ad-hoc reports to stakeholders.",
        "Supported the \"People Project\"; an internal initiative aimed at strengthening workplace culture by creating book summaries and weekly motivational content to boost staff engagement."
      ]
    },
    {
      id: "omnifia",
      title: "R&D Intern",
      company: "Omnifia UK (Remote - Misk Virtual Internships Program)",
      period: "Sep 2021 - Dec 2021",
      status: "Internship",
      statusColor: "bg-green-100 text-green-700",
      cardBg: "bg-green-50",
      accent: "text-green-700",
      dotColor: "bg-green-600",
      logo: omnifiaLogo,
      achievements: [
        "Developed TypeScript integrations during 360-hour virtual internship",
        "Analyzed Elasticsearch data and delivered timely insights",
        "Enhanced web technology and coding skills",
        "Completed CareerBridge curriculum (8 NACE Career Readiness competencies)",
        "Improved data processing efficiency by 15% through optimized Elasticsearch queries"
      ]
    },
    {
      id: "thiqah",
      title: "GDP Trainee",
      company: "Thiqah Business Services",
      period: "Oct 2021 - Nov 2021",
      status: "Training",
      statusColor: "bg-cyan-100 text-cyan-700",
      cardBg: "bg-cyan-50",
      accent: "text-cyan-700",
      dotColor: "bg-cyan-600",
      logo: thiqahLogo,
      achievements: [
        "Completed intensive training in leadership and project management",
        "Developed business skills and applied them to real-world projects",
        "Delivered project management plan reducing task completion time by 10%"
      ]
    },
    {
      id: "oxford",
      title: "Management Information System Specialist",
      company: "The Oxford Partnership (TOP)",
      period: "Feb 2018 - Sep 2018",
      status: "Technical",
      statusColor: "bg-pink-100 text-pink-700",
      cardBg: "bg-pink-50",
      accent: "text-pink-700",
      dotColor: "bg-pink-600",
      logo: topLogo,
      achievements: [
        "Managed MIS databases for Activate Learning",
        "Ensured data accuracy and system reliability for student records and reporting",
        "Optimized data processes and delivered MIS training",
        "Enhanced system efficiency and compliance with data protection standards",
        "Reduced data retrieval time by 30% through streamlined processes"
      ]
    },
    {
      id: "nctet",
      title: "Examinations Supervisor",
      company: "National Company for Training and Education Technologies",
      period: "May 2015 - Jun 2017",
      status: "Education",
      statusColor: "bg-orange-100 text-orange-700",
      cardBg: "bg-orange-50",
      accent: "text-orange-700",
      dotColor: "bg-orange-600",
      logo: tetecLogo,
      achievements: [
        "Supervised online CIT and PET assessments",
        "Troubleshot technical issues during examinations",
        "Analyzed data to support awarding processes",
        "Improved exam session reporting accuracy by 20% through enhanced data analysis"
      ]
    },
    {
      id: "tawad",
      title: "Information Technology Specialist",
      company: "Tawad Association for Family Development",
      period: "Oct 2016 - Jan 2017",
      status: "Community",
      statusColor: "bg-teal-100 text-teal-700",
      cardBg: "bg-teal-50",
      accent: "text-teal-700",
      dotColor: "bg-teal-600",
      logo: tawadLogo,
      achievements: [
        "Provided comprehensive IT support for organizational operations",
        "Managed workshop registration systems",
        "Conducted post-workshop data analysis",
        "Increased workshop registration efficiency by 15% through automated technical setups"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-portfolio-primary/20 transform md:-translate-x-0.5"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-center">
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 ${exp.dotColor} rounded-full transform md:-translate-x-2 z-10`}></div>
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-8' : 'md:w-1/2 md:ml-auto md:pl-8'}`}>
                  <Card className={`${exp.cardBg} border border-gray-200 hover:shadow-md transition-shadow duration-200`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={exp.statusColor}>{exp.status}</Badge>
                        <span className="text-portfolio-neutral text-sm">{exp.period}</span>
                      </div>
                      <h3 className={`text-xl font-bold ${exp.accent} mb-2`}>{exp.title}</h3>
                      <div className="flex items-center mb-4">
                        {exp.logo && (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`} 
                            className="w-8 h-8 mr-3 object-contain"
                            data-testid={`logo-${exp.id}`}
                          />
                        )}
                        <h4 className="text-lg font-medium text-portfolio-neutral">{exp.company}</h4>
                      </div>
                      <ul className="text-gray-600 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className={`${exp.accent} mt-1 mr-3 flex-shrink-0 h-4 w-4`} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
