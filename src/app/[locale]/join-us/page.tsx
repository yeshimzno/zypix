import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleRight, Bell, LayoutDashboard, UploadCloud, BarChart, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join as a Photographer | Zypix',
  description: 'Grow your photography business with Zypix. Get more clients, manage bookings, and get paid easily.',
};

export default function JoinUsPage() {
  const features = [
    {
      icon: <ToggleRight className="w-8 h-8 text-primary" />,
      title: "Full Control Over Your Schedule",
      description: "Use our availability toggle to go online or offline anytime. You decide when you work."
    },
    {
      icon: <Bell className="w-8 h-8 text-primary" />,
      title: "Instant Booking Notifications",
      description: "Get real-time alerts for jobs near you. Accept or reject them with a single tap."
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
      title: "Your Mission Control",
      description: "A powerful dashboard to manage bookings, view client details, and see route maps."
    },
    {
      icon: <UploadCloud className="w-8 h-8 text-primary" />,
      title: "Simplified Photo Delivery",
      description: "Upload and deliver final images directly to the client's secure gallery through the app."
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Earnings at a Glance",
      description: "Track your income with a real-time earnings dashboard. Know where you stand financially."
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Hassle-Free Payouts",
      description: "Easily configure your payout settings and receive prompt, secure payments for your work."
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto space-y-16 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Join the <span className="text-primary">Zypix</span> Photographer Network
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take your photography career to the next level? Partner with Zypix to connect with new clients, streamline your bookings, and grow your business.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold font-headline text-center mb-10">Powerful Features for Photographers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-card border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border text-center">
          <h2 className="text-3xl font-bold font-headline mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Our application process is simple, including a quick KYC verification to build a trusted community. Join our network of talented professionals today and start receiving booking requests.
          </p>
          <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/signup">
              Apply to Join Now <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
