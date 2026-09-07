import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://novahelp-support-ops-lab.clementkosi.chatgpt.site"),
  title: "NovaHelp Support Operations Lab",
  description: "An interactive support operations simulation covering triage, troubleshooting, identity, security, AI assistance, and escalation.",
  openGraph: {
    title: "NovaHelp Support Operations Lab",
    description: "Triage, troubleshoot, secure, escalate, and document 18 realistic SaaS support scenarios.",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "NovaHelp Support Operations Lab" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaHelp Support Operations Lab",
    description: "An interactive SaaS support workflow simulation.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
