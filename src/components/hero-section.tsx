import { Download, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadCV = () => {
    window.open("https://1drv.ms/b/c/409f90cc056cf158/EZcgXSSGU1NPuKj3BV09x8gBZj8F1Wx7rEccbZzKRtvOJw?e=vcDsog", "_blank");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/basmah-alnasair", "_blank");
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-white via-portfolio-bg-light to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-portfolio-primary">Basmah Alnasair</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-portfolio-neutral">
                Senior Customer Journey Development Specialist
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Senior Customer Journey Development Specialist with <span className="text-portfolio-primary font-semibold">5+ years of experience</span> in <span className="text-portfolio-primary font-medium">data analytics, customer experience, and digital transformation</span> across government and telecom sectors. Skilled in <span className="text-portfolio-primary font-semibold">machine learning (ML), natural language processing (NLP), and advanced analytics</span> to drive data-informed decision-making and design citizen-centric digital services aligned with <span className="text-portfolio-primary font-medium">Saudi Vision 2030</span>. Led transformative initiatives, including enhancements to <span className="text-portfolio-primary font-medium">CST's Digital Channels (Mutasil)</span>, contributing to an <span className="bg-portfolio-primary/10 text-portfolio-primary font-bold px-2 py-1 rounded">85% customer satisfaction rate</span> during <span className="text-portfolio-primary font-semibold">Hajj 2025 (Adaa report)</span>. Internationally recognized for presenting pioneering research on facial expression recognition in occluded images at ICWSNUCA-22 in Cannes, France.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handleDownloadCV}
                className="bg-portfolio-primary text-white hover:bg-portfolio-secondary transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={openLinkedIn}
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-200"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
