import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Tv } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Media Center | Zypix',
  description: 'Zypix press and media inquiries. Get in touch for collaborations and announcements.',
};

export default function MediaCenterPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-12 px-4">
        <section className="text-center">
           <div className="flex justify-center mb-4">
             <Tv className="w-16 h-16 text-primary" />
           </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Media Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Welcome to the Zypix Media Center.
          </p>
        </section>

        <section>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
             We’re on a mission to simplify professional photography through smart, on-demand booking — anytime, anywhere. Our journey has just begun, and we’re excited to share updates, announcements, and stories as we grow.
          </p>
        </section>

        <Card className="shadow-lg border">
          <CardHeader>
            <CardTitle className="text-2xl font-headline text-center">Media Inquiries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-lg text-center">
            <p className="text-muted-foreground">For media or collaboration inquiries, contact us at:</p>
            <div className="flex items-center justify-center gap-4 p-4 rounded-lg bg-card border w-fit mx-auto">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <Link href="mailto:zypixservices@gmail.com" className="font-semibold text-foreground hover:text-primary hover:underline">
                  zypixservices@gmail.com
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
