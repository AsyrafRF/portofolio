import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "AsyrafRF | Software Engineer",
  description: "Portfolio saya menampilkan project web, UI/UX, dan coding experience.",
  keywords: ["portfolio", "frontend developer", "web development", "React", "Next.js"],
  authors: [{ name: "Asyraf Rais Fadhil", url: "https://asyrafrf.sroft.my.id" }],
  creator: "Asyraf Rais Fadhil",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],

  openGraph: {
    type: "website",
    url: "https://asyrafrf.sroft.my.id",
    title: "Asyraf Rais Fadhil | Frontend Developer",
    description: "Portfolio saya menampilkan project web, UI/UX, dan coding experience.",
    siteName: "Portfolio Asyraf Rais Fadhil",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/161104565?v=4",
        width: 1200,
        height: 630,
        alt: "Portfolio Asyraf Rais Fadhil",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Asyraf Rais Fadhil | Frontend Developer",
    description: "Portfolio saya menampilkan project web, UI/UX, dan coding experience.",
    images: ["https://avatars.githubusercontent.com/u/161104565?v=4"],
    creator: "@acakadulan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}