import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Генератор Цитат",
  description: "Простое приложение для получения случайных цитат",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
