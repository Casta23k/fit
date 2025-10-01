"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const router = useRouter();
  const [planName, setPlanName] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [type, setType] = useState("");
  const [reminder, setReminder] = useState("");

  const handleLogout = () => {
    router.push("/"); // cerrar sesión y redirigir a la página principal
  };

  const toggleDay = (day: string) => {
    if (days.includes(day)) setDays(days.filter(d => d !== day));
    else setDays([...days, day]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ planName, days, type, reminder });
    // Aquí enviarías el fetch a /dashboard/plan
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-green-800 text-white flex flex-col p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center text-orange-400">FitLife</h2>
        <ul className="flex flex-col gap-2">
          <li><Link href="/dashboard" className={styles.sidebarLink}>Inicio</Link></li>
          <li><Link href="/perfil" className={styles.sidebarLink}>Perfil</Link></li> {/* CORREGIDO */}
          <li>
            <button onClick={handleLogout} className={`${styles.sidebarLink} ${styles.logout}`}>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-700 mb-8">Crea tu plan de ejercicios personalizado:</p>

        {/* Formulario Plan de Ejercicio */}
        <form onSubmit={handleSubmit} className={styles.formCard}>
          <label className="font-semibold mb-2 block">Nombre del plan</label>
          <input
            type="text"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
            value={planName}
            onChange={e => setPlanName(e.target.value)}
            placeholder="Ej. Plan de fuerza"
          />

          <label className="font-semibold mb-2 block">Días de entrenamiento</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"].map(day => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`${styles.dayButton} ${days.includes(day) ? styles.dayActive : styles.dayInactive}`}
              >
                {day}
              </button>
            ))}
          </div>

          <label className="font-semibold mb-2 block">Tipo de ejercicio</label>
          <select
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
            value={type}
            onChange={e => setType(e.target.value)}
          >
            <option value="">Selecciona...</option>
            <option value="Cardio">Cardio (correr, bicicleta, saltar cuerda)</option>
            <option value="Fuerza">Fuerza (pesas, flexiones, sentadillas)</option>
            <option value="Mixto">Mixto (circuito)</option>
          </select>

          <label className="font-semibold mb-2 block">Hora de recordatorio</label>
          <input
            type="time"
            className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all"
            value={reminder}
            onChange={e => setReminder(e.target.value)}
          />

          <button type="submit" className={styles.saveButton}>
            Guardar plan
          </button>
        </form>
      </main>
    </div>
  );
}
