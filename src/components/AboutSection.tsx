import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Globe, Code } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Sobre Mim
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolvedor apaixonado por tecnologia e soluções inovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Desenvolvedor Full Stack com Foco em Qualidade
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Sou um desenvolvedor com conhecimentos técnicos avançados, cursando
                  <strong> Ciências da Computação na UNOESC</strong> em São Miguel do Oeste, SC.
                  Atualmente trabalho como <strong>Desenvolvedor Full Stack Pleno</strong> na
                  ELEVE Consultiva, onde desenvolvo soluções completas de ERP.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Tenho experiência sólida em desenvolvimento tanto front-end quanto back-end,
                  com foco em criar interfaces elegantes e APIs robustas. Sigo sempre as
                  melhores práticas de desenvolvimento e padrões de código limpo.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Especialidades:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Desenvolvimento de ERPs completos
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    APIs RESTful e integrações
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Engenharia de bancos de dados
                  </li>
                  <li className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-primary" />
                    Interfaces modernas e responsivas
                  </li>
                </ul>
              </div>
            </div>

            {/* info extra */}
            <div className="space-y-6">
              <Card className="card-glow border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experiência Atual</h4>
                      <p className="text-muted-foreground">ELEVE Consultiva</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Desenvolvedor Full Stack Pleno focado em soluções ERP e
                    sistemas empresariais complexos.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Educação</h4>
                      <p className="text-muted-foreground">UNOESC - SC</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Ciências da Computação - São Miguel do Oeste,
                    focando em desenvolvimento e engenharia de software.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-glow border-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Idiomas</h4>
                      <p className="text-muted-foreground">Comunicação Global</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Português Nativo</Badge>
                    <Badge variant="secondary">Inglês Avançado</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
