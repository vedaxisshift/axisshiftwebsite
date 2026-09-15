"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-line-soft bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-3.5">
        <a
          href="/#top"
          className="shrink-0"
          aria-label="Axis Shift Data Systems home"
        >
          <Logo />
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 xl:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-mist transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button
            href="/demo"
            className="whitespace-nowrap px-5 py-2.5 text-sm"
          >
            Request a Private Demo
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="absolute left-0 right-0 top-full z-[60] border-b border-line-soft bg-navy-950 shadow-2xl xl:hidden"
        >
          <Container className="flex flex-col gap-1 py-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-ink transition-colors hover:bg-navy-800"
              >
                {link.label}
              </a>
            ))}

            <Button href="/demo" className="mt-4 w-full">
              Request a Private Demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
