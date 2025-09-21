import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PhilosophySection from "@/components/philosophy-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import EducationSection from "@/components/education-section";
import ProjectsSection from "@/components/projects-section";
import InterestsSection from "@/components/interests-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-portfolio-bg-light text-gray-900">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <PhilosophySection />
      <EducationSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
