import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "philosophy", label: "Philosophy" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];

  const expertiseAreas = [
    "Data Analytics & Machine Learning",
    "Customer Experience Optimization",
    "Digital Transformation",
    "Telecommunications Technology",
    "Process Automation",
    "Strategic Planning"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Basmah Alnasair</h3>
            <p className="text-gray-300 mb-4">
              Senior Customer Journey Specialist driving digital transformation and data analytics innovation 
              in alignment with Saudi Vision 2030.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:BasmaOkla@outlook.com" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="tel:+966507507582" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise Areas</h4>
            <ul className="space-y-2 text-gray-300">
              {expertiseAreas.map((area, index) => (
                <li key={index} className="text-sm">{area}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Basmah Alnasair. All rights reserved. | Supporting Saudi Vision 2030
          </p>
        </div>
      </div>
    </footer>
  );
}
