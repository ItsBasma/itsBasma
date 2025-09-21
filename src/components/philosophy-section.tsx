import { Card, CardContent } from "@/components/ui/card";
import { Award, Lightbulb, Star, Quote, Sparkles, BookOpen, Heart } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-portfolio-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Vision & Philosophy</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Guiding principles and career aspirations that drive professional excellence and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Career Objective */}
          <Card className="bg-gradient-to-br from-portfolio-primary/5 to-portfolio-accent/10 border-portfolio-gradient hover:shadow-portfolio transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Career Objective</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Targeting senior roles to drive data-informed innovation and support Saudi Vision 2030's goals of digital excellence and sustainable growth.
              </p>
            </CardContent>
          </Card>

          {/* Life Philosophy */}
          <Card className="bg-gradient-to-br from-portfolio-secondary/5 to-portfolio-primary/10 border-portfolio-gradient hover:shadow-portfolio transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mr-4 shadow-lg">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Life Philosophy</h3>
              </div>
              <div className="relative">
                <Quote className="h-8 w-8 text-portfolio-accent/30 absolute -top-2 -left-1" />
                <p className="text-lg text-gray-700 leading-relaxed pl-8">
                  Balancing professional excellence with personal growth, I believe in the power of continuous learning, 
                  mindful living, and meaningful connections. Each interest complements my professional journey, 
                  creating a holistic approach to life and career development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Innovation Excellence",
              description: "Driving technological advancement through data analytics and customer-centric solutions",
              color: "portfolio-primary",
              icon: Sparkles
            },
            {
              title: "Continuous Growth",
              description: "Embracing learning opportunities and personal development across all life dimensions",
              color: "portfolio-secondary",
              icon: BookOpen
            },
            {
              title: "Meaningful Impact",
              description: "Creating positive change that contributes to Saudi Vision 2030 and global progress",
              color: "portfolio-accent",
              icon: Heart
            }
          ].map((value, index) => (
            <Card key={index} className="bg-portfolio-card-bg border border-portfolio-primary/20 hover:shadow-portfolio hover:border-portfolio-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`text-${value.color} mx-auto mb-4`}>
                  <value.icon className="h-6 w-6 mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-portfolio-neutral">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}