import type { Metadata } from 'next';
import type { Viewport } from 'next';

import { ThemeProvider } from '@/components/theme-provider';
import { sans, display } from '@/app/fonts';

import './globals.css';
import './navigation.css';

export const metadata: Metadata = {
  title: 'Deuces Events | International Events & Wedding Planner Travel Coordination',
  description: 'Full-service event and wedding planning, décor, vendor coordination, and destination travel coordination from Deuces Events.',
  icons: { icon: "/revamp-original-favicon.png" },
  generator: 'Revamp',
};

// Declare only the appearances implemented by the site's styles.
export const viewport: Viewport = { colorScheme: 'light' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <body className="isolate">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
