import { useEffect } from "react";
import PessoaSection from "@/components/PessoaSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Index = () => {
  useEffect(() => {
    const mostrarMensagemBoasVindas = () => {
      setTimeout(() => {
        console.log("Currículo de Rafael Luan Schmitz carregado com sucesso!");
      }, 1000);
    };

    mostrarMensagemBoasVindas();

    const lidarComRolagemSuave = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', lidarComRolagemSuave);

    return () => {
      document.removeEventListener('click', lidarComRolagemSuave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <PessoaSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
