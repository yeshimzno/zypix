'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, UserCog, Share2, Lock, ShieldCheck, Baby, FilePen, Mail, Globe, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    // Set title dynamically for client components
    document.title = 'Privacy Policy | Zypix';
    // Set date safely on the client
    setLastUpdated(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  const sections = [
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "1. Information We Collect",
      content: [
        "<strong>Information You Provide:</strong> Account details (name, email, phone number, password), profile info (location, optional photo), booking details, and payment information (processed by secure third-party gateways).",
        "<strong>Automatically Collected Information:</strong> Device info (IP address, browser, OS), usage data (pages viewed, time spent), and location data (if GPS is enabled)."
      ]
    },
    {
      icon: <UserCog className="w-6 h-6 text-primary" />,
      title: "2. How We Use Your Information",
      content: [
        "To create and manage your account.",
        "To process your bookings and payments securely.",
        "To connect you with photographers based on your needs.",
        "To communicate with you via in-app notifications, email, or SMS.",
        "To improve our platform’s features, safety, and user experience.",
        "To comply with legal and regulatory obligations."
      ]
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "3. Sharing Your Information",
      content: [
        "<strong>Photographers:</strong> We share limited details (name, contact number, location) for confirmed bookings.",
        "<strong>Payment Providers:</strong> To process transactions securely.",
        "<strong>Analytics Tools:</strong> To improve our platform's performance (e.g., Google Analytics).",
        "<strong>Legal Authorities:</strong> If required by law or to protect our platform and users.",
        "We do not sell your personal data to any third parties."
      ]
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "4. Data Security",
      content: [
        "We use industry-standard security measures like HTTPS and encrypted credentials.",
        "While we take data security seriously, no system is 100% secure. We encourage you to use strong passwords."
      ]
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "5. Your Rights",
      content: [
        "Depending on your location, you may have the right to access, correct, or request deletion of your data.",
        "You can opt-out of promotional communications at any time.",
        "To make any such request, please email us at zypixservices@gmail.com."
      ]
    },
    {
      icon: <Baby className="w-6 h-6 text-primary" />,
      title: "6. Children’s Privacy",
      content: [
        "Zypix is intended for users aged 13 and above. We do not knowingly collect data from children under 13.",
        "If you believe a child has provided us with data, please contact us at zypixservices@gmail.com to have it removed."
      ]
    },
    {
      icon: <FilePen className="w-6 h-6 text-primary" />,
      title: "7. Changes to This Policy",
      content: [
        "We may update this Privacy Policy periodically. We will notify you of any significant changes via the app or email."
      ]
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Zypix Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            This policy explains how we collect, use, and protect your personal information when you use our platform.
          </p>
           <p className='text-sm text-muted-foreground mt-2'>Last Updated: {lastUpdated || '...'}</p>
        </section>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index} className="bg-card/50">
              <CardHeader>
                <CardTitle className="flex items-start gap-4 font-headline text-xl md:text-2xl">
                  <div className="mt-1 flex-shrink-0">{section.icon}</div>
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pl-16">
                <ul className="space-y-2 text-muted-foreground list-disc list-outside">
                  {section.content.map((point, i) => 
                    <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: point }} />
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card p-6 text-center shadow-lg border">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-3 font-headline text-2xl mb-4">
                <Mail className="w-6 h-6 text-primary" />
                8. Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              For any privacy-related questions, concerns, or requests, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                     <Link href="mailto:zypixservices@gmail.com" className="font-semibold text-foreground hover:underline">
                      zypixservices@gmail.com
                    </Link>
                </div>
                 <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-primary" />
                     <Link href="https://www.zypix.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
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
