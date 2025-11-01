import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture & Water Hackathon",
  description: "Join the hackathon for a sustainable future in agriculture and water management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

