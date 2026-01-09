// API Client for FastAPI Backend
// MUST use process.env.NEXT_PUBLIC_API_URL - never hardcode URLs

import {
  AnalyzeRequest,
  AnalyzeResponse,
  GenerateRequest,
  GenerateResponse,
  ChatRequest,
  ChatResponse,
  ApiError,
} from './types/api'

// Get base URL from environment variable - NEVER hardcode
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

// Validate environment variable exists
if (!API_BASE_URL) {
  throw new Error(
    'NEXT_PUBLIC_API_URL environment variable is not set. ' +
    'Please create a .env.local file with: NEXT_PUBLIC_API_URL=http://your-backend-url:port'
  )
}

class ApiClient {
  private baseURL: string

  constructor(baseURL: string) {
    this.baseURL = baseURL
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`

    const config: RequestInit = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`
        
        try {
          const errorData: ApiError = await response.json()
          errorMessage = errorData.detail || errorData.message || errorData.error || errorMessage
        } catch {
          // If response is not JSON, use default error message
        }

        throw new Error(errorMessage)
      }

      return await response.json()
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Network error occurred')
    }
  }

  /**
   * Analyze a website URL
   * @param url - The website URL to analyze
   * @returns Analysis response with session_id, research_data, and plan
   */
  async analyzeWebsite(url: string): Promise<AnalyzeResponse> {
    const request: AnalyzeRequest = { url }
    return this.request<AnalyzeResponse>('/analyze', {
      method: 'POST',
      body: JSON.stringify(request),
    })
  }

  /**
   * Generate an article based on topic and research data
   * @param payload - Generate request payload with session_id, topic, keywords, word_count, and research_data
   * @returns Generated article content
   */
  async generateArticle(payload: GenerateRequest): Promise<GenerateResponse> {
    return this.request<GenerateResponse>('/generate', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  /**
   * Chat with the bot to refine analysis
   * @param payload - Chat request with session_id and message
   * @returns Chat response with answer and updated plan
   */
  async chat(payload: ChatRequest): Promise<ChatResponse> {
    return this.request<ChatResponse>('/chat', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }
}

// Export singleton instance
export const apiClient = new ApiClient(API_BASE_URL)

