import React from 'react';
import { ChatMessage } from '../../context';
import { cn } from '@/lib/utils';

interface ChatBubble extends ChatMessage {
  isLoading: boolean;
}

export const ChatBubble: React.FC<ChatBubble> = ({ isSender, isLoading, message }) => {
  return (
    <div
      className={cn('p-6 rounded-lg flex justify-start gap-4 my-2', {
        'bg-zinc-100': !isSender,
      })}
    >
      <Avatar isSender={isSender} prefix={isSender ? 'Y' : 'C'} />
      <div className="mt-2">
        <div
          className={cn('text-sm font-bold', {
            'text-blue': !isSender,
            'text-grey': isSender,
          })}
        >
          {isSender ? 'You' : 'Chat GPT'}
        </div>
        <div className="text-sm font-medium">{message}</div>
      </div>
    </div>
  );
};

const Avatar: React.FC<{ isSender: boolean; prefix: string }> = ({ isSender, prefix }) => {
  return (
    <div
      className={cn(
        'w-[56px] h-[56px] min-w-[56px] flex items-center justify-center rounded-full',
        {
          'bg-purple': isSender,
          'bg-blue': !isSender,
        }
      )}
    >
      <div className="text-white text-md font-bold">{prefix}</div>
    </div>
  );
};
