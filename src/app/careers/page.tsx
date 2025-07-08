import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Rocket, Users, Briefcase, Mail, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers | Zypix',
  description: 'Join the Zypix team and help us redefine the future of photography services.',
};

export default function CareersPage() {
  const openings = {
    "Product & Engineering": [
      "Mobile App Developer (React Native / Flutter)",
      "Backend Developer (Node.js, Firebase)",
      "UI/UX Designer",
    ],
    "Marketing & Growth": [
      "Digital Marketing Executive",
      "Social Media Strategist",
      "Content Writer (SEO-focused)",
    ],
    "Operations": [
      "Customer Support Specialist",
      "Photographer Onboarding Executive",
    ]
  };

  const whyJoinUs = [
    {
        icon: <Sparkles className="w-6 h-6 text-primary" />,
        title: "Purpose-Driven Work",
        description: "Build solutions that impact real people and real moments.",
    },
    {
        icon: <Rocket className="w-6 h-6 text-primary" />,
        title: "Dynamic Environment",
        description: "Fast-paced startup culture with a focus on innovation and ownership.",
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Collaborative Team",
        description: "Work with passionate professionals across tech, design, marketing, and operations.",
    },
    {
        icon: <MapPin className="w-6 h-6 text-primary" />,
        title: "Flexible Work Options",
        description: "Hybrid and remote-friendly roles available.",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-16 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Careers at <span className="text-primary">Zypix</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Empowering moments. Enabling talent.
          </p>
        </section>

        <section>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
             At Zypix, we're redefining how people connect with professional photographers — quickly, seamlessly, and with confidence. As we grow, we’re looking for driven, innovative individuals who are excited to shape the future of photography services. If you're passionate about technology, creativity, and making an impact — Zypix might be the place for you.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">
            Why Join Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {whyJoinUs.map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                 <div className="p-2 bg-primary/10 rounded-full">{item.icon}</div>
                 <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                 </div>
              </div>
            ))}
          </div>
           <Card className="mt-8 text-center bg-card/50 border-primary/20 p-6">
              <CardTitle className="text-xl font-headline mb-2">Growth Opportunities</CardTitle>
              <CardContent className="p-0">
                <p className="text-muted-foreground">
                    Learn, lead, and grow with a team that supports your journey.
                </p>
              </CardContent>
           </Card>
        </section>

        <section>
            <h2 className="text-3xl font-bold font-headline text-center mb-10">
                <Briefcase className="inline-block w-8 h-8 mr-3 text-primary" />
                Current Openings
            </h2>
            <div className="space-y-8">
                {Object.entries(openings).map(([department, roles]) => (
                    <Card key={department} className="shadow-md">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{department}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
                                {roles.map((role) => <li key={role}>{role}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="text-center mt-8 text-muted-foreground">
                <p><MapPin className="inline w-4 h-4 mr-1"/> Location: Remote / Hybrid / [City]</p>
                 <Button asChild className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="mailto:zypixservices@gmail.com">
                        <Mail className="mr-2 h-4 w-4"/>
                        To apply: Send your resume
                    </Link>
                </Button>
            </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 text-center border-dashed">
                <h3 className="font-headline text-xl mb-3">Internship & Freelance Opportunities</h3>
                <p className="text-muted-foreground mb-4">
                    We also welcome applications from students, freelancers, and independent creatives — including photographers, editors, and marketers. Let’s build together.
                </p>
            </Card>
            <Card className="p-6 text-center border-dashed">
                 <h3 className="font-headline text-xl mb-3">Not seeing the right fit?</h3>
                <p className="text-muted-foreground">
                    We’re always open to exceptional talent. If you believe you can add value to Zypix, reach out at <Link href="mailto:zypixservices@gmail.com" className="text-primary hover:underline">zypixservices@gmail.com</Link> with your profile and a short note.
                </p>
            </Card>
        </div>

      </div>
    </div>
  );
}
