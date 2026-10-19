import { LogIn, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy-950">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo className="h-9 w-[145px]" />
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-teal-400"
          >
            <Mail size={15} aria-hidden="true" />
            {siteConfig.email}
          </a>
          <a
            href={siteConfig.clientPortalUrl}
            className="inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-teal-400"
          >
            <LogIn size={15} aria-hidden="true" />
            Client login
          </a>
        </div>

        <div className="flex flex-col gap-1.5 text-sm text-mist-dim sm:text-right">
          <p className="text-mist">{siteConfig.tagline}</p>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-4 gap-y-1 sm:justify-end">
            <a href="/privacy/" className="transition-colors hover:text-teal-400">Privacy Policy</a>
            <a href="/terms/" className="transition-colors hover:text-teal-400">Terms of Service</a>
            <a href="/sms/" className="transition-colors hover:text-teal-400">Text Sign-up</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
