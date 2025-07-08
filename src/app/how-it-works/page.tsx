
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Camera, Users, CalendarCheck, CreditCard, CheckCircle, Rocket, ShieldCheck, Tag, Headset } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'How It Works | Zypix',
  description: 'Learn how to book a professional photographer in just a few simple steps with Zypix.',
};

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Choose Your Location",
      description: "Enter your city or allow location access to find nearby available photographers.",
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Select Your Service",
      description: "Pick the type of shoot you need — wedding, birthday, event, pre-wedding, product, etc.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Browse Photographers",
      description: "View verified profiles with portfolios, ratings, pricing, and real-time availability.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-primary" />,
      title: "Book Instantly",
      description: "Select a time slot and book your preferred photographer in seconds.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-primary" />,
      title: "Pay Securely",
      description: "Pay online through our secure payment gateway. No hidden charges.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Get Captured",
      description: "Your photographer arrives on time. Enjoy the shoot — we’ll handle the rest.",
    },
  ];

  const whyZypix = [
      {
          icon: <Rocket className="w-6 h-6 text-accent"/>,
          title: "Fast & Hassle-Free"
      },
      {
          icon: <ShieldCheck className="w-6 h-6 text-accent"/>,
          title: "Verified Pros Only"
      },
      {
          icon: <Tag className="w-6 h-6 text-accent"/>,
          title: "Transparent Pricing"
      },
      {
          icon: <Headset className="w-6 h-6 text-accent"/>,
          title: "24/7 Support"
      }
  ]

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-16 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            How It Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Booking a professional photographer has never been this easy. With Zypix, it’s just a few taps away.
          </p>
        </section>

        <section>
          <div className="relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-border -z-10 hidden md:block" />
             <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center gap-8 md:gap-12 odd:md:flex-row-reverse">
                      <div className="flex-shrink-0 flex items-center justify-center bg-card border-2 border-primary rounded-full h-24 w-24 relative shadow-lg">
                          <span className="absolute -top-3 -left-3 flex items-center justify-center bg-primary text-primary-foreground font-bold rounded-full h-8 w-8 text-lg">
                              {index + 1}
                          </span>
                          {step.icon}
                      </div>
                      <div className="text-center md:text-left md:w-1/2">
                          <h3 className="text-2xl font-bold font-headline mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                      </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        <section className="text-center">
           <Separator className="my-12"/>
          <h2 className="text-3xl font-bold font-headline mb-10 flex items-center justify-center gap-3">
             <Rocket className="w-8 h-8 text-primary"/>
             Why Zypix?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyZypix.map((item, index) => (
              <Card key={index} className="p-6 bg-card/50 border hover:border-primary transition-colors">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
