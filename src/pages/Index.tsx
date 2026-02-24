import { useState } from "react";
import { Menu, X, Scale, Briefcase, Wheat, FileText, Users, Phone, Mail, MapPin, GraduationCap, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-header.png";
import heroBg from "@/assets/hero-bg.jpg";
import professionalPhoto from "@/assets/photo-professional.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const WHATSAPP_NUMBER = "554396085456";

const navLinks = [
{ label: "Início", href: "#inicio" },
{ label: "Sobre", href: "#sobre" },
{ label: "Áreas de Atuação", href: "#areas" },
{ label: "Contato", href: "#contato" }];


const specializations = [
{ icon: Scale, title: "Direito Civil e Processual Civil" },
{ icon: Briefcase, title: "Direito Trabalhista" },
{ icon: Wheat, title: "Direito do Agronegócio" }];


const practiceAreas = [
{ icon: Scale, title: "Direito Civil", desc: "Contratos, responsabilidade civil, família e sucessões com atendimento personalizado." },
{ icon: FileText, title: "Direito Processual Civil", desc: "Representação estratégica em litígios cíveis com foco em resultados eficientes." },
{ icon: Briefcase, title: "Direito Trabalhista", desc: "Defesa de direitos trabalhistas para empresas e trabalhadores." },
{ icon: Wheat, title: "Direito do Agronegócio", desc: "Assessoria jurídica especializada para o setor agropecuário e rural." },
{ icon: Users, title: "Consultoria Empresarial", desc: "Orientação jurídica preventiva para empresas de todos os portes." },
{ icon: FileText, title: "Mediação e Arbitragem", desc: "Resolução alternativa de conflitos com agilidade e menor custo." }];


const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-border bg-secondary">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between bg-secondary">
          <a href="#inicio" className="flex items-center">
            <img src={logo} alt="Carlos Eduardo Almeida Advocacia" className="h-12 w-auto brightness-0 invert" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary border-primary text-left border-8 border-none">

                {link.label}
              </a>
            )}
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen &&
        <nav className="md:hidden bg-background border-t border-border px-6 pb-4">
            {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm text-muted-foreground transition-colors hover:text-primary">

                {link.label}
              </a>
          )}
          </nav>
        }
      </header>

      {/* Hero */}
      <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Advocacia com{" "}
            <span className="text-primary">excelência</span> e dedicação
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Soluções jurídicas estratégicas com atendimento humanizado e comprometimento com os seus direitos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-base px-8">
              <a href="#contato">Entre em Contato</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base px-8 border-foreground/30 text-foreground hover:border-primary hover:text-primary">
              <a href="#sobre">Saiba Mais</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Photo placeholder */}
            <div className="flex justify-center">
              <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-lg bg-card border border-border overflow-hidden">
                <img src={professionalPhoto} alt="Carlos Eduardo Almeida" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Sobre Mim
                <span className="text-primary"></span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-justify">Advogado com atuação pautada pela ética, técnica jurídica e compromisso com a efetiva defesa dos direitos de seus clientes, Dr. Carlos Eduardo Almeida oferece um atendimento personalizado e estratégico, sempre atento às particularidades de cada caso e à busca das melhores soluções jurídicas.

              </p>
              <p className="text-muted-foreground leading-relaxed mb-8 text-justify"> Com formação sólida e experiência prática nas áreas do Direito Civil e Processual Civil, Direito do Trabalho e Direito do Agronegócio, desenvolve sua atuação com transparência, responsabilidade e dedicação integral, visando não apenas a solução dos conflitos, mas a proteção dos interesses e da segurança jurídica de seus clientes.



              </p>

              {/* Pós-graduações */}
              <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">Pós-Graduações</h3>
              <div className="space-y-4">
                {specializations.map((spec) => <div key={spec.title} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <GraduationCap size={18} className="text-primary" />
                    </div>
                    <span className="text-sm font-medium">{spec.title}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Áreas de <span className="text-primary">Atuação</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Atuação especializada em diversas áreas do Direito, sempre com foco na resolução eficiente e estratégica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) =>
            <Card key={area.title} className="bg-card border-border hover:border-primary/40 transition-colors group">
                <CardContent className="p-6">
                  <area.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estamos à disposição para atendê-lo. Entre em contato para agendar uma consulta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-sans text-left font-normal">(43) 9 9608-5456</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="font-medium">carlosalmeidap.adv@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Endereço</p>
                  <p className="font-medium">Rua Dr. Clementino S. Puppi, nº 1305, Sala 8, Jandaia do Sul/PR</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem('name') as HTMLInputElement).value;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value;
              const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
              const subject = encodeURIComponent(`Contato de ${name}`);
              const body = encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`);
              window.location.href = `mailto:carlosalmeidap.adv@gmail.com?subject=${subject}&body=${body}`;
            }}>
              <Input name="name" placeholder="Seu nome" required className="bg-card border-border focus:border-primary" />
              <Input name="email" type="email" placeholder="Seu e-mail" required className="bg-card border-border focus:border-primary" />
              <Textarea name="message" placeholder="Sua mensagem" rows={5} required className="bg-card border-border focus:border-primary" />
              <Button type="submit" size="lg" className="w-full text-base">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Carlos Eduardo Almeida Advocacia — OAB 256.624/RJ
          </p>
          <nav className="flex gap-6">
            {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-muted-foreground hover:text-primary transition-colors">

                {link.label}
              </a>
            )}
          </nav>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <button
        onClick={() => {
          const url = `https://wa.me/${WHATSAPP_NUMBER}`;
          try {
            if (window.top) {
              window.top.location.href = url;
            } else {
              window.location.href = url;
            }
          } catch {
            window.open(url, '_blank');
          }
        }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 animate-pulse-whatsapp cursor-pointer"
        style={{ backgroundColor: "hsl(142, 70%, 45%)" }}
        aria-label="Contato via WhatsApp">
        <MessageCircle size={28} className="text-white" />
      </button>
    </div>);

};

export default Index;