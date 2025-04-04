import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Agentic Mechanic",
  description: "Get in touch with the Agentic Mechanic team. We're here to help with any questions or feedback.",
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
