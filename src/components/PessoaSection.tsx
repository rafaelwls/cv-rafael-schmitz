import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/rafael-profile.jpg";

const PessoaSection = () => {
  const handleDownloadCV = () => {
    alert("Funcionalidade de download do CV - Obrigado por visitar meu currículo! (Não implementada)");
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/15 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <main className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* imagem de perfil */}
          <div className="mb-8 animate-slide-up">
            <img
              src={profileImage}
              alt="Rafael Luan Schmitz - Desenvolvedor Full Stack"
              className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-2xl animate-glow"
            />
          </div>

          {/* começo */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Rafael Luan
              <span className="block text-white/90">Schmitz</span>
            </h1>
          </div>

          {/* prof e localizacao */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all">
                Desenvolvedor Full Stack Pleno
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all">
                ELEVE Consultiva
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all">
                Mondaí - SC
              </Badge>
            </div>
          </div>

          {/* desc */}
          <div className="animate-slide-up" style={{animationDelay: '0.6s'}}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Estudante de <strong>Ciências da Computação</strong> na UNOESC com conhecimentos avançados em
              desenvolvimento de ERPs, APIs modernas e interfaces elegantes. Especialista em TypeScript,
              React, Next.js e engenharia de bancos de dados.
            </p>
          </div>

          {/* ações */}
          <div className="animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                onClick={handleDownloadCV}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg transition-all hover:scale-105"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button
                onClick={handleContactClick}
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Entrar em Contato
              </Button>
            </div>
          </div>

          {/* social */}
          <div className="animate-slide-up" style={{animationDelay: '1s'}}>
            <ul className="flex justify-center gap-6">
              <li>
                <a
                  href="https://www.linkedin.com/in/rafael-schmitz-b24870242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                  aria-label="LinkedIn de Rafael Luan Schmitz"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rafaelwls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                  aria-label="GitHub de Rafael Luan Schmitz"
                >
                  <Github className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:rafaelschmitzxd@gmail.com"
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all hover:scale-110"
                  aria-label="Email para Rafael Luan Schmitz"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </header>
  );
};

export default PessoaSection;
