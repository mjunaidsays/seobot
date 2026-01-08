'use client'

import { useState, useCallback } from 'react'
import { Message } from '@/app/app/components/ChatMessage'

// Mock responses for different keywords/patterns
const getMockResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase()

  // Greeting responses
  if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
    return "Hello! 👋 I'm excited to help you boost your website's SEO. What's your website URL?"
  }

  // SEO-related questions
  if (lowerMessage.includes('seo') || lowerMessage.includes('traffic')) {
    return "Great question! I can help you increase your organic traffic through AI-powered SEO strategies. I'll create optimized content, handle keyword research, and build internal links automatically. Would you like to tell me about your website?"
  }

  // Website/URL mentions
  if (lowerMessage.includes('website') || lowerMessage.includes('url') || lowerMessage.includes('http') || lowerMessage.includes('www')) {
    return "Perfect! I'll analyze your website and create a comprehensive SEO strategy. I can generate high-quality articles, optimize keywords, and handle internal linking. In just a few weeks, you should start seeing increased organic traffic!"
  }

  // Pricing questions
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pay')) {
    return "Our plans start at just $49/month! For that, you get fully automated SEO with AI-generated articles, keyword research, content planning, and automatic publishing. It's an incredible ROI for busy founders."
  }

  // How it works
  if (lowerMessage.includes('how') && (lowerMessage.includes('work') || lowerMessage.includes('do'))) {
    return "Here's how I work: 1) You provide your website URL, 2) I analyze your site, audience, and keywords, 3) I create a content plan, 4) I start producing SEO-optimized articles every week, 5) I handle internal linking automatically. You can approve/decline articles or let me run on autopilot!"
  }

  // Languages
  if (lowerMessage.includes('language')) {
    return "I support 50+ languages! Including English, Spanish, French, German, Chinese, Japanese, Arabic, and many more. I can create SEO content in any of these languages while maintaining quality and cultural relevance."
  }

  // Help/guidance
  if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
    return "I'm here to help! I can answer questions about SEO, explain how I work, discuss pricing, or get started with your website right away. What would you like to know?"
  }

  // Thanks
  if (lowerMessage.match(/\b(thank|thanks|thx)\b/)) {
    return "You're welcome! Feel free to ask me anything else about SEO or how I can help grow your website's traffic. 😊"
  }

  // Default response
  const defaultResponses = [
    "That's interesting! Tell me more about your website and I'll help you create an SEO strategy.",
    "I understand. Could you share your website URL so I can provide specific recommendations?",
    "Great! I'm here to help boost your organic traffic. What aspect of SEO are you most interested in?",
    "I'd love to help with that! Let me know your website URL and we can get started.",
  ]
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'system',
      content: "Hi there! I'm SEObot, your AI SEO assistant.",
      timestamp: new Date(),
    },
    {
      id: '2',
      type: 'system',
      content: "I can help increase 🚀 your website's organic traffic. No manual work required from you!",
      timestamp: new Date(),
    },
    {
      id: '3',
      type: 'system',
      content: "Ready to start? Tell me about your website!",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = useCallback((content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)

    // Simulate bot typing delay (500-1500ms)
    const typingDelay = 500 + Math.random() * 1000

    setTimeout(() => {
      // Generate and add bot response
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getMockResponse(content),
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, typingDelay)
  }, [])

  return {
    messages,
    isTyping,
    sendMessage,
  }
}

