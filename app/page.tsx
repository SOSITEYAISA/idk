"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Quote {
  text: string
  author: string
}

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(false)
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch("/api/views")
        const data = await response.json()
        setViews(data.views)
      } catch (error) {
        console.error("[v0] Error fetching views:", error)
      }
    }
    fetchViews()
  }, [])

  const fetchQuote = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/quote")
      const data = await response.json()
      setQuote(data)
    } catch (error) {
      console.error("[v0] Error fetching quote:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Генератор Цитат</h1>
          <p className="text-muted-foreground">Получите вдохновляющую цитату одним нажатием</p>
          {views !== null && (
            <p className="text-sm text-muted-foreground mt-2">
              Просмотров страницы: <span className="font-bold text-foreground">{views}</span>
            </p>
          )}
        </div>

        {quote && (
          <Card className="p-8 bg-muted border-border">
            <blockquote className="space-y-4">
              <p className="text-xl text-white leading-relaxed">"{quote.text}"</p>
              <footer className="text-gray-300">— {quote.author}</footer>
            </blockquote>
          </Card>
        )}

        <div className="flex justify-center">
          <Button
            onClick={fetchQuote}
            disabled={loading}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {loading ? "Загрузка..." : "Получить цитату"}
          </Button>
        </div>
      </div>
    </main>
  )
}
