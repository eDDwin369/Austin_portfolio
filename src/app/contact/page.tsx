import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact & Inquiries | Austin Paul",
  description:
    "Get in touch with Austin Paul for software engineering roles, mobile platform development, and cloud integrations.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-[70vh]">
      <Contact />
    </div>
  );
}
