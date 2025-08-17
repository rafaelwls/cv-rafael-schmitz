import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Desenvolvedor Full Stack Pleno",
      company: "ELEVE Consultiva",
      period: "2024 - Presente",
      location: "Mondaí - SC",
      description: "Desenvolvimento de sistemas ERP completos com foco em soluções empresariais. Responsável por arquitetura de software, APIs RESTful, interfaces responsivas e integração de sistemas.",
      technologies: ["TypeScript", "React", "Next.js", "PostgreSQL", "APIs", "ERP"],
      highlights: [
        "Desenvolvimento de módulos ERP para gestão empresarial",
        "Criação de APIs robustas e escaláveis",
        "Implementação de interfaces modernas e intuitivas",
        "Otimização de performance e experiência do usuário"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      title: "Ciências da Computação",
      institution: "UNOESC - Universidade do Oeste de Santa Catarina",
      period: "2022 - 2027",
      location: "São Miguel do Oeste - SC",
      description: "Graduação com foco em desenvolvimento de software, estruturas de dados, algoritmos, engenharia de software e banco de dados.",
      status: "Em andamento"
    }
  ];

  const certifications = [
    {
      title: "JavaScript",
      issuer: "Autodidatismo e Prática",
      year: "2023",
      description: "Explorando a linguagem"
    },
    {
      title: "TypeScript",
      issuer: "Autodidatismo e Prática",
      year: "2023",
      description: "Explorando a linguagem e Frameworks"
    },
    {
      title: "PostgreSQL",
      issuer: "Autodidatismo e Prática",
      year: "2023",
      description: "Explorando a tecnologia e Banco de Dados"
    },
    {
      title: "Java",
      issuer: "Curso Universitário",
      year: "2023",
      description: "Atividades e projetos"
    },
    {
      title: "Django",
      issuer: "Experiência Prática",
      year: "2023",
      description: "Especialização em Django e desenvolvimento de APIs"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Experiência & Educação
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Minha jornada profissional e acadêmica na área de tecnologia
            </p>
          </div>
          <div className="space-y-12">
            {/* trabalho */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" />
                Experiência Profissional
              </h3>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <Card key={exp.id} className="card-glow border-border">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{exp.title}</CardTitle>
                          <p className="text-lg text-primary font-semibold">{exp.company}</p>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period} • {exp.location}
                          </p>
                        </div>
                        <Badge variant="default" className="self-start md:self-center">
                          Atual
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-3">Principais Responsabilidades:</h4>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3">Tecnologias Utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* educação */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Formação Acadêmica
              </h3>

              <div className="space-y-6">
                {education.map((edu) => (
                  <Card key={edu.id} className="card-glow border-border">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">{edu.title}</CardTitle>
                          <p className="text-lg text-primary font-semibold">{edu.institution}</p>
                          <p className="text-muted-foreground flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {edu.period} • {edu.location}
                          </p>
                        </div>
                        <Badge variant="outline" className="self-start md:self-center border-primary text-primary">
                          {edu.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* certificações */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-primary" />
                Especializações & Conhecimentos
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <Card key={index} className="card-glow border-border">
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">{cert.title}</h4>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground">{cert.description}</p>
                        <Badge variant="secondary" className="text-xs">
                          {cert.year}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* fim */}
            <Card className="card-glow border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  Resumo Profissional
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Como desenvolvedor em constante evolução, combino conhecimento acadêmico sólido com
                  experiência prática no desenvolvimento de sistemas empresariais. Minha abordagem foca
                  em soluções técnicas robustas, código limpo e interfaces que proporcionam excelente
                  experiência ao usuário. Tenho nível intemediário/avançado em inglês, o que me permite trabalhar em
                  projetos globais e me manter atualizado com as últimas tendências tecnológicas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
