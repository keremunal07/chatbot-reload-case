'use client';
/* eslint-disable @next/next/no-img-element */
import { ArrowRightTall } from '@/components/ui/svgs';
import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Container from '@/components/common/container';
import { useRouter } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks: React.FC = () => {
  const router = useRouter();

  // preview rotating
  React.useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.how-it-works',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
    tl.from('.how-it-works .preview', {
      duration: 1,
      scale: 0.2,
      opacity: 0.2,
      y: -50,
    });

    tl.to('.how-it-works .preview', {
      duration: 1,
      scale: 1,
      opacity: 1,
    });
  }, []);

  return (
    <Container size="large">
      <section id="how-it-works" className="how-it-works mb-20">
        <h1 data-aos="fade-left" className="text-xl font-bold max-md:text-[40px]">
          Start chatting with <span className="text-blue">AI.</span>
        </h1>
        <p data-aos="fade-left" className="my-5 font-normal text-grey">
          Chat about any topic with ChatGPT in any time. It can <br /> be your friend, tutor or
          therapist.
        </p>
        <p
          onClick={() => router.push('/chat')}
          className="flex cursor-pointer items-center gap-2 font-semibold text-blue"
        >
          Let&apos;s start chat <ArrowRightTall />
        </p>

        <div className="preview relative my-12 w-full">
          <img src="/images/chat-bot-example.png" className="w-full" alt="AI Chatbot" />
        </div>
      </section>
    </Container>
  );
};
