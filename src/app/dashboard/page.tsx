"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./Dashboard.module.css"

export default function DashboardPage() {
  const [plans, setPlans] = useState<any[]>([])

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await fetch("/api/auth/plan")
        const data = await res.json()
        setPlans(data || [])
      } catch (err) {
        console.error("Error cargando planes:", err)
      }
    }
    fetchPlans()
  }, [])

  return (
    <div className={styles.dashboard}>
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🏋️‍♂️ FitApp</h2>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navItem}>Inicio</Link>
          <Link href="/dashboard/plan" className={styles.navItem}>Plan de ejercicio</Link>
          <Link href="/dashboard/perfil" className={styles.navItem}>Perfil</Link>
          <Link href="/" className={styles.navItem}>Cerrar sesión</Link>
        </nav>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>📅 Planes creados</h1>
          <Link href="/dashboard/plan/create" className={styles.createButton}>+ Nuevo Plan</Link>
        </header>

        <div className={styles.cards}>
          {plans.length > 0 ? (
            plans.map((plan) => (
              <div key={plan.id} className={styles.card}>
                <h2>{plan.name}</h2>
                <p><strong>Días:</strong> {Array.isArray(plan.days) ? plan.days.join(", ") : plan.days}</p>
                <p><strong>Tipo:</strong> {plan.type}</p>
                <p><strong>Recordatorio:</strong> {plan.reminder}</p>
              </div>
            ))
          ) : (
            <p className={styles.noPlans}>No hay planes creados aún.</p>
          )}
        </div>
      </main>
    </div>
  )
}
