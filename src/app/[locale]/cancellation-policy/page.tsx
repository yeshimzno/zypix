import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, RotateCw, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cancellation & Refund Policy | Zypix',
  description: 'Understand the cancellation and refund policies for your Zypix photography bookings.',
};

export default function CancellationPolicyPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Cancellation & Refund Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand that plans can change. Here’s how we handle cancellations and refunds to be fair to both our clients and photographers.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <Shield className="text-primary w-8 h-8" />
                Cancellation by You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground">Scheduled Bookings</h3>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li><strong>Full Refund:</strong> Cancel at least 24 hours before your scheduled session time for a 100% refund.</li>
                  <li><strong>Partial Refund:</strong> If you cancel within 24 hours of the session, a 50% cancellation fee will apply.</li>
                  <li><strong>No Refund:</strong> No refund will be issued if you fail to show up for your session or cancel after the scheduled start time.</li>
                </ul>
              </div>
               <div>
                <h3 className="font-semibold text-foreground">Instant Zypix Bookings</h3>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>You may cancel for a full refund within 5 minutes of booking, provided the photographer has not yet been dispatched.</li>
                  <li>Once a photographer is confirmed and en route, cancellations are non-refundable.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <Clock className="text-primary w-8 h-8" />
                Cancellation by Zypix
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                In the unlikely event that a photographer cancels or Zypix cannot fulfill your booking, we are committed to making it right.
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>You will be offered the choice of a <strong>full 100% refund</strong> to your original payment method.</li>
                  <li>Alternatively, we can help you <strong>reschedule with another available photographer</strong> at no additional cost.</li>
                </ul>
            </CardContent>
          </Card>
        </div>

        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4">
                <RotateCw className="text-accent w-8 h-8" />
                Refund Process
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Approved refunds are processed promptly. Please allow 5-7 business days for the refund to reflect in your account, depending on your bank or payment provider's policies. All refunds will be issued to the original method of payment.
              </p>
            </div>
             <div>
              <h2 className="flex items-center gap-3 text-2xl font-bold font-headline mb-4">
                <HelpCircle className="text-accent w-8 h-8" />
                How to Cancel
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To cancel a booking, please navigate to your bookings dashboard or use the cancellation link in your confirmation email. For any issues or immediate assistance, please contact our support team via the in-app chat.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
