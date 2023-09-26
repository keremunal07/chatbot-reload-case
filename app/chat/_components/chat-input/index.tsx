import React from 'react';
import { Input } from '@/components/ui/input';
import { IconSend } from '@/components/ui/svgs';

export const ChatInput: React.FC<{
  isLoading: boolean;
  sendMessage: (message: string) => void;
}> = ({ isLoading, sendMessage }) => {
  const [message, setMessage] = React.useState('');

  const handleClick = () => {
    sendMessage(message);
    setMessage('');
  };
  return (
    <div className="absolute bottom-0 mb-10 mt-4 flex h-16 w-full items-center gap-1 rounded-xl border-2 border-blue pl-4 pr-2">
      <Input
        placeholder="Send message"
        value={message}
        className="w-full border-none bg-transparent text-sm text-white outline-none focus-visible:ring-0 focus-visible:ring-offset-0 px-1"
        onKeyUp={(e) => {
          if (e.key === 'Enter' && !isLoading) {
            handleClick();
          }
        }}
        onChange={(e) => setMessage(e.target.value)}
      />
      <IconSend className="h-[44px] w-[52px]" onClick={() => !isLoading && handleClick()} />
    </div>
  );
};
