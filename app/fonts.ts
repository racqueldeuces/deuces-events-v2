import { DM_Sans, Playfair_Display } from 'next/font/google';

export const sans = DM_Sans({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-site-sans', display: 'swap' });
export const display = Playfair_Display({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-site-display', display: 'swap' });
