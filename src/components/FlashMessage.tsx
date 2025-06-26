import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export interface FlashMessageProps {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  onDismiss: (id: string) => void;
  isVisible: boolean;
}

const FlashMessage: React.FC<FlashMessageProps> = ({
  id,
  type,
  title,
  message,
  duration = 5000,
  onDismiss,
  isVisible
}) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      handleDismiss();
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration, id]);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      onDismiss(id);
    }, 300);
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-gradient-to-r from-emerald-900/90 to-green-900/90',
          borderColor: 'border-emerald-500/30',
          iconColor: 'text-emerald-400',
          titleColor: 'text-emerald-100',
          messageColor: 'text-emerald-200',
          icon: CheckCircle
        };
      case 'error':
        return {
          bgColor: 'bg-gradient-to-r from-red-900/90 to-rose-900/90',
          borderColor: 'border-red-500/30',
          iconColor: 'text-red-400',
          titleColor: 'text-red-100',
          messageColor: 'text-red-200',
          icon: XCircle
        };
      case 'warning':
        return {
          bgColor: 'bg-gradient-to-r from-amber-900/90 to-yellow-900/90',
          borderColor: 'border-amber-500/30',
          iconColor: 'text-amber-400',
          titleColor: 'text-amber-100',
          messageColor: 'text-amber-200',
          icon: AlertTriangle
        };
      case 'info':
        return {
          bgColor: 'bg-gradient-to-r from-blue-900/90 to-cyan-900/90',
          borderColor: 'border-blue-500/30',
          iconColor: 'text-blue-400',
          titleColor: 'text-blue-100',
          messageColor: 'text-blue-200',
          icon: Info
        };
    }
  };

  const styles = getTypeStyles();
  const Icon = styles.icon;

  return (
    <div
      className={`
        transform transition-all duration-300 ease-in-out
        ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        ${styles.bgColor} ${styles.borderColor}
        border rounded-xl shadow-2xl hover:shadow-3xl
        p-6 mb-4 max-w-md w-full
        backdrop-blur-lg
      `}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <Icon className={`h-6 w-6 ${styles.iconColor}`} />
        </div>
        <div className="ml-4 flex-1">
          <h3 className={`text-sm font-semibold ${styles.titleColor} mb-1`}>
            {title}
          </h3>
          <p className={`text-sm ${styles.messageColor} leading-relaxed`}>
            {message}
          </p>
        </div>
        <div className="flex-shrink-0 ml-4">
          <button
            onClick={handleDismiss}
            className={`
              inline-flex rounded-lg p-2 transition-all duration-200
              ${styles.iconColor} hover:bg-white/10 hover:scale-110
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current
            `}
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashMessage;