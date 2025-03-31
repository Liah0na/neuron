import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Neuron IT",
    default: "Neuron IT Ltda."
  },
  authors: [{
    name: "Nestor R. Otondo R.",
    url: "",
  }],
  description: "Generated by create next app",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
