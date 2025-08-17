import { Badge } from "@/components/ui/badge";
import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* mais sobre */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Rafael Luan Schmitz</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções tecnológicas
                inovadoras e interfaces elegantes. Especialista em TypeScript, React
                e desenvolvimento de ERPs.
              </p>
              <div className="flex gap-2 mt-4">
                <Badge variant="secondary">Desenvolvedor</Badge>
                <Badge variant="secondary">Santa Catarina</Badge>
              </div>
            </div>

            {/* link */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Navegação</h3>
              <nav>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#about"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Sobre Mim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Habilidades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Experiência
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* contato */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Mondaí - SC, Brasil
                </p>
                <a
                  href="mailto:rafaelschmitzxd@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors block"
                >
                  rafaelschmitzxd@gmail.com
                </a>
                <div className="flex gap-2 mt-4">
                  <Badge variant="outline" className="text-xs">
                    Disponível para projetos
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* fim */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Rafael Luan Schmitz.</span>
                <span className="flex items-center gap-1">
                  Feito com <Heart className="w-3 h-3 text-red-500" fill="currentColor" /> e
                  <Code className="w-3 h-3 text-primary" /> em React
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>Alimentado por café e boas ideias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
