import { Exo_2 } from 'next/font/google';
import {
  Bell,
  Home,
  Users,
  Camera,
  CreditCard,
  Settings,
  BookOpen,
} from 'lucide-react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ThemeProvider } from '@/components/ThemeProvider';

const exo2 = Exo_2({ 
  subsets: ['latin'],
  variable: '--font-exo-2'
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${exo2.variable} font-body antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-primary"
                    >
                        <path d="M16.5 4H7.5C6.67 4 6 4.67 6 5.5V6.5H18V5.5C18 4.67 17.33 4 16.5 4Z" />
                        <path d="M2 9C2 7.9 2.9 7 4 7H20C21.1 7 22 7.9 22 9V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V9Z" />
                        <circle cx="12" cy="14" r="4" fill="hsl(var(--sidebar-background))" />
                        <circle cx="12" cy="14" r="2.5" fill="currentColor" />
                    </svg>
                    <span className="font-bold text-lg">Zypix Admin</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive>
                    <Link href="/admin">
                      <Home />
                      Dashboard
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Users />
                      User Management
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <Camera />
                      Photographer Mgmt
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                 <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <BookOpen />
                      Booking Management
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="#">
                      <CreditCard />
                      Earnings & Commission
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                 <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                             <Link href="#">
                                 <Settings />
                                 Settings
                             </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                 </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <header className="flex items-center justify-between p-4 border-b bg-card">
                 <SidebarTrigger className="md:hidden"/>
                 <div className="hidden md:block font-semibold">Zypix Admin Panel</div>
                 <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://placehold.co/100x100.png" alt="Admin" data-ai-hint="person" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                 </div>
            </header>
            <main className="p-4 sm:p-6 lg:p-8 bg-background">{children}</main>
          </SidebarInset>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}