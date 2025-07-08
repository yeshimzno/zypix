
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Zap, Globe, Users, Cpu, Target, Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Investor Relations | Zypix',
  description: 'Partner in the future of on-demand photography. Learn about investment opportunities with Zypix.',
};

export default function InvestorRelationsPage() {
  const whyInvest = [
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "High-Growth Market",
      description: "The creator economy and content-driven businesses are expanding rapidly."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Disruptive Model",
      description: "Real-time, location-based photography services with a simple mobile-first experience."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Scalable Vision",
      description: "Built to expand across cities, industries, and international markets."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Strong Early Adoption",
      description: "Positive traction among users and photographers during our initial rollout."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Tech-First Foundation",
      description: "Built on a modern stack with smart booking, geo-matching, and AI-assisted tools."
    }
  ];

  const currentFocus = [
    "Growing our user and photographer network across India",
    "Strengthening tech infrastructure and automation",
    "Building strategic B2B and media partnerships"
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-16 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Invest in <span className="text-primary">Zypix</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partner in the future of on-demand photography.
          </p>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Zypix is building the next-generation platform for real-time, accessible photography. As an early-stage startup, we’re focused on transforming how people and businesses book professional photographers — instantly, affordably, and at scale.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Why Invest in Zypix?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyInvest.map((item, index) => (
              <Card key={index} className="text-center bg-card/50 border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        <section>
            <Card className="shadow-md">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                       <Target className="w-6 h-6 text-primary"/>
                       Our Current Focus
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                        {currentFocus.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">
            Let’s Build Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            If you believe in the future of fast, accessible photography — we’d love to hear from you. For pitch decks, cap table info, or investment discussions, please reach out.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="mailto:zypixservices@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us: zypixservices@gmail.com
            </Link>
          </Button>
        </section>

      </div>
    </div>
  );
}
