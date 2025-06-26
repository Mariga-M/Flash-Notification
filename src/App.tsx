import React from 'react';
import FlashContainer from './components/FlashContainer';
import { useFlashMessages } from './hooks/useFlashMessages';
import { SignUpDemo, FileOperationDemo, MembershipDemo, GeneralActionsDemo, ActionButton } from './components/DemoSection';
import { Bell, Sparkles, Zap, Shield, Palette } from 'lucide-react';

function App() {
  const { messages, addMessage, removeMessage, clearAll } = useFlashMessages();

  const handleSignUpSuccess = () => {
    addMessage({
      type: 'success',
      title: 'Welcome aboard!',
      message: 'Your account has been created successfully. Check your email to verify your account.',
      duration: 6000
    });
  };

  const handleSignUpError = () => {
    addMessage({
      type: 'error',
      title: 'Sign up failed',
      message: 'Email address is already registered. Please try with a different email or sign in instead.',
      duration: 7000
    });
  };

  const handleUploadSuccess = () => {
    addMessage({
      type: 'success',
      title: 'Upload complete',
      message: 'Your file has been uploaded successfully and is now available in your dashboard.',
      duration: 5000
    });
  };

  const handleUploadError = () => {
    addMessage({
      type: 'error',
      title: 'Upload failed',
      message: 'File size exceeds 10MB limit. Please compress your file and try again.',
      duration: 6000
    });
  };

  const handleDownload = () => {
    addMessage({
      type: 'info',
      title: 'Download started',
      message: 'Your file is being prepared for download. This may take a few moments.',
      duration: 4000
    });
  };

  const handleUpgrade = () => {
    addMessage({
      type: 'success',
      title: 'Upgrade successful!',
      message: 'Welcome to Pro! Your premium features are now active and ready to use.',
      duration: 6000
    });
  };

  const handlePaymentError = () => {
    addMessage({
      type: 'error',
      title: 'Payment declined',
      message: 'Your card was declined. Please check your payment details and try again.',
      duration: 8000
    });
  };

  const handleTrialStart = () => {
    addMessage({
      type: 'warning',
      title: 'Free trial activated',
      message: 'Your 14-day free trial has started. You\'ll be charged $29/month after the trial ends.',
      duration: 10000
    });
  };

  const handleSave = () => {
    addMessage({
      type: 'success',
      title: 'Changes saved',
      message: 'Your settings have been updated successfully.',
      duration: 3000
    });
  };

  const handleDelete = () => {
    addMessage({
      type: 'error',
      title: 'Item deleted',
      message: 'The selected item has been permanently removed from your account.',
      duration: 5000
    });
  };

  const handleInfo = () => {
    addMessage({
      type: 'info',
      title: 'Did you know?',
      message: 'You can customize these notification settings in your preferences panel.',
      duration: 6000
    });
  };

  const handleMultipleMessages = () => {
    handleSave();
    setTimeout(() => handleInfo(), 500);
    setTimeout(() => handleUploadSuccess(), 1000);
    setTimeout(() => handleTrialStart(), 1500);
    setTimeout(() => handleDelete(), 2000);

    
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <FlashContainer messages={messages} onDismiss={removeMessage} />
      
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl shadow-2xl border border-blue-500/30 backdrop-blur-sm">
              <Bell className="h-12 w-12 text-blue-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Flash Message System
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Beautiful, accessible, and production-ready notification components for modern web applications. 
            Experience smooth animations, intelligent stacking, and comprehensive message types.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-blue-400" />
              <span>Auto-dismiss</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="h-5 w-5 text-emerald-400" />
              <span>Smooth animations</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-purple-400" />
              <span>Accessibility ready</span>
            </div>
            <div className="flex items-center gap-3">
              <Palette className="h-5 w-5 text-amber-400" />
              <span>Dark theme</span>
            </div>
          </div>
        </div>

        {/* Demo Sections */}
        <div className="grid gap-8 lg:grid-cols-2 max-w-7xl mx-auto mb-16">
          <SignUpDemo onSuccess={handleSignUpSuccess} onError={handleSignUpError} />
          <FileOperationDemo 
            onUploadSuccess={handleUploadSuccess} 
            onUploadError={handleUploadError} 
            onDownload={handleDownload} 
          />
          <MembershipDemo 
            onUpgrade={handleUpgrade} 
            onPaymentError={handlePaymentError} 
            onTrialStart={handleTrialStart} 
          />
          <GeneralActionsDemo 
            onSave={handleSave} 
            onDelete={handleDelete} 
            onInfo={handleInfo} 
          />
        </div>

        {/* Controls */}
        <div className="text-center mb-20">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 p-8 inline-block">
            <h3 className="text-2xl font-semibold text-white mb-6">Notification Controls</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <ActionButton onClick={clearAll} variant="secondary">
                Clear All Messages
              </ActionButton>
              <ActionButton onClick={handleMultipleMessages} variant="primary">
                Test Multiple Messages
              </ActionButton>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-white mb-3 text-lg">Beautiful Design</h3>
              <p className="text-gray-300 leading-relaxed">Dark theme with gradient backgrounds, smooth animations, and modern styling</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">♿</div>
              <h3 className="font-semibold text-white mb-3 text-lg">Accessible</h3>
              <p className="text-gray-300 leading-relaxed">ARIA labels, keyboard navigation, and comprehensive screen reader support</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-white mb-3 text-lg">Performant</h3>
              <p className="text-gray-300 leading-relaxed">Lightweight, efficient animations, and optimized rendering for smooth UX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;