'use client';
import React from 'react';
import OpenAI from 'openai';
import { scroller } from 'react-scroll';

export interface ChatContext {
  messages: ChatMessage[];
  sendMessage: (message: string) => Promise<any>;
  isLoading: boolean;
}

export interface ChatMessage {
  isSender: boolean;
  message: string;
}

const API_KEY = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY || '';

const openAI = new OpenAI({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
  defaultHeaders: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const useChatContext = () => {
  const [messages, setMessages] = React.useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const sendMessage = async (message: string): Promise<OpenAI.Chat.ChatCompletion> => {
    console.log('sended !');
    setIsLoading(true);
    setMessages((prevMessages) => [...prevMessages, { isSender: true, message }]);

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [{ role: 'user', content: message }],
      model: 'gpt-3.5-turbo',
    };

    const res = await openAI.chat.completions.create(params);
    const resMessage = res['choices'][0]['message']['content'] || '';
    setMessages((prevMessages) => [...prevMessages, { isSender: false, message: resMessage }]);

    setIsLoading(false);
    return res;
  };

  React.useEffect(() => {
    scroller.scrollTo('chatMessages', {
      duration: 0,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'chatMessages',
      // FIXME: get offset height and move last index
      offset: 99999999,
    });
  }, [messages]);

  return {
    messages,
    sendMessage,
    isLoading,
  };
};
