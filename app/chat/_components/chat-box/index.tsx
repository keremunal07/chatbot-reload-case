import React from 'react';
import { ChatInput } from '../chat-input';
import { ChatBubble } from '../chat-bubble';
import { ChatContext } from '../../context';
import { DotLoader } from '@/components/common/dot-loader';

export const ChatBox: React.FC<ChatContext> = ({ messages, isLoading, sendMessage }) => {
  return (
    <div className="relative mx-auto h-full w-full max-w-[600px]">
      <div
        id="chatMessages"
        className="chatMessages no-scrollbar mt-5 grid h-[calc(100dvh_-_190px)] max-md:h-[calc(100dvh_-_250px)] place-items-end overflow-y-scroll"
      >
        <div className="mt-4 w-full">
          {messages.map((m, idx) => (
            <ChatBubble {...m} isLoading={isLoading} key={idx} />
          ))}
          {isLoading && (
            <div className="ml-3 w-24 rounded-xl bg-zinc-100 p-2">
              <DotLoader />
            </div>
          )}
        </div>
      </div>
      <ChatInput isLoading={isLoading} sendMessage={sendMessage} />
    </div>
  );
};
