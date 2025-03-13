import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevOps Portfolio | Modern Infrastructure & Automation",
  description: "A showcase of DevOps skills, projects, and expertise in CI/CD, containerization, infrastructure as code, and cloud technologies.",
  keywords: ["DevOps", "Cloud", "Infrastructure as Code", "CI/CD", "Kubernetes", "Docker", "AWS", "Azure", "GCP", "Terraform", "Ansible", "Portfolio"],
  authors: [{ name: "Your Name", url: "https://github.com/yourusername" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    title: "DevOps Portfolio | Modern Infrastructure & Automation",
    description: "A showcase of DevOps skills, projects, and expertise in CI/CD, containerization, infrastructure as code, and cloud technologies.",
    siteName: "DevOps Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Portfolio | Modern Infrastructure & Automation",
    description: "A showcase of DevOps skills, projects, and expertise in CI/CD, containerization, infrastructure as code, and cloud technologies.",
    creator: "@yourtwitterhandle",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
