import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I will get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "BasmaOkla@outlook.com",
      href: "mailto:BasmaOkla@outlook.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+966 507 507 582",
      href: "tel:+966507507582"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Riyadh, Saudi Arabia",
      href: null
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect professionally",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-portfolio-neutral max-w-2xl mx-auto">
            Ready to collaborate on innovative data analytics and customer experience projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-portfolio-primary/10 text-portfolio-primary w-12 h-12 rounded-full flex items-center justify-center">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="text-portfolio-neutral hover:text-portfolio-primary transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-portfolio-neutral">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-portfolio-bg-light rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </Label>
                <Input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-colors duration-200"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent transition-colors duration-200"
                />
              </div>

              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-portfolio-gradient text-white hover:opacity-90 transition-all duration-300 shadow-portfolio hover:shadow-xl"
              >
                <Send className="mr-2 h-4 w-4" />
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
