'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, User, Server, Camera, CreditCard, Gem, ShieldAlert, XCircle, Lock, Edit, Mail } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfServicePage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Set title dynamically for client components
    document.title = 'Terms of Service | Zypix';
    // Set date safely on the client
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const terms = [
    {
      icon: <User className="w-6 h-6 text-primary" />,
      title: "1. Eligibility",
      content: [
        "You must be 13 years or older to use Zypix.",
        "If you are under 18, you may only use the platform under the supervision of a parent or legal guardian who agrees to these Terms on your behalf."
      ]
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "2. Your Account",
      content: [
        "You agree to provide accurate, current, and complete information during registration.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "Zypix reserves the right to suspend or terminate your account if any information is found to be false or misleading."
      ]
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "3. Use of Services",
      content: [
        "Zypix provides an online marketplace where users can search and book professional photographers, browse portfolios, and make secure payments.",
        "You agree not to misuse the platform, including harassment, system interference, or uploading harmful content."
      ]
    },
    {
      icon: <Camera className="w-6 h-6 text-primary" />,
      title: "4. Photographers & Deliverables",
      content: [
        "Zypix is a service facilitator, not the direct provider. Services are delivered by verified photographers.",
        "Users are expected to respect appointment times and communicate clearly about rescheduling or cancellations."
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-primary" />,
      title: "5. Payments & Refunds",
      content: [
        "Payments are processed securely via third-party gateways.",
        "Refund eligibility is evaluated based on our Cancellation & Refund Policy. A portion may be withheld for last-minute cancellations."
      ]
    },
    {
      icon: <Gem className="w-6 h-6 text-primary" />,
      title: "6. Pricing Transparency",
      content: [
        "All prices displayed are inclusive of service charges and applicable taxes, unless stated otherwise. Prices may vary by city, photographer, and service category."
      ]
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "7. Intellectual Property",
      content: [
        "All platform content and design are the property of Zypix. Photographers retain copyright to their original photos unless otherwise agreed with the client."
      ]
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      title: "8. Limitation of Liability",
      content: [
        "Zypix is not liable for any loss, damage, or issues arising between clients and photographers. Use of the platform is at your own risk."
      ]
    },
    {
      icon: <XCircle className="w-6 h-6 text-primary" />,
      title: "9. Account Termination",
      content: [
        "Zypix reserves the right to remove content, suspend, or terminate accounts that violate our terms or community standards."
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "10. Privacy",
      content: [
        "Your personal information is handled according to our Privacy Policy, which explains how we collect, use, and protect your data."
      ]
    },
    {
      icon: <Edit className="w-6 h-6 text-primary" />,
      title: "11. Modifications to the Terms",
      content: [
        "Zypix may update these Terms. We will notify users of major changes. Continued use of the service after updates constitutes acceptance of the new Terms."
      ]
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <div className="flex justify-center mb-4">
            <FileText className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Zypix Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to Zypix! Please read these Terms carefully before using our platform. By using Zypix, you agree to be bound by these Terms.
          </p>
           <p className='text-sm text-muted-foreground mt-2'>Last Updated: {lastUpdated || '...'}</p>
        </section>

        <div className="space-y-8">
          {terms.map((term, index) => (
            <Card key={index} className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-start gap-4 font-headline text-xl md:text-2xl">
                  <div className="mt-1 flex-shrink-0">{term.icon}</div>
                  <span>{term.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <ul className="space-y-2 text-muted-foreground list-disc list-outside">
                  {term.content.map((point, i) => <li key={i} className="pl-2">{point}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card p-6 text-center shadow-lg border">
          <CardTitle className="flex items-center justify-center gap-3 font-headline text-2xl mb-4">
            <Mail className="w-6 h-6 text-primary" />
            12. Contact Us
          </CardTitle>
          <p className="text-muted-foreground">
            For questions, feedback, or legal inquiries, please contact us at:
            <Link href="mailto:zypixservices@gmail.com" className="font-semibold text-primary hover:underline ml-2">
              zypixservices@gmail.com
            </Link>
          </p>
        </Card>

      </div>
    </div>
  );
}
