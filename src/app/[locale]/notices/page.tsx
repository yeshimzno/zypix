import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gavel, Mail, Bell, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notices | Zypix',
  description: 'Official legal notices and communications from Zypix.',
};

export default function NoticesPage() {
  const communicationChannels = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      description: "Sent to the registered email address associated with your Zypix account."
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "In-app Notifications",
      description: "Delivered directly through the Zypix mobile or web application."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Website Announcements",
      description: "Published on our official website at www.zypix.in."
    }
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <section className="text-center">
          <div className="flex justify-center mb-4">
            <Gavel className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Legal Notices
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            All legal notices, communications, or official updates from Zypix will be provided through one or more of the following channels.
          </p>
        </section>

        <section>
          <Card className="shadow-lg border">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Communication Channels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {communicationChannels.map((channel, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border">
                  {channel.icon}
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{channel.title}</h3>
                    <p className="text-muted-foreground">{channel.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
        
        <section className="bg-card p-8 rounded-lg shadow-lg border">
          <p className="text-muted-foreground leading-relaxed text-center">
            By using the Zypix platform, you consent to receive electronic communications from us, and you acknowledge that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing.
          </p>
          <p className="text-muted-foreground leading-relaxed text-center mt-4">
            It is your responsibility to ensure that your contact details are accurate and up to date. Zypix is not responsible for any missed communication due to outdated or incorrect information provided by you.
          </p>
        </section>

        <Card className="bg-card p-6 text-center shadow-lg border">
            <CardHeader className="p-0 mb-4">
                <CardTitle className="flex items-center justify-center gap-3 font-headline text-2xl">
                    <Mail className="w-6 h-6 text-primary" />
                    Contact for Legal Queries
                </CardTitle>
            </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">
              For legal queries or formal notices to Zypix, please contact:
              <Link href="mailto:zypixservices@gmail.com" className="font-semibold text-primary hover:underline ml-2">
                zypixservices@gmail.com
              </Link>
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
