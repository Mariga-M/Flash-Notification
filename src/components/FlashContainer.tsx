import React, { useState, useCallback, useEffect } from 'react';
import FlashMessage, { FlashMessageProps } from './FlashMessage';

interface FlashContainerProps {
  messages: Omit<FlashMessageProps, 'onDismiss' | 'isVisible'>[];
  onDismiss: (id: string) => void;
}

const FlashContainer: React.FC<FlashContainerProps> = ({ messages, onDismiss }) => {
  const [visibleMessages, setVisibleMessages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Add new messages to visible set
    const newMessageIds = messages.map(m => m.id);
    setVisibleMessages(prev => {
      const newSet = new Set(prev);
      newMessageIds.forEach(id => newSet.add(id));
      return newSet;
    });
  }, [messages]);

  const handleDismiss = useCallback((id: string) => {
    setVisibleMessages(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
    
    setTimeout(() => {
      onDismiss(id);
    }, 300);
  }, [onDismiss]);

  if (messages.length === 0) return null;

  return (
    <div 
      className="fixed top-6 right-6 z-50 flex flex-col-reverse space-y-reverse space-y-2"
      aria-label="Notifications"
    >
      {messages.map((message) => (
        <FlashMessage
          key={message.id}
          {...message}
          isVisible={visibleMessages.has(message.id)}
          onDismiss={handleDismiss}
        />
      ))}
    </div>
  );
};

export default FlashContainer;