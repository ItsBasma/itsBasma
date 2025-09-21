import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Video, TrendingUp, Users, Globe } from "lucide-react";

export default function InterestsSection() {
  const interests = [
    {
      icon: BookOpen,
      title: "Reading & Research",
      description: "Passionate about exploring cutting-edge research in data analytics, AI/ML, and customer experience. Regularly reading academic papers and industry reports to stay current with technological advancements.",
      color: "text-portfolio-primary",
      bgColor: "bg-portfolio-primary/10"
    },
    {
      icon: Heart,
      title: "Wellness & Balance",
      description: "Certified 200-hour Yoga Teacher committed to promoting physical and mental well-being. Integrating mindfulness practices and work-life balance principles into daily routines.",
      color: "text-portfolio-secondary",
      bgColor: "bg-portfolio-secondary/10"
    },
    {
      icon: Video,
      title: "Content Creator",
      description: "Creating educational content about data analytics, career development, and professional growth. Sharing insights and experiences to inspire others in the tech and analytics field.",
      color: "text-portfolio-accent",
      bgColor: "bg-portfolio-accent/10"
    },
    {
      icon: TrendingUp,
      title: "Self Improvement",
      description: "Continuously developing personal and professional skills through 200+ completed courses in communication, presentation, customer service, financial intelligence, and leadership.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Active participation in professional development workshops and community initiatives. Contributing to curriculum development and research centers in data analytics education.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Globe,
      title: "Cultural Exchange",
      description: "Embracing international collaboration and cross-cultural learning through global conferences, virtual internships, and working with diverse teams across different countries.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Personal Interests</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Beyond professional achievements, exploring diverse interests that fuel creativity, growth, and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <Card key={index} className="bg-portfolio-card-bg hover:shadow-portfolio transition-all duration-300 border-portfolio-primary/20 hover:border-portfolio-primary/40">
              <CardContent className="p-6">
                <div className={`${interest.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <interest.icon className={`h-6 w-6 ${interest.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{interest.title}</h3>
                <p className="text-gray-600 leading-relaxed">{interest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}