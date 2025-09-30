"use client"

import Link from "next/link"
import { Dumbbell, Target, Users, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-[var(--background)] via-white to-[var(--background)]">
      {/* Header */}
      <header className="border-b bg-card/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Dumbbell className="h-9 w-9 text-[var(--accent)]" />
            <h1 className="text-3xl font-bold text-[var(--primary)]">FitLife</h1>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <button className="btn-outline px-6 py-2 text-base w-auto">Iniciar Sesión</button>
            </Link>
            <Link href="/register">
              <button className="btn-primary px-6 py-2 text-base w-auto">Registrarse</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center text-center">
        <div className="max-w-3xl px-4">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 title-gradient leading-tight">
            Transforma tu vida con FitLife
          </h2>
          <p className="text-xl sm:text-2xl text-[var(--text-muted)] mb-8">
            La aplicación de fitness que te motiva a alcanzar tus metas. Entrena, progresa y celebra cada logro en tu
            camino hacia una vida más saludable.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-2 max-w-6xl mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="card p-6 rounded-2xl min-h-[20rem] flex flex-col justify-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Target className="h-16 w-16 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold">Metas Personalizadas</h3>
              <p className="text-base text-[var(--text-muted)] text-center">
                Define objetivos realistas y sigue tu progreso con métricas detalladas.
              </p>
            </CardContent>
          </Card>

          <Card className="card p-6 rounded-2xl min-h-[20rem] flex flex-col justify-center">
            <CardContent className="flex flex-col items-center gap-4">
              <Users className="h-16 w-16 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold">Comunidad Activa</h3>
              <p className="text-base text-[var(--text-muted)] text-center">
                Conecta con otros usuarios, comparte logros y mantente motivado.
              </p>
            </CardContent>
          </Card>

          <Card className="card p-6 rounded-2xl min-h-[20rem] flex flex-col justify-center">
            <CardContent className="flex flex-col items-center gap-4">
              <TrendingUp className="h-16 w-16 text-[var(--accent)]" />
              <h3 className="text-xl font-semibold">Progreso Visual</h3>
              <p className="text-base text-[var(--text-muted)] text-center">
                Visualiza tu evolución con gráficos y estadísticas motivadoras.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
