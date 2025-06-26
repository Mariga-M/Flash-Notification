import { useState, useCallback } from 'react';
import { FlashMessageProps } from '../components/FlashMessage';

type FlashMessageData = Omit<FlashMessageProps, 'id' | 'onDismiss' | 'isVisible'>;

export const useFlashMessages = () => {
  const [messages, setMessages] = useState<Omit<FlashMessageProps, 'onDismiss' | 'isVisible'>[]>([]);

  const addMessage = useCallback((messageData: FlashMessageData) => {
    const id = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newMessage = {
      id,
      ...messageData
    };

    setMessages(prev => [...prev, newMessage]);
  }, []);

  const removeMessage = useCallback((id: string) => {
    setMessages(prev => prev.filter(message => message.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    addMessage,
    removeMessage,
    clearAll
  };
};