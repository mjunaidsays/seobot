# SEObot Clone

A pixel-perfect clone of the SEObot landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project replicates the original seobotai.com website with all animations, interactions, and visual effects.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Components](#components)
- [Data Files](#data-files)
- [Configuration](#configuration)
- [Development](#development)
- [Backend Integration](#backend-integration)
- [Build & Deployment](#build--deployment)
- [Key Implementation Details](#key-implementation-details)
- [Development Plans](#development-plans)

## 🎯 Overview

SEObot Clone is a fully responsive Next.js application that replicates the SEObot AI landing page. The project features:

- **Landing Page**: Complete homepage with hero section, stats showcase, integrations, testimonials, pricing, and FAQ
- **Chat Interface**: Interactive terminal-style chat application at `/app` route
- **Animations**: Matrix rain background, infinite scrolling carousels, typing effects, and smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes

## 🛠 Tech Stack

### Core Technologies
- **Next.js 14.2.18** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.7.2** - Type safety
- **Tailwind CSS 3.4.17** - Utility-first CSS framework

### Key Dependencies
- **framer-motion 11.11.17** - Animation library for smooth transitions and effects
- **react-icons 5.3.0** - Icon library
- **clsx 2.1.1** - Utility for conditional class names

### Development Tools
- **PostCSS 8.4.49** - CSS processing
- **Autoprefixer 10.4.20** - CSS vendor prefixing
- **ESLint 8.57.0** - Code linting
- **eslint-config-next 14.2.18** - Next.js ESLint configuration

## 📁 Project Structure

```
Seobot/
├── app/                          # Next.js App Router directory
│   ├── app/                      # Application route (/app)
│   │   ├── components/           # Chat interface components
│   │   │   ├── ChatInterface.tsx # Main chat container
│   │   │   ├── ChatMessage.tsx  # Individual message component
│   │   │   └── ChatInput.tsx    # Message input field
│   │   └── page.tsx             # Chat application page
│   ├── globals.css              # Global styles and utilities
│   ├── layout.tsx               # Root layout with MatrixRain
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── ui/                      # Base UI components
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Card container component
│   │   └── Section.tsx          # Section wrapper with animations
│   ├── ArticleGrid.tsx          # Article examples grid
│   ├── ChatWidget.tsx           # Floating chat widget
│   ├── FAQ.tsx                  # FAQ accordion section
│   ├── Footer.tsx                # Footer component
│   ├── Hero.tsx                 # Hero section with typing animation
│   ├── IntegrationsGrid.tsx      # CMS integrations grid
│   ├── LanguagePills.tsx        # Infinite scrolling language pills
│   ├── MatrixRain.tsx           # Canvas-based Matrix rain animation
│   ├── Navbar.tsx                # Navigation bar
│   ├── PricingSection.tsx       # Pricing section
│   ├── StatsShowcase.tsx         # Analytics showcase with tilted cards
│   ├── Testimonials.tsx          # Infinite scrolling testimonials
│   └── WhyChoose.tsx             # Why choose section
├── data/                         # JSON data files
│   ├── articles.json            # Article examples data
│   ├── faq.json                 # FAQ questions and answers
│   ├── integrations.json         # CMS platform data
│   └── testimonials.json        # Testimonial data
├── hooks/                        # Custom React hooks
│   └── useChat.ts               # Chat state management hook
├── lib/                          # Utility functions
│   └── utils.ts                 # Utility functions (cn helper)
├── public/                       # Static assets
│   └── robots.txt               # SEO robots file
├── .cursor/                      # Cursor IDE plans
│   └── plans/                    # Development plan documents
├── next.config.js               # Next.js configuration
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## ✨ Features

### Landing Page Features
1. **Hero Section**
   - Typing animation cycling through audience types
   - Founder contact card with social links
   - Call-to-action buttons

2. **Stats Showcase**
   - Tilted analytics cards with rotation effects
   - Mock Google Search Console data
   - Hover animations

3. **Integrations Grid**
   - CMS platform logos and icons
   - Badge indicators for featured platforms
   - Hover effects

4. **Language Pills**
   - Infinite horizontal scrolling animation
   - Multiple rows with alternating scroll directions
   - 50+ supported languages

5. **Article Grid**
   - Category badges with color coding
   - Article examples with descriptions
   - Hover effects and transitions

6. **Testimonials**
   - Infinite auto-scrolling carousel
   - Multiple rows with different scroll speeds
   - Twitter-style testimonial cards

7. **Pricing Section**
   - Feature checklist with orange checkmarks
   - Founder quote
   - Pricing display

8. **FAQ Section**
   - Accordion-style dropdowns
   - Smooth expand/collapse animations
   - 16+ FAQ items

9. **Matrix Rain Background**
   - Canvas-based animation
   - Green falling characters
   - Full-screen background effect

### Chat Application Features
1. **Terminal-Style Interface**
   - macOS-style window header
   - Terminal aesthetic with green text
   - Starry background animation

2. **Interactive Chat**
   - Real-time message display
   - Auto-scroll to latest message
   - Typing indicators
   - Mock bot responses

3. **Autopilot Toggle**
   - Visual toggle switch
   - Status indicator

4. **Partner Links**
   - Quick access to partner products
   - Hover effects

## 🧩 Components

### Layout Components

#### `Navbar.tsx`
Fixed navigation bar with:
- SEObot logo
- Navigation links (Refer to earn, Pricing)
- "Try now" CTA button
- Responsive design

#### `Footer.tsx`
Multi-column footer with:
- Contact information
- Resources links
- API & Integrations
- Mars Verse products
- Copyright notice

### Page Sections

#### `Hero.tsx`
Hero section featuring:
- Typing animation cycling through: "solo makers", "busy founders", "marketers", etc.
- Founder contact card
- CTA buttons
- Framer Motion animations

#### `StatsShowcase.tsx`
Analytics showcase with:
- 4 tilted cards showing mock analytics
- Rotation effects (-3° to 3°)
- Orange site labels
- Hover animations

#### `IntegrationsGrid.tsx`
CMS integrations grid displaying:
- 12 platform icons (Unicorn Platform, Webflow, Ghost, WordPress, etc.)
- Badge indicators
- Hover effects

#### `LanguagePills.tsx`
Infinite scrolling language pills:
- 4 rows of language badges
- Alternating scroll directions (left/right)
- Different scroll speeds
- 30+ languages displayed

#### `ArticleGrid.tsx`
Article examples grid:
- 8 article cards
- Category badges (Listicles, How-to Guides, Checklists, etc.)
- Color-coded categories
- "Read more" links

#### `Testimonials.tsx`
Infinite scrolling testimonials:
- 2 rows with opposite scroll directions
- Twitter-style cards
- User avatars and usernames
- Date stamps

#### `PricingSection.tsx`
Pricing section with:
- Founder quote (John Rush)
- $49/month pricing display
- Feature checklist
- CTA button

#### `FAQ.tsx`
FAQ accordion:
- 16+ questions
- Smooth expand/collapse
- Green chevron indicators
- Animated transitions

#### `WhyChoose.tsx`
Why choose section:
- Testimonial card from Santiago Poli
- Success metrics display
- Gradient background

### UI Components

#### `Button.tsx`
Reusable button component with:
- Variants: primary, secondary, outline
- Sizes: sm, md, lg
- Hover effects
- TypeScript props

#### `Card.tsx`
Card container component:
- Gray background with border
- Rounded corners
- Customizable className

#### `Section.tsx`
Section wrapper with:
- Fade-in animations on scroll
- Configurable animation
- Max-width container
- Padding utilities

### Special Components

#### `MatrixRain.tsx`
Canvas-based Matrix rain animation:
- Full-screen canvas
- Green falling characters
- Random character generation
- Fade trail effect
- Fixed positioning (z-index: -1)

#### `ChatWidget.tsx`
Floating chat widget:
- Fixed bottom-right position
- Tooltip on hover
- Blue circular button

### Chat Application Components

#### `ChatInterface.tsx`
Main chat container:
- Message list rendering
- Auto-scroll functionality
- Typing indicator
- Input integration

#### `ChatMessage.tsx`
Individual message component:
- User/bot/system message types
- Terminal-style formatting
- Robot icon for bot messages
- Smooth animations

#### `ChatInput.tsx`
Message input field:
- Enter key submission
- Send button
- Disabled state handling
- Auto-focus

## 📊 Data Files

### `data/articles.json`
Contains 8 article examples with:
- ID, category, title, description, link
- Categories: Listicles, How-to Guides, Checklists, QA Articles, Versus Articles, Roundups, Ultimate Guides

### `data/faq.json`
Contains 16 FAQ items with:
- ID, question, answer
- Covers topics: AI agent, automation, languages, access, moderation, quality, integrations, editing, internal linking, programmatic SEO, news articles, SEO tools, video-to-article, backlinks, refunds, crypto/adult content

### `data/integrations.json`
Contains 12 integration platforms with:
- ID, name, icon, badge
- Platforms: Unicorn Platform, Webflow, Ghost, WordPress, Framer, WIX, Shopify, Notion, HubSpot, Next.js, Webhooks, REST API

### `data/testimonials.json`
Contains 6 testimonials with:
- ID, name, username, avatar, content, date, image
- Twitter/X-style testimonial data

## ⚙️ Configuration

### `next.config.js`
Next.js configuration:
- Image domains: localhost
- Basic Next.js setup

### `tailwind.config.ts`
Tailwind CSS configuration:
- Custom colors:
  - Primary green: `#00FF00`
  - Primary lime: `#C8FF00`
  - Background: `#000000`
  - Foreground: `#FFFFFF`
  - Orange accent: `#FF6B00`
- Custom fonts: Inter (sans), Courier New (mono)
- Content paths for Tailwind scanning

### `tsconfig.json`
TypeScript configuration:
- Strict mode enabled
- ES modules
- JSX preserve
- Path aliases: `@/*` → `./*`
- Next.js plugin

### `postcss.config.js`
PostCSS configuration:
- Tailwind CSS plugin
- Autoprefixer plugin

### `app/globals.css`
Global styles:
- Tailwind directives
- CSS variables for fonts
- Base styles (black background, white text)
- Custom utility classes:
  - `.section-title` - Green monospace section titles
  - `.section-heading` - Large bold headings
- Float animation keyframes

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server
The application runs on `http://localhost:3000` by default.

### Routes
- `/` - Landing page
- `/app` - Chat application interface

## 🔌 Backend Integration

### Current Implementation

The application currently uses a **mock response system** in `hooks/useChat.ts` that simulates bot responses based on keyword matching. This allows the frontend to function independently for development and demonstration purposes.

### Connecting a Real Backend

To connect the application to a real backend API, you'll need to modify the `useChat` hook and potentially add authentication. Here's a comprehensive guide:

#### 1. Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# Backend API Configuration
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws

# Authentication (if required)
NEXT_PUBLIC_AUTH_ENABLED=true
NEXT_PUBLIC_AUTH_PROVIDER=your-auth-provider

# Optional: API Keys
NEXT_PUBLIC_API_KEY=your-api-key-here
```

Update `next.config.js` to expose environment variables:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  },
}

module.exports = nextConfig
```

#### 2. API Service Layer

Create a new file `lib/api.ts` for API communication:

```typescript
// lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'

interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

interface ChatMessage {
  id: string
  type: 'user' | 'bot' | 'system'
  content: string
  timestamp: Date
}

interface SendMessageRequest {
  message: string
  conversationId?: string
  userId?: string
}

interface SendMessageResponse {
  message: ChatMessage
  conversationId: string
}

class ApiClient {
  private baseUrl: string
  private apiKey?: string

  constructor() {
    this.baseUrl = API_URL
    this.apiKey = process.env.NEXT_PUBLIC_API_KEY
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers,
      })

      if (!response.ok) {
        const error = await response.json().catch(() => ({
          error: `HTTP ${response.status}: ${response.statusText}`,
        }))
        return { error: error.error || error.message || 'Request failed' }
      }

      const data = await response.json()
      return { data }
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Network error',
      }
    }
  }

  // Send a chat message
  async sendMessage(
    request: SendMessageRequest
  ): Promise<ApiResponse<SendMessageResponse>> {
    return this.request<SendMessageResponse>('/chat/message', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  }

  // Get conversation history
  async getConversation(
    conversationId: string
  ): Promise<ApiResponse<ChatMessage[]>> {
    return this.request<ChatMessage[]>(`/chat/conversation/${conversationId}`)
  }

  // Create a new conversation
  async createConversation(
    userId?: string
  ): Promise<ApiResponse<{ conversationId: string }>> {
    return this.request<{ conversationId: string }>('/chat/conversation', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    })
  }
}

export const apiClient = new ApiClient()
```

#### 3. Updated useChat Hook with Backend Integration

Modify `hooks/useChat.ts` to use the real API:

```typescript
'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { Message } from '@/app/app/components/ChatMessage'
import { apiClient } from '@/lib/api'

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [conversationId, setConversationId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const wsRef = useRef<WebSocket | null>(null)

  // Initialize conversation and load history
  useEffect(() => {
    const initializeChat = async () => {
      try {
        // Create new conversation or load existing
        const conversationResponse = await apiClient.createConversation()
        
        if (conversationResponse.error) {
          setError(conversationResponse.error)
          // Fallback to mock mode
          initializeMockMessages()
          return
        }

        if (conversationResponse.data) {
          setConversationId(conversationResponse.data.conversationId)
          
          // Load conversation history if exists
          const historyResponse = await apiClient.getConversation(
            conversationResponse.data.conversationId
          )
          
          if (historyResponse.data && historyResponse.data.length > 0) {
            setMessages(historyResponse.data as Message[])
          } else {
            // Initialize with welcome messages
            initializeMockMessages()
          }
        }
      } catch (err) {
        console.error('Failed to initialize chat:', err)
        initializeMockMessages()
      }
    }

    initializeChat()

    // Cleanup on unmount
    return () => {
      if (wsRef.current) {
        wsRef.current.close()
      }
    }
  }, [])

  // Initialize welcome messages (fallback)
  const initializeMockMessages = () => {
    setMessages([
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
  }

  // WebSocket connection for real-time updates (optional)
  const connectWebSocket = useCallback((convId: string) => {
    const wsUrl = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000/ws'
    const ws = new WebSocket(`${wsUrl}?conversationId=${convId}`)

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      
      if (data.type === 'message') {
        const botMessage: Message = {
          id: data.id || Date.now().toString(),
          type: 'bot',
          content: data.content,
          timestamp: new Date(data.timestamp || Date.now()),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      } else if (data.type === 'typing') {
        setIsTyping(data.isTyping)
      }
    }

    ws.onerror = (error) => {
      console.error('WebSocket error:', error)
    }

    ws.onclose = () => {
      console.log('WebSocket closed')
    }

    wsRef.current = ws
  }, [])

  const sendMessage = useCallback(async (content: string) => {
    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    }
    
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
    setError(null)

    try {
      // Send message to backend
      const response = await apiClient.sendMessage({
        message: content,
        conversationId: conversationId || undefined,
      })

      if (response.error) {
        throw new Error(response.error)
      }

      if (response.data) {
        // Add bot response
        const botMessage: Message = {
          id: response.data.message.id,
          type: 'bot',
          content: response.data.message.content,
          timestamp: new Date(response.data.message.timestamp),
        }
        
        setMessages((prev) => [...prev, botMessage])
        
        // Update conversation ID if new
        if (response.data.conversationId && !conversationId) {
          setConversationId(response.data.conversationId)
          connectWebSocket(response.data.conversationId)
        }
      }
    } catch (err) {
      console.error('Failed to send message:', err)
      setError(err instanceof Error ? err.message : 'Failed to send message')
      
      // Fallback to mock response
      const mockResponse = getMockResponse(content)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: mockResponse,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } finally {
      setIsTyping(false)
    }
  }, [conversationId, connectWebSocket])

  // Mock response fallback (keep existing function)
  const getMockResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    // ... (keep existing mock logic)
    return "I'm here to help! Let me know your website URL and we can get started."
  }

  return {
    messages,
    isTyping,
    sendMessage,
    error,
    conversationId,
  }
}
```

#### 4. Backend API Endpoints

Your backend should implement the following REST API endpoints:

##### POST `/api/chat/conversation`
Create a new conversation.

**Request:**
```json
{
  "userId": "optional-user-id"
}
```

**Response:**
```json
{
  "conversationId": "conv_1234567890"
}
```

##### POST `/api/chat/message`
Send a message and get bot response.

**Request:**
```json
{
  "message": "Hello, I need help with SEO",
  "conversationId": "conv_1234567890",
  "userId": "optional-user-id"
}
```

**Response:**
```json
{
  "message": {
    "id": "msg_1234567890",
    "type": "bot",
    "content": "Hello! I'm excited to help you boost your website's SEO...",
    "timestamp": "2024-01-15T10:30:00Z"
  },
  "conversationId": "conv_1234567890"
}
```

##### GET `/api/chat/conversation/:conversationId`
Get conversation history.

**Response:**
```json
[
  {
    "id": "msg_1",
    "type": "system",
    "content": "Hi there! I'm SEObot...",
    "timestamp": "2024-01-15T10:00:00Z"
  },
  {
    "id": "msg_2",
    "type": "user",
    "content": "Hello",
    "timestamp": "2024-01-15T10:01:00Z"
  }
]
```

#### 5. WebSocket Integration (Optional)

For real-time chat updates, implement WebSocket support:

**WebSocket Connection:**
```
ws://your-backend-url/ws?conversationId=conv_1234567890
```

**Message Format:**
```json
{
  "type": "message",
  "id": "msg_1234567890",
  "content": "Bot response text",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Typing Indicator:**
```json
{
  "type": "typing",
  "isTyping": true
}
```

#### 6. Authentication Integration

If your backend requires authentication, add an auth utility:

**Create `lib/auth.ts`:**
```typescript
// lib/auth.ts

export interface User {
  id: string
  email: string
  name?: string
}

export async function getAuthToken(): Promise<string | null> {
  // Implement your auth logic here
  // Examples:
  // - localStorage.getItem('authToken')
  // - Cookie-based auth
  // - NextAuth session
  return localStorage.getItem('authToken')
}

export async function getUser(): Promise<User | null> {
  const token = await getAuthToken()
  if (!token) return null
  
  // Fetch user from API
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
    
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Failed to get user:', error)
  }
  
  return null
}
```

Update `lib/api.ts` to include auth token:
```typescript
import { getAuthToken } from './auth'

class ApiClient {
  // ... existing code ...

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const token = await getAuthToken()
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    // ... rest of the request method
  }
}
```

#### 7. Error Handling

Add error display component:

**Create `components/ErrorDisplay.tsx`:**
```typescript
'use client'

interface ErrorDisplayProps {
  error: string | null
  onDismiss?: () => void
}

export default function ErrorDisplay({ error, onDismiss }: ErrorDisplayProps) {
  if (!error) return null

  return (
    <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mb-4">
      <div className="flex items-center justify-between">
        <p className="text-red-200 text-sm">{error}</p>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-red-400 hover:text-red-200 ml-4"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}
```

Update `app/app/page.tsx` to show errors:
```typescript
const { messages, isTyping, sendMessage, error } = useChat()

// Add ErrorDisplay component in the render
{error && <ErrorDisplay error={error} />}
```

#### 8. Testing Backend Integration

**Test API Connection:**
```typescript
// Test in browser console or create a test page
const testApi = async () => {
  const response = await apiClient.sendMessage({
    message: 'Hello, test message',
  })
  console.log('API Response:', response)
}
```

**Check Network Tab:**
- Verify requests are sent to correct endpoint
- Check request/response headers
- Verify authentication tokens are included

#### 9. Backend Implementation Examples

##### Node.js/Express Example:
```javascript
// server.js
const express = require('express')
const app = express()

app.use(express.json())

app.post('/api/chat/conversation', (req, res) => {
  const conversationId = `conv_${Date.now()}`
  res.json({ conversationId })
})

app.post('/api/chat/message', async (req, res) => {
  const { message, conversationId } = req.body
  
  // Call your AI service here
  const botResponse = await callAIService(message)
  
  res.json({
    message: {
      id: `msg_${Date.now()}`,
      type: 'bot',
      content: botResponse,
      timestamp: new Date().toISOString(),
    },
    conversationId: conversationId || `conv_${Date.now()}`,
  })
})

app.listen(8000, () => {
  console.log('Backend server running on port 8000')
})
```

##### Python/FastAPI Example:
```python
# main.py
from fastapi import FastAPI
from pydantic import BaseModel
from datetime import datetime

app = FastAPI()

class MessageRequest(BaseModel):
    message: str
    conversationId: str = None
    userId: str = None

@app.post("/api/chat/conversation")
async def create_conversation():
    conversation_id = f"conv_{int(datetime.now().timestamp())}"
    return {"conversationId": conversation_id}

@app.post("/api/chat/message")
async def send_message(request: MessageRequest):
    # Call your AI service here
    bot_response = await call_ai_service(request.message)
    
    return {
        "message": {
            "id": f"msg_{int(datetime.now().timestamp())}",
            "type": "bot",
            "content": bot_response,
            "timestamp": datetime.now().isoformat(),
        },
        "conversationId": request.conversationId or f"conv_{int(datetime.now().timestamp())}",
    }
```

#### 10. Migration Checklist

- [ ] Set up environment variables (`.env.local`)
- [ ] Create API service layer (`lib/api.ts`)
- [ ] Update `useChat` hook to use real API
- [ ] Implement error handling
- [ ] Add authentication if required
- [ ] Set up WebSocket for real-time updates (optional)
- [ ] Test API connection
- [ ] Update CORS settings on backend
- [ ] Deploy backend API
- [ ] Update production environment variables

#### 11. CORS Configuration

Ensure your backend allows requests from your frontend:

**Express.js:**
```javascript
const cors = require('cors')
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
```

**FastAPI:**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Current Mock System

The current implementation in `hooks/useChat.ts` uses pattern matching for mock responses. This will automatically fall back if the API is unavailable, ensuring the application always functions.

**To disable mock mode:**
- Set `NEXT_PUBLIC_API_URL` environment variable
- The hook will attempt to use the real API first
- Falls back to mock only if API fails

## 🏗 Build & Deployment

### Build Process
```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### Production Start
```bash
npm start
```

### Environment Variables
For basic frontend-only operation, no environment variables are required. 

For backend integration, see the [Backend Integration](#backend-integration) section for required environment variables:
- `NEXT_PUBLIC_API_URL` - Backend API endpoint
- `NEXT_PUBLIC_WS_URL` - WebSocket URL (optional, for real-time chat)
- `NEXT_PUBLIC_API_KEY` - API authentication key (if required)
- Other environment-specific configurations

## 🔧 Key Implementation Details

### Animations

#### Typing Animation (Hero)
- Uses `framer-motion` AnimatePresence
- Cycles through audience array every 3 seconds
- Blinking cursor effect
- Smooth fade transitions

#### Infinite Scroll (Testimonials & Language Pills)
- Duplicates data arrays for seamless loop
- Uses Framer Motion `animate` with `repeat: Infinity`
- Different scroll speeds per row
- Alternating directions (left/right)

#### Matrix Rain
- Canvas-based animation
- `requestAnimationFrame` for smooth 60fps
- Random character generation
- Fade trail effect with `rgba(0, 0, 0, 0.05)`
- Responsive canvas sizing

#### Tilted Cards (Stats)
- CSS `transform: rotate()` with random angles
- Hover effect resets rotation
- Smooth transitions

### State Management

#### Chat Hook (`useChat.ts`)
- Custom React hook for chat functionality
- Manages messages array
- Typing indicator state
- Mock response system with pattern matching
- Simulated typing delays (500-1500ms)

### Styling Approach
- Tailwind CSS utility classes
- Custom CSS for animations
- CSS variables for fonts
- Responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Type Safety
- Full TypeScript implementation
- Interface definitions for all components
- Type-safe props and state
- Message type definitions

## 📝 Development Plans

The project includes development plans in `.cursor/plans/`:

### 1. `seobot_website_clone_b2b3fa6f.plan.md`
Initial project setup and implementation plan:
- Project structure setup
- Component creation
- Animation implementation
- Content data files
- Polish and optimization

### 2. `seobot_clone_improvements_7dbcc9ce.plan.md`
Improvements and enhancements:
- Fixed heading sizes
- Added infinite scrolling to language pills
- Created `/app` route structure
- Updated navigation links

### 3. `seobot_clone_-_bug_fixes_&_animations_1ac7fdc0.plan.md`
Bug fixes and missing animations:
- Fixed favicon error
- Added Matrix rain background
- Added floating language pill animations
- Cleaned up unnecessary files

### 4. `replace_login_with_chat_interface_d9f6911e.plan.md`
Chat interface implementation:
- Replaced login with interactive chat
- Created chat components (ChatInterface, ChatMessage, ChatInput)
- Implemented useChat hook
- Added mock response system
- Terminal-style UI design

## 🎨 Design System

### Colors
- **Primary Green**: `#00FF00` - Main brand color
- **Primary Lime**: `#C8FF00` - Hover states
- **Background**: `#000000` - Pure black
- **Foreground**: `#FFFFFF` - White text
- **Orange Accent**: `#FF6B00` - Labels and highlights
- **Gray Scale**: Various shades for borders and backgrounds

### Typography
- **Sans-serif**: Inter (via Next.js font optimization)
- **Monospace**: Courier New for terminal/code sections
- **Section Titles**: Green monospace with `//` prefix
- **Headings**: Large, bold, monospace font

### Spacing
- Consistent padding: `py-16 md:py-24` for sections
- Max-width containers: `max-w-7xl` for content
- Responsive padding: `px-4 md:px-8`

## 🔍 Code Quality

### Principles
- **Readable**: Clear component names, TypeScript types, comments
- **Maintainable**: Separated concerns, single responsibility
- **Scalable**: Component-based architecture
- **Optimized**: Proper React rendering, no unnecessary re-renders
- **DRY**: Reusable components, shared utilities

### Best Practices
- TypeScript for type safety
- Component composition
- Custom hooks for logic separation
- Framer Motion for animations
- Tailwind CSS for styling
- Responsive design patterns

## 📄 License

This project is a clone/recreation of seobotai.com for educational purposes.

## 👤 Contact

For questions about this clone project, refer to the original SEObot website at https://seobotai.com

---

**Note**: This is a clone project created for learning and demonstration purposes. All design elements and content are based on the original SEObot website.

