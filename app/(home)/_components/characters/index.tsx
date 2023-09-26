/* eslint-disable @next/next/no-img-element */
'use client';
import Container from '@/components/common/container';
import { Button } from '@/components/ui/button';
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

const characterData = [
  {
    src: '/images/mock-image-2.png',
    label: 'Hitachi Digital Brand Ecosystem.',
  },
  {
    src: '/images/mock-image.png',
    label: 'Commons.',
  },
  {
    src: '/images/mock-image-2.png',
    label: 'Zvurçyk Fashion',
  },
  {
    src: '/images/mock-image.png',
    label: 'Stråbe',
  },
  {
    src: '/images/mock-image-2.png',
    label: 'Aeizei',
  },
  {
    src: '/images/mock-image.png',
    label: 'Lancome',
  },
  {
    src: '/images/mock-image-2.png',
    label: 'Hitachi Digital Brand Ecosystem.',
  },
  {
    src: '/images/mock-image.png',
    label: 'Commons.',
  },
  {
    src: '/images/mock-image-2.png',
    label: 'Zvurçyk Fashion',
  },
];

export const Characters: React.FC = () => {
  const router = useRouter();

  // horizontal parallax scroll
  React.useEffect(() => {
    let characters: HTMLElement | null = document.querySelector('.characters') as HTMLElement;
    const scrollableWidth = characters.offsetWidth;

    const tween = gsap.to(characters, {
      x: -scrollableWidth + 580,
      duration: 20,
      ease: 'none',
    });

    ScrollTrigger.create({
      trigger: '.scroll-trigger',
      start: 'center center',
      end: () => `+=${scrollableWidth}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
  }, []);

  return (
    <section className="scroll-trigger w-full border-y border-zinc-400">
      <Container size="large" className="flex items-start justify-start max-md:flex-col">
        <div className="w-full max-w-xl border-r border-zinc-400 pr-12 pt-20 max-md:border-r-0">
          <h1
            data-aos="fade-left"
            className="text-xl font-bold leading-[72px] max-md:text-[30px] max-md:leading-[45px]"
          >
            Chat with unique characters
          </h1>
          <p data-aos="fade-left" className="my-7 text-md font-medium text-grey">
            You can chat many different characters for a few set of topics and interests.
          </p>
          <Button
            onClick={() => router.push('/chat')}
            variant="secondary"
            size="lg"
            className="rounded-xl"
          >
            Let&apos; start chat
          </Button>

          <figure className="my-12 h-[460px] w-full rounded-lg bg-zinc-50 max-md:hidden" />
        </div>
        <div className="no-scrollbar ml-12 w-full overflow-x-scroll py-20 max-md:ml-0">
          <div className="characters grid w-[875px] grid-cols-3 grid-rows-3 gap-5 overflow-hidden max-md:grid-cols-9 max-md:grid-rows-1 max-md:w-[2500px]">
            {characterData.map((c, idx) => (
              <div className="w-[250px]" key={idx}>
                <img src={c.src} alt="AI Chatbot" />
                <p className="pt-3">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
