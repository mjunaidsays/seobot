'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Group, Panel, Separator } from 'react-resizable-panels'
import ChatInterface from './components/ChatInterface'
import WebsiteDataPanel from './components/WebsiteDataPanel'
import GeneratedArticle from './components/GeneratedArticle'
import { useChat } from '@/hooks/useChat'

export default function AppPage() {
  const [autopilot, setAutopilot] = useState(false)
  const { 
    messages, 
    isTyping, 
    sendMessage, 
    websiteUrl, 
    analysisComplete, 
    websiteData, 
    handleProceed,
    generatedArticles,
    isGenerating,
    error
  } = useChat()

  const getDomainFromUrl = (url: string | null): string => {
    if (!url) return 'seobot'
    try {
      let domain = url.replace(/^https?:\/\//, '')
      domain = domain.replace(/^www\./, '')
      domain = domain.split('/')[0]
      domain = domain.split(':')[0]
      return domain
    } catch {
      return 'seobot'
    }
  }

  return (
    <div className="h-screen relative overflow-hidden bg-black">
      {/* Starry Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="stars-bg"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex flex-col overflow-hidden">
        <AnimatePresence mode="wait">
          {!analysisComplete ? (
            // Single centered chat (initial state)
            <motion.div
              key="single-chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                className="w-full max-w-4xl bg-gray-950 border border-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col"
                style={{ height: '600px', maxHeight: '80vh' }}
              >
                {/* Terminal Header */}
                <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800 flex-shrink-0">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-primary-green font-mono text-sm ml-4">seobot</span>
                </div>

                {/* Chat Interface */}
                <ChatInterface
                  messages={messages}
                  onSendMessage={sendMessage}
                  isTyping={isTyping}
                />
              </motion.div>
            </motion.div>
          ) : (
            // Two-panel layout (after analysis) - wrapped in container box
            <motion.div
              key="two-panel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden"
            >
              <motion.div
                className="w-full max-w-[95vw] bg-gray-950 border border-gray-800 rounded-xl shadow-2xl overflow-hidden flex flex-col relative"
                style={{ height: '85vh', maxHeight: '85vh' }}
              >
                {/* Terminal Header */}
                <div className="bg-gray-900 px-4 py-3 flex items-center space-x-2 border-b border-gray-800 flex-shrink-0">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-primary-green font-mono text-sm ml-4">
                    seobot {websiteUrl ? getDomainFromUrl(websiteUrl) : ''}
                  </span>
                </div>

                {/* Two-panel layout with resizable panels */}
                <Group orientation="horizontal" className="flex-1 overflow-hidden min-h-0">
                  {/* Left Panel - Chat Interface */}
                  <Panel defaultSize={60} minSize={30} className="flex flex-col overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex-1 flex flex-col bg-gray-950 overflow-hidden h-full"
                    >
                      {/* Chat Interface */}
                      <div className="flex-1 overflow-hidden">
                        <ChatInterface
                          messages={messages}
                          onSendMessage={sendMessage}
                          isTyping={isTyping}
                        />
                      </div>
                    </motion.div>
                  </Panel>

                  {/* Resize Handle */}
                  <Separator className="w-1 bg-gray-800 hover:bg-primary-green/50 transition-colors cursor-col-resize group relative">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-1 h-8 bg-primary-green rounded-full"></div>
                    </div>
                  </Separator>

                  {/* Right Panel - Website Data or Generated Articles */}
                  <Panel defaultSize={40} minSize={30} className="flex flex-col overflow-hidden">
                    {generatedArticles.length > 0 ? (
                      // Show generated articles
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gray-950 overflow-y-auto p-6"
                      >
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold text-white mb-2">Generated Articles</h2>
                          <p className="text-gray-400 text-sm">
                            {generatedArticles.length} article{generatedArticles.length !== 1 ? 's' : ''} generated successfully
                          </p>
                        </div>
                        {generatedArticles.map((article, index) => (
                          <GeneratedArticle key={index} article={article} index={index} />
                        ))}
                      </motion.div>
                    ) : (
                      // Show website data panel
                      <WebsiteDataPanel
                        websiteData={websiteData}
                        onProceed={handleProceed}
                      />
                    )}
                  </Panel>
                </Group>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Display */}
        {error && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 rounded text-sm max-w-md">
            {error}
          </div>
        )}

        {/* Generation Progress Indicator */}
        {isGenerating && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-primary-green/10 border border-primary-green text-primary-green px-4 py-2 rounded text-sm">
            Generating articles... Please wait.
          </div>
        )}

        {/* Bottom Section - Only show when not in two-panel mode */}
        {!analysisComplete && (
          <div className="relative z-20 pb-8">
            {/* Autopilot Toggle */}
            {/* <div className="flex justify-start px-8 mb-8">
              <div className="flex items-center space-x-3 bg-gray-900/80 border border-gray-800 rounded-full px-4 py-2">
                <button
                  onClick={() => setAutopilot(!autopilot)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    autopilot ? 'bg-primary-green' : 'bg-gray-700'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      autopilot ? 'translate-x-6' : ''
                    }`}
                  ></div>
                </button>
                <span className={`font-mono text-sm ${autopilot ? 'text-primary-green' : 'text-orange-accent'}`}>
                  Autopilot is {autopilot ? 'ON' : 'OFF'}
                </span>
                <button className="text-gray-500 hover:text-gray-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div> */}

            {/* Partner Links
            <div className="flex items-center justify-center space-x-4 px-4">
              <Link
                href="https://seobotai.com/?ref=seobot"
                target="_blank"
                className="bg-gray-900/80 border border-gray-800 hover:border-primary-green rounded-lg p-3 transition-all duration-200 hover:scale-110"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
              </Link>
              <Link
                href="https://unicornplatform.com/?ref=seobot"
                target="_blank"
                className="bg-gray-900/80 border border-gray-800 hover:border-primary-green rounded-lg p-3 transition-all duration-200 hover:scale-110"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">🦄</span>
                </div>
              </Link>
              <Link
                href="https://listingbott.com/?ref=seobot"
                target="_blank"
                className="bg-gray-900/80 border border-gray-800 hover:border-primary-green rounded-lg p-3 transition-all duration-200 hover:scale-110"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
              </Link>
              <Link
                href="https://indexrusher.com/?ref=seobot"
                target="_blank"
                className="bg-gray-900/80 border border-gray-800 hover:border-primary-green rounded-lg p-3 transition-all duration-200 hover:scale-110"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </Link>
            </div> */}
          </div>
        )}
      </div>

      {/* Chat Widget Placeholder
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </div> */}

      <style jsx>{`
        .stars-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(2px 2px at 20px 30px, white, transparent),
            radial-gradient(2px 2px at 60px 70px, white, transparent),
            radial-gradient(1px 1px at 50px 50px, white, transparent),
            radial-gradient(1px 1px at 130px 80px, white, transparent),
            radial-gradient(2px 2px at 90px 10px, white, transparent),
            radial-gradient(1px 1px at 160px 120px, white, transparent);
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: stars 120s linear infinite;
        }

        @keyframes stars {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-200px);
          }
        }
      `}</style>
    </div>
  )
}
