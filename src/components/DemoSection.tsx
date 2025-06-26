import React from 'react';
import { Upload, Download, UserPlus, CreditCard, Save, Trash2, Info } from 'lucide-react';

interface DemoSectionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, icon, children }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-700/50 p-8 hover:shadow-2xl hover:border-gray-600/50 transition-all duration-300">
      <div className="flex items-start mb-6">
        <div className="p-4 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl mr-4 border border-blue-500/30">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="grid gap-3">
        {children}
      </div>
    </div>
  );
};

interface ActionButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  children: React.ReactNode;
  disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ 
  onClick, 
  variant = 'primary', 
  children, 
  disabled = false 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/25';
      case 'secondary':
        return 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-lg shadow-gray-500/25';
      case 'success':
        return 'bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white shadow-lg shadow-emerald-500/25';
      case 'danger':
        return 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-500/25';
      case 'warning':
        return 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg shadow-amber-500/25';
      case 'info':
        return 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-medium transition-all duration-200 transform
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
        hover:scale-105 active:scale-95
        ${getVariantStyles()}
      `}
    >
      {children}
    </button>
  );
};

export const SignUpDemo: React.FC<{ onSuccess: () => void; onError: () => void }> = ({ onSuccess, onError }) => (
  <DemoSection
    title="User Authentication"
    description="Sign up and login feedback messages with realistic scenarios"
    icon={<UserPlus className="h-6 w-6 text-blue-400" />}
  >
    <ActionButton onClick={onSuccess} variant="success">
      Simulate Successful Sign Up
    </ActionButton>
    <ActionButton onClick={onError} variant="danger">
      Simulate Sign Up Error
    </ActionButton>
  </DemoSection>
);

export const FileOperationDemo: React.FC<{ 
  onUploadSuccess: () => void; 
  onUploadError: () => void; 
  onDownload: () => void 
}> = ({ onUploadSuccess, onUploadError, onDownload }) => (
  <DemoSection
    title="File Operations"
    description="Upload and download status notifications with progress feedback"
    icon={<Upload className="h-6 w-6 text-emerald-400" />}
  >
    <ActionButton onClick={onUploadSuccess} variant="success">
      Successful Upload
    </ActionButton>
    <ActionButton onClick={onUploadError} variant="danger">
      Failed Upload
    </ActionButton>
    <ActionButton onClick={onDownload} variant="info">
      Start Download
    </ActionButton>
  </DemoSection>
);

export const MembershipDemo: React.FC<{ 
  onUpgrade: () => void; 
  onPaymentError: () => void; 
  onTrialStart: () => void 
}> = ({ onUpgrade, onPaymentError, onTrialStart }) => (
  <DemoSection
    title="Membership & Billing"
    description="Subscription and payment notifications for premium features"
    icon={<CreditCard className="h-6 w-6 text-purple-400" />}
  >
    <ActionButton onClick={onUpgrade} variant="success">
      Upgrade Success
    </ActionButton>
    <ActionButton onClick={onPaymentError} variant="danger">
      Payment Failed
    </ActionButton>
    <ActionButton onClick={onTrialStart} variant="warning">
      Trial Started
    </ActionButton>
  </DemoSection>
);

export const GeneralActionsDemo: React.FC<{ 
  onSave: () => void; 
  onDelete: () => void; 
  onInfo: () => void 
}> = ({ onSave, onDelete, onInfo }) => (
  <DemoSection
    title="General Actions"
    description="Common application notifications for user interactions"
    icon={<Save className="h-6 w-6 text-gray-400" />}
  >
    <ActionButton onClick={onSave} variant="success">
      Save Changes
    </ActionButton>
    <ActionButton onClick={onDelete} variant="danger">
      Delete Item
    </ActionButton>
    <ActionButton onClick={onInfo} variant="info">
      Show Info
    </ActionButton>
  </DemoSection>
);