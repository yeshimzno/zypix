import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tag, Info, Camera, Clock, IndianRupee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pricing Guide | Zypix',
  description: 'Affordable and transparent pricing for professional photography services across India.',
};

const pricingData = [
  { service: 'Architecture', duration: '1–2 Hours', price: 1499 },
  { service: 'Corporate', duration: '2–3 Hours', price: 2499 },
  { service: 'Documentaries', duration: 'Half Day / Project', price: 4999 },
  { service: 'Drone', duration: 'Per Session (30 mins)', price: 2999 },
  { service: 'Events', duration: '2–4 Hours', price: 2499 },
  { service: 'Family Portraits', duration: '1 Hour', price: 1199 },
  { service: 'Fashion', duration: '2–3 Hours', price: 2999 },
  { service: 'Food Photography', duration: '1–2 Hours', price: 1499 },
  { service: 'Mobile Photography', duration: '30–60 Mins', price: 799 },
  { service: 'Music Videos', duration: 'Half Day / Project', price: 5999 },
  { service: 'Personal Photographer', duration: '1–2 Hours', price: 1499 },
  { service: 'Portrait', duration: '30 Mins – 1 Hour', price: 999 },
  { service: 'Product Photography', duration: 'Per Batch (5–10 items)', price: 1299 },
  { service: 'Reels (Social Media)', duration: '1 Hour + Editing', price: 1499 },
  { service: 'Short Films', duration: 'Half to Full Day', price: 5999 },
  { service: 'Sports Coverage', duration: 'Match/Event Duration', price: 2499 },
  { service: 'Travel (Day Hire)', duration: 'Per Day', price: 3999 },
  { service: 'Wedding', duration: 'Full Day', price: 14999 },
  { service: 'Wildlife', duration: 'Per Safari / Day', price: 3999 },
];

export default function PricingPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <div className="flex justify-center mb-4">
            <Tag className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Zypix Pricing Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable and transparent photography services across India.
          </p>
        </section>

        <Card className="shadow-lg border">
          <CardHeader>
            <CardTitle>Service Pricing</CardTitle>
            <CardDescription>All prices are starting estimates and may vary based on specific requirements.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/3"><Camera className="inline-block w-4 h-4 mr-2" />Service</TableHead>
                  <TableHead className="w-1/3"><Clock className="inline-block w-4 h-4 mr-2" />Duration</TableHead>
                  <TableHead className="text-right"><IndianRupee className="inline-block w-4 h-4 mr-1" />Starting Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.service}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.duration}</TableCell>
                    <TableCell className="text-right font-mono">₹{item.price.toLocaleString('en-IN')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-primary/20">
            <CardHeader>
                 <CardTitle className="text-2xl font-headline flex items-center gap-3">
                    <Info className="w-6 h-6 text-primary" />
                    Important Notes
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                    <li>Prices shown are starting estimates for metro & Tier-1 cities. Costs in Tier-2/3 cities may be lower.</li>
                    <li>Standard pricing includes the photographer’s time, basic editing, and digital delivery of photos.</li>
                    <li>Advanced editing, physical prints, or additional hours are available at an extra cost.</li>
                    <li>We offer special combo discounts for multi-day bookings and loyal customers. Please inquire for details.</li>
                </ul>
            </CardContent>
        </Card>

      </div>
    </div>
  );
}
