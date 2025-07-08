import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Zypix',
  description: 'Get in touch with the Zypix team. We are here to help with any questions or feedback.',
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions, feedback, or need help with a booking? We're here for you! Reach out anytime.
          </p>
        </section>

        <Card className="shadow-lg border">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-center">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <Link href="mailto:zypixservices@gmail.com" className="text-muted-foreground hover:text-foreground hover:underline">
                  zypixservices@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-muted-foreground">+91-XXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-card border">
              <Globe className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold text-foreground">Website</h3>
                <Link href="https://www.zypix.in" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground hover:underline">
                  www.zypix.in
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
