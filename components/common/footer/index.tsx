'use client';
import Link from 'next/link';
import React from 'react';
import Container from '../container';
import { Button } from '@/components/ui/button';
import { LogoMain } from '@/components/ui/svgs';

const FooterTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="mb-4 text-md text-white">{children}</h3>;
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link href={href} passHref>
      <li className="mb-1 text-grey">{children}</li>
    </Link>
  );
};

const FooterMenu = ({ children }: { children: React.ReactNode }) => {
  return <menu>{children}</menu>;
};

export const Footer = () => {
  return (
    <footer className="border-y border-zinc-400">
      <Container size="large" className="flex justify-start gap-12 py-10 max-md:flex-col">
        <section className="max-w-[475px] flex-col gap-2 text-lg">
          <p className="mb-6">We would love to hear from you. Let’s work — together with Reload</p>
          <Button size="xl">Contact Us</Button>
        </section>
        <section className="flex flex-wrap gap-y-4 max-md:gap-x-1">
          <div className="w-1/2">
            <FooterTitle>Business requires</FooterTitle>
            <FooterMenu>
              <FooterLink href="/">hello@colstic.com</FooterLink>
              <FooterLink href="/">+12345678</FooterLink>
            </FooterMenu>
          </div>
          <div className="w-1/2">
            <FooterTitle>Open positions</FooterTitle>
            <FooterMenu>
              <FooterLink href="/">Junior graphic Design</FooterLink>
              <FooterLink href="/">Videography</FooterLink>
              <FooterLink href="/">Photography</FooterLink>
            </FooterMenu>
          </div>
          <div className="w-1/2">
            <FooterTitle>London</FooterTitle>
            <FooterMenu>
              <FooterLink href="/">
                133A Rye lane London SE15 4BQ <br /> UK
              </FooterLink>
            </FooterMenu>
          </div>
          <div className="w-1/2">
            <FooterTitle>Cape town</FooterTitle>
            <FooterMenu>
              <FooterLink href="/">14 Upper pepper street CBD, 8001</FooterLink>
            </FooterMenu>
          </div>
        </section>
      </Container>
      <section className="border-t border-zinc-400 py-10">
        <Container
          size="large"
          className="flex items-center justify-between max-md:flex-col max-md:gap-5"
        >
          <LogoMain />
          <nav className="flex gap-6 font-medium">
            <FooterTitle>DRIBBLE</FooterTitle>
            <FooterTitle>INSTAGRAM</FooterTitle>
            <FooterTitle>LINKEDIN</FooterTitle>
          </nav>
        </Container>
      </section>
    </footer>
  );
};
