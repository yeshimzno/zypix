import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo-2'
});

export const metadata: Metadata = {
  title: 'Zypix – Photography. On Demand.',
  description: 'Real talent. Right at your fingertips.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${exo2.variable} font-body antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
