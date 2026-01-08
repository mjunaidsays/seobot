'use client'

import { motion } from 'framer-motion'
import { FaCopy, FaDownload } from 'react-icons/fa'

export interface GeneratedArticle {
  title: string
  article: string
  keywords: string[]
  word_count: number
}

interface GeneratedArticleProps {
  article: GeneratedArticle
  index: number
}

export default function GeneratedArticle({ article, index }: GeneratedArticleProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(article.article)
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy article:', err)
    }
  }

  const handleDownload = () => {
    const blob = new Blob([article.article], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${article.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-6"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {article.keywords.slice(0, 5).map((keyword, idx) => (
              <span
                key={idx}
                className="bg-primary-green/20 text-primary-green px-2 py-1 rounded text-xs font-mono"
              >
                {keyword}
              </span>
            ))}
            {article.keywords.length > 5 && (
              <span className="text-gray-400 text-xs">+{article.keywords.length - 5} more</span>
            )}
          </div>
          <p className="text-gray-400 text-sm font-mono">
            {article.word_count.toLocaleString()} words
          </p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={handleCopy}
            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition-colors"
            title="Copy article"
          >
            <FaCopy className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownload}
            className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded transition-colors"
            title="Download article"
          >
            <FaDownload className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Article Content */}
      <div className="bg-gray-950 border border-gray-800 rounded p-4 max-h-96 overflow-y-auto">
        <div className="prose prose-invert max-w-none">
          <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
            {article.article}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

