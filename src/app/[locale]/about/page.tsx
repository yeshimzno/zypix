import { CheckCircle, Target, Rocket, Star, HelpCircle } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About Zypix',
  description: 'Learn more about Zypix, the platform that connects you with professional photographers instantly.',
};

export default function AboutPage() {
  const offerings = [
    "Instant photographer booking for any occasion",
    "Verified professionals with ratings and portfolios",
    "Transparent pricing — no hidden fees",
    "Web & mobile app for seamless experience",
    "24/7 customer support"
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            📸 About <span className="text-primary">Zypix</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A fast, smart, and reliable platform that connects you with professional photographers — instantly.
          </p>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <p className="text-lg md:text-xl text-center italic text-foreground mb-6">
            "We built Zypix with one simple idea: finding the right photographer shouldn’t take hours."
          </p>
          <p className="text-muted-foreground leading-relaxed text-justify">
            Born out of the need for fast and hassle-free photography services, Zypix brings together top-rated photographers and clients on one powerful platform — available on web and mobile. Whether it’s a wedding, birthday, event, or a quick portfolio shoot, Zypix makes booking a skilled photographer as easy as ordering your favorite coffee. With real-time availability, instant booking, and transparent pricing, we’re transforming how photography services are booked.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-start">
            <section className="bg-card p-6 rounded-lg border">
                <h2 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4">
                    <Target className="text-primary w-8 h-8" />
                    Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    To make quality photography accessible to everyone, anytime, anywhere — in just a few clicks.
                </p>
            </section>
            
            <section className="bg-card p-6 rounded-lg border">
                <h2 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4">
                    <Star className="text-accent w-8 h-8" />
                    Why Choose Zypix?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    Because your best moments deserve to be captured — quickly, beautifully, and stress-free.
                </p>
            </section>
        </div>

        <section>
          <h2 className="flex items-center justify-center gap-3 text-3xl font-bold font-headline mb-8">
            <Rocket className="text-primary w-8 h-8" />
            What We Offer
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {offerings.map((item, index) => (
              <li key={index} className="flex items-start gap-4 p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-card p-8 rounded-lg shadow-lg border text-center">
            <h2 className="flex items-center justify-center gap-3 text-3xl font-bold font-headline mb-4">
                <HelpCircle className="text-primary w-8 h-8" />
                Get in Touch
            </h2>
            <div className="text-center text-muted-foreground max-w-2xl mx-auto">
                <p className="mb-6">
                    Have questions, feedback, or need help with a booking? We're here for you! Please visit our contact page for more information.
                </p>
                <Button asChild>
                    <Link href="/contact">
                       Contact Us
                    </Link>
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
}
