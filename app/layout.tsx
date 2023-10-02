import Link from "next/link";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ModeToggle } from "@/components/mode-toggle";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import Header from "@/components/header";

const customFont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Timo D",
  description: "Loan Specialist",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-ash_gray-100  text-jet-100 dark:text-jet-900 ${customFont.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="mx-8 flex flex-col w-full justify-center items-center">
            {children}
          </main>
          <Footer />

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
