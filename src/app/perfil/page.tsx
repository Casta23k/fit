"use client"

import { useState } from "react"
import { Search, User } from "lucide-react"
import styles from "./Perfil.module.css"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const daysOfWeek = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

  const toggleDay = (day: string) => {
    setSelectedDays(prev => prev.includes(day) ? prev.filter(d => d!==day) : [...prev, day])
  }

  return (
    <div className={styles["profile-page"]}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles["icon-wrapper"]}>
          <User className="w-6 h-6 text-orange-400" />
        </div>
        <span>Perfil</span>
      </aside>

      {/* Main Content */}
      <div className={styles["main-content"]}>
        {/* Header */}
        <div className={styles["profile-header"]}>
          <h1>Perfil</h1>
          <User className="w-6 h-6 text-gray-800" />
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button 
            className={`${styles["tab-button"]} ${activeTab==="personal"?styles.active:""}`}
            onClick={()=>setActiveTab("personal")}
          >
            Información personal
          </button>
          <button 
            className={`${styles["tab-button"]} ${activeTab==="ejercicios"?styles.active:""}`}
            onClick={()=>setActiveTab("ejercicios")}
          >
            Plan de ejercicios
          </button>
        </div>

        {/* Search */}
        <div className={styles["search-bar"]}>
          <Search className="w-5 h-5 text-gray-700"/>
          <input type="text" placeholder="Buscar ejercicios..." />
        </div>

        {/* Avatar */}
        <div className={styles["avatar-section"]}>
          <div className={styles.avatar}><User className="w-16 h-16 text-gray-800"/></div>
          <h2>Fulanito Martino</h2>
        </div>

        {/* Content */}
        {activeTab==="personal" ? (
          <div className={styles.card}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Correo electrónico</label>
                <input type="email" value="full@gmail.com" disabled />
              </div>
              <div>
                <label>Contraseña</label>
                <input type="password" value="********" disabled />
              </div>
            </div>
          </div>
        ):(
          <div className={styles["exercise-plan-card"]}>
            <label>Nombre de la rutina</label>
            <input type="text" placeholder="Definir" className={styles["exercise-input"]}/>

            <label>Días de entrenamiento</label>
            <div className={styles["days-grid"]}>
              {daysOfWeek.map(day=>(
                <button key={day} onClick={()=>toggleDay(day)}
                  className={`${styles["day-button"]} ${selectedDays.includes(day)?styles["day-selected"]:styles["day-unselected"]}`}>
                  {day}
                </button>
              ))}
            </div>

            <label>Duración por sesión</label>
            <input type="text" placeholder="30 min" className={styles["exercise-input"]} />

            <label>Tipo de entrenamiento</label>
            <div className={styles["training-type-grid"]}>
              <button className={`${styles["training-type-button"]} ${styles["training-type-selected"]}`}>
                Cardio
              </button>
              <button className={`${styles["training-type-button"]} ${styles["training-type-unselected"]}`}>
                Fuerza
              </button>
              <button className={`${styles["training-type-button"]} ${styles["training-type-unselected"]}`}>
                Mixto
              </button>
            </div>

            <div className="flex justify-end mt-4">
              <button className={`${styles.button} ${styles["button-primary"]}`}>EDITAR</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
