
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Rocket, Camera, MapPin, DollarSign, Zap, Users, XCircle, Shield, Briefcase, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Zypix',
  description: 'Find answers to common questions about booking photographers, cancellations, and pricing on Zypix.',
};

const faqItems = [
  {
    icon: <HelpCircle className="w-5 h-5 text-primary"/>,
    question: "What is Zypix?",
    answer: "Zypix is an on-demand photography platform that lets you instantly book professional photographers for personal or business needs — anytime, anywhere."
  },
  {
    icon: <Rocket className="w-5 h-5 text-primary"/>,
    question: "How does Zypix work?",
    answer: <>Just choose your shoot type (Personal or Business), select a location, and book your preferred time. You can also tap 'Instant Zypix' to get a photographer within 10 minutes near you. For full details, check out our <Link href='/how-it-works' className='text-primary hover:underline'>How It Works</Link> page.</>
  },
  {
    icon: <Camera className="w-5 h-5 text-primary"/>,
    question: "What types of photography do you offer?",
    answer: "We offer services for a wide range of categories including: Events, Weddings, Fashion, Portraits, Reels, Corporate, Product, Documentaries, Food, Travel, Drone, Music Videos, Family, Sports & more."
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary"/>,
    question: "Where is Zypix available?",
    answer: <>Zypix is currently available in major Indian cities and is expanding rapidly. Use the <Link href='/find-location' className='text-primary hover:underline'>Find a Location</Link> tool on the site/app to check availability in your area.</>
  },
  {
    icon: <DollarSign className="w-5 h-5 text-primary"/>,
    question: "How much does a session cost?",
    answer: <>We offer competitive, affordable pricing based on shoot type and duration. Visit the <Link href='/pricing' className='text-primary hover:underline'>Pricing</Link> section to view detailed rates.</>
  },
  {
    icon: <Zap className="w-5 h-5 text-primary"/>,
    question: "Can I book a photographer instantly?",
    answer: "Yes! With 'Instant Zypix', we match you with a nearby available photographer in under 10 minutes, subject to availability."
  },
  {
    icon: <Users className="w-5 h-5 text-primary"/>,
    question: "Who are your photographers?",
    answer: "Zypix partners with verified, experienced freelance photographers who pass our quality and background checks to ensure you get the best service."
  },
  {
    icon: <XCircle className="w-5 h-5 text-primary"/>,
    question: "How do I cancel or reschedule a session?",
    answer: <>You can cancel or reschedule via your booking dashboard. Please refer to our <Link href='/cancellation-policy' className='text-primary hover:underline'>Cancellation Policy</Link> for detailed information on timing and refund rules.</>
  },
    {
    icon: <Truck className="w-5 h-5 text-primary"/>,
    question: "Is travel included in the pricing?",
    answer: <>Our pricing generally covers the photographer's service within their designated city limits. Significant travel outside this area may incur additional charges, which will be communicated and agreed upon beforehand. All our service prices are listed on the <Link href='/pricing' className='text-primary hover:underline'>Pricing</Link> page.</>
  },
  {
    icon: <Shield className="w-5 h-5 text-primary"/>,
    question: "Is Zypix safe for users under 18?",
    answer: "Yes, Zypix is available for users 13 and above, with content moderation and safety protocols in place. Users below 18 should use the platform with parental awareness and supervision."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-primary"/>,
    question: "How can I become a Zypix photographer?",
    answer: <>We’re always looking for creative talent! Visit our <Link href='/join-us' className='text-primary hover:underline'>Zypix for Photographers</Link> page and fill out the application form to join our network.</>
  }
];


export default function FAQPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto space-y-12 px-4">
        <section className="text-center">
           <div className="flex justify-center mb-4">
             <HelpCircle className="w-16 h-16 text-primary" />
           </div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We’ve got answers. If you can’t find what you’re looking for, feel free to contact our support team.
          </p>
        </section>

        <section>
          <Accordion type="single" collapsible className="w-full">
             {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left">
                        <div className="flex items-center gap-3">
                            {item.icon}
                            <span>{item.question}</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base pl-10">
                      {item.answer}
                    </AccordionContent>
                </AccordionItem>
             ))}
          </Accordion>
        </section>
        
        <section className="text-center bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold font-headline mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
                Our support team is ready to help you with any other queries you might have.
            </p>
            <Button asChild>
                <Link href="/contact">Contact Support</Link>
            </Button>
        </section>

      </div>
    </div>
  );
}
