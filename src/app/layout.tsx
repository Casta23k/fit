import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "FitLife - Tu compañero de fitness",
  description: "Transforma tu vida con FitLife - La aplicación de fitness que te motiva a alcanzar tus metas",
  generator: "v0.app",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans antialiased bg-[var(--background)] text-[var(--primary)]">
        {/* Contenedor global centrado con ancho limitado */}
        <main className="max-w-6xl mx-auto px-6">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
