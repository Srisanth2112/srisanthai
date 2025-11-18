
import React, { useState } from 'react';
import Header from './components/Header';
import VideoGenerator from './components/VideoGenerator';
import ImageGenerator from './components/ImageGenerator';
import ChatAssistant from './components/ChatAssistant';
import { AppMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>('video');

  const renderContent = () => {
    switch (mode) {
      case 'video':
        return <VideoGenerator />;
      case 'image':
        return <ImageGenerator />;
      case 'chat':
        return <ChatAssistant />;
      default:
        return <VideoGenerator />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <Header activeMode={mode} setMode={setMode} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Powered by Google Gemini & Veo</p>
      </footer>
    </div>
  );
};

export default App;
