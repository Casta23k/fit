"use client"

import styles from "./Sidebar.module.css"
import Link from "next/link"

type SidebarProps = {
  active?: "dashboard" | "plan" | "perfil"
  isPerfilPage?: boolean
}

export default function Sidebar({ active, isPerfilPage }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>🏋️‍♂️ FitApp</h2>
      <nav className={styles.nav}>
        {!isPerfilPage && (
          <>
            <Link href="/dashboard" className={`${styles.navItem} ${active === "dashboard" ? styles.active : ""}`}>
              Inicio
            </Link>
            <Link href="/dashboard/plan" className={`${styles.navItem} ${active === "plan" ? styles.active : ""}`}>
              Plan de ejercicio
            </Link>
          </>
        )}
        <Link href="/dashboard/perfil" className={`${styles.navItem} profile ${active === "perfil" ? styles.active : ""}`}>
          Perfil
        </Link>
        <Link href="/" className={styles.navItem}>Cerrar sesión</Link>
      </nav>
    </aside>
  )
}
