import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useEffect, useRef } from "react";

const SkillsSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const habilidades = [
      { nome: "TypeScript/React", nivel: 85, cor: "#3b82f6" },
      { nome: "PostgreSQL/Prisma", nivel: 83, cor: "#8b5cf6" },
      { nome: "Next.js/APIs", nivel: 78, cor: "#06b6d4" },
      { nome: "Java/Spring", nivel: 50, cor: "#10b981" },
      { nome: "Python/FastAPI", nivel: 50, cor: "#f59e0b" },
      { nome: "C++/C", nivel: 30, cor: "#ef4444" },
    ];

    const getThemeColors = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      return {
        fundo: isDarkMode ? "#374151" : "#e5e7eb",
        texto: isDarkMode ? "#f3f4f6" : "#374151",
        titulo: isDarkMode ? "#f9fafb" : "#1f2937",
      };
    };

    const draw = (width: number) => {
      const dpr = window.devicePixelRatio || 1;

      const height = Math.max(260, Math.min(100, Math.round(width * 0.5)));

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${Math.floor(width)}px`;
      canvas.style.height = `${Math.floor(height)}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cores = getThemeColors();
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = cores.titulo;
      ctx.font = "bold 16px Arial";
      ctx.fillText("Visualização de Habilidades Técnicas", 50, 28);

      const left = 50;
      const top = 50;
      const gapY = 36;
      const rightPadding = 70;
      const maxWidth = Math.max(180, width - left - rightPadding - 40);
      const barH = 10;

      ctx.font = "11px Arial";
      habilidades.forEach((h, i) => {
        const y = top + i * gapY;

        ctx.fillStyle = cores.fundo;
        ctx.fillRect(left, y, maxWidth, barH);

        const grad = ctx.createLinearGradient(left, y, left + maxWidth, y);
        grad.addColorStop(0, h.cor);
        grad.addColorStop(1, `${h.cor}80`);
        ctx.fillStyle = grad;

        const w = (maxWidth * h.nivel) / 100;
        ctx.fillRect(left, y, w, barH);

        ctx.fillStyle = cores.texto;
        ctx.fillText(h.nome, left, y - 6);
        ctx.fillText(`${h.nivel}%`, left + maxWidth + 8, y + barH - 4);
      });
    };

    const doResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width } = parent.getBoundingClientRect();
      const usable = Math.max(240, Math.floor(width));
      draw(usable);
    };

    doResize();
    const ro = new ResizeObserver(doResize);
    ro.observe(canvas.parentElement!);

    const themeObserver = new MutationObserver(() => {
      doResize();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", doResize);
    return () => {
      ro.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("resize", doResize);
    };
  }, []);

  const frontendSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
  ];

  const backendSkills = [
    "Node.js",
    "PostgreSQL",
    "APIs RESTful",
    "TypeScript + Prisma",
    "Java",
    "Spring Framework",
    "Python",
    "FastAPI",
    "C++",
    "C",
  ];

  const toolsSkills = ["Git", "GitHub", "VS Code", "Database Design", "SQL", "ERP Development", "System Architecture"];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Habilidades Técnicas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </div>

          <div className="mb-16 flex justify-center">
            <Card className="card-glow border border-border w-full max-w-4xl min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Níveis de Proficiência</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <canvas
                  ref={canvasRef}
                  className="border border-border rounded-lg w-full h-auto block"
                  aria-label="Gráfico de habilidades técnicas de Rafael"
                />
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch min-w-0">
            <Card className="card-glow border border-border h-full flex flex-col min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  Frontend & UI/UX
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 grow">
                <p className="text-sm text-muted-foreground">
                  Criação de interfaces modernas e responsivas com foco na experiência do usuário.
                </p>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-primary/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>TypeScript/React</span>
                    <span>85%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow border border-border h-full flex flex-col min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full" />
                  Backend & Databases
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 grow">
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de APIs robustas e gerenciamento de bancos de dados.
                </p>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-accent/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>PostgreSQL/APIs</span>
                    <span>83%</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="card-glow border border-border h-full flex flex-col min-w-0 overflow-hidden">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full" />
                  Ferramentas & Outros
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 grow">
                <p className="text-sm text-muted-foreground">
                  Ferramentas e metodologias para desenvolvimento profissional.
                </p>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="hover:bg-success/20 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-auto space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ERP Development</span>
                    <span>88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="card-glow border border-border max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Experiência Prática</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Minha experiência vai além das tecnologias listadas. Trabalho diariamente com
                  desenvolvimento de sistemas ERP complexos, criando soluções que atendem necessidades reais de empresas.
                  Tenho sólido conhecimento em <strong>engenharia de software</strong>, <strong>padrões de design</strong> e{" "}
                  <strong>boas práticas de desenvolvimento</strong>, sempre priorizando código limpo, performance e
                  manutenibilidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
