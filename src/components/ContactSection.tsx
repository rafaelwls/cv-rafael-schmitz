import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // Display success message with contact info
      if (formData.name && formData.email) {
        alert(`Obrigado ${formData.name}! Sua mensagem foi recebida. Entrarei em contato através do email ${formData.email} em breve. (Função não implementada)`);

        // toast de sucesso
        toast({
          title: "Mensagem enviada com sucesso!",
          description: "Obrigado pelo contato. Responderei em breve.",
        });

        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Por favor, preencha pelo menos seu nome e email.");
      }

      setIsSubmitting(false);
    }, 1000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá Rafael! Vi seu currículo e gostaria de conversar sobre oportunidades.");
    window.open(`https://wa.me/5549991143454?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Entre em contato comigo para discutir projetos, oportunidades ou apenas trocar ideias sobre tecnologia
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário de Contato */}
            <Card className="card-glow border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5 text-primary" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu.email@exemplo.com"
                      required
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-me sobre seu projeto ou oportunidade..."
                      rows={5}
                      className="transition-all focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 font-semibold py-3 transition-all hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* contato */}
            <div className="space-y-8">
              <Card className="card-glow border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:rafaelschmitzxd@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        rafaelschmitzxd@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <button
                        onClick={handleWhatsAppClick}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 (49) 499114-3454
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Localização</p>
                      <p className="text-muted-foreground">
                        Mondaí - SC, Brasil
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* social */}
              <Card className="card-glow border-border">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <a
                      href="https://www.linkedin.com/in/rafael-schmitz-b24870242"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#0077b5]/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5 text-[#0077b5]" />
                      </div>
                      <div>
                        <p className="font-semibold">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Conecte-se comigo</p>
                      </div>
                      <Badge variant="secondary" className="ml-auto">Profissional</Badge>
                    </a>

                    <a
                      href="https://github.com/rafaelwls"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Github className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold">GitHub</p>
                        <p className="text-sm text-muted-foreground">Veja meus projetos</p>
                      </div>
                      <Badge variant="secondary" className="ml-auto">Código</Badge>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* dispo */}
              <Card className="card-glow border-border">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-success rounded-full mx-auto mb-3 animate-pulse"></div>
                    <h3 className="font-semibold mb-2">Disponível para Novos Projetos</h3>
                    <p className="text-sm text-muted-foreground">
                      Interessado em freelances, consultorias ou oportunidades full-time
                    </p>
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

export default ContactSection;
