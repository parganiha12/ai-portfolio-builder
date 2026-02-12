import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import FadeIn from "@/components/FadeIn";
import { personalInfo } from "@/data/portfolio";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Github, label: "GitHub", href: personalInfo.social.github },
    { icon: Linkedin, label: "LinkedIn", href: personalInfo.social.linkedin },
    { icon: Twitter, label: "Twitter/X", href: personalInfo.social.twitter },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Let's collaborate on your next ML project. Feel free to reach out!
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Input
                  placeholder="Your Email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" className="w-full">
                <Send size={16} className="mr-2" /> Send Message
              </Button>
            </form>
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-4">Contact Info</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail size={16} className="text-primary" />
                    {personalInfo.email}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Connect</h3>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border/50 bg-card hover:border-primary/30 hover:text-primary transition-colors"
                      aria-label={s.label}
                    >
                      <s.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-accent/50 border border-border/50">
                <p className="text-sm font-medium mb-1">Open to opportunities</p>
                <p className="text-xs text-muted-foreground">
                  I'm currently available for freelance work, consulting, and full-time roles in AI/ML.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
