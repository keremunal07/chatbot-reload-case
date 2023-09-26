'use client';
import { ArrowLeft, LogoMain } from '@/components/ui/svgs';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ChatBox } from './_components';
import { useChatContext } from './context';
import useMediaQuery from '@/hooks/use-media-query';

const Chat: NextPage = () => {
  const router = useRouter();
  const ctx = useChatContext();
  const isMobile = useMediaQuery('(max-width:767px)');
  return (
    <section className="flex h-[100dvh] w-full justify-start overflow-hidden max-md:flex-col">
      <aside className="chat-sidebar h-full w-full max-w-[600px] bg-zinc-200 max-md:h-16 max-md:max-w-full max-md:bg-none max-md:px-8">
        <header className="mx-auto my-10 flex w-full max-w-[350px] items-center justify-start max-md:my-5  max-md:max-w-full">
          <div
            onClick={() => router.push('/')}
            className="flex cursor-pointer items-center gap-2 text-blue"
          >
            <ArrowLeft /> Back
          </div>
        </header>

        {((isMobile && !ctx.messages.length) || !isMobile) && (
          <div className="mx-auto mt-[140px] w-full max-w-[325px] text-center">
            <h1 className="text-2-lg  font-bold">
              <span className="text-blue">AI</span> Chatbot
            </h1>
            <p className="font-medium text-grey">
              We’ve trained a model called ChatGPT which interacts in a conversational way.
            </p>
          </div>
        )}
      </aside>
      <div className="h-full w-full p-8 max-md:rounded-t-xl">
        <LogoMain />
        <ChatBox {...ctx} />
      </div>
    </section>
  );
};

export default Chat;
