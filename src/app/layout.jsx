import { Inter } from "next/font/google";
import "./style.css";
import Providers from "@/providers";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: for CSS variables
});

export const metadata = {
  title: "Service",
  description: "service dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}