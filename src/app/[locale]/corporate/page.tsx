
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Camera, Users, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Photography Services | Zypix',
  description: 'Elevate your brand with professional corporate photography for teams, events, and branding. On-demand, pan-India services.',
};

export default function CorporatePage() {
  const corporateServices = [
    "Team & Staff Portraits",
    "Office & Workspace Shoots",
    "Event Coverage (Conferences, Launches, etc.)",
    "Branding & PR Photography",
    "Product & Lifestyle Shoots",
    "Executive Headshots",
  ];

  const whyChooseZypix = [
    "On-demand, pan-India availability",
    "Trained, verified professional photographers",
    "Quick booking and delivery turnaround",
    "Custom packages for startups, SMEs & enterprises",
    "Dedicated business support team",
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <div className="flex justify-center mb-4">
             <Briefcase className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            📸 Zypix for <span className="text-primary">Corporate</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Elevate Your Brand with Professional Photography
          </p>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <p className="text-muted-foreground leading-relaxed text-center">
            At Zypix, we understand the power of visuals in shaping a company’s brand. Our corporate photography services are designed to help businesses of all sizes capture high-quality images that reflect professionalism, trust, and identity.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                        <Camera className="w-6 h-6 text-primary"/>
                        Our Corporate Services
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                        {corporateServices.map((service, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-muted-foreground">{service}</span>
                          </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl flex items-center gap-3">
                         <Users className="w-6 h-6 text-primary"/>
                        Why Choose Zypix?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                     <ul className="space-y-3">
                        {whyChooseZypix.map((reason, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                            <span className="text-muted-foreground">{reason}</span>
                          </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
        
        <section className="bg-card p-8 rounded-lg shadow-lg border text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">
            Let’s Create Impact Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you're refreshing your website, preparing a media kit, or documenting a corporate event — Zypix helps your brand look its best.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/#book-session">
                        <Calendar className="mr-2 h-5 w-5" />
                        Schedule a Corporate Shoot
                    </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">
                        Contact Our Business Team
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
