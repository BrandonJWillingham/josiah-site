import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components.js/utils";
import { Bodoni_Moda, Manrope } from 'next/font/google';

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
  weight: ['600','700','800'] // beefier for big titles
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"], // or omit to use variable defaults
  display: "swap",
  variable: "--font-manrope", // exposes a CSS var you can use in CSS/Tailwind
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Josiah Willingham",
  description: "Model Musician Josiah Willingham's Personal website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${bodoni.variable}`} style={{paddingInline: "clamp(5px, calc(-92.355px + 11.9697vw), 80px)" }}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
