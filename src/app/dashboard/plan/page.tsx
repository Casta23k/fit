"use client";

import { useState, useEffect } from "react";
import styles from "../Dashboard.module.css";

type Plan = {
  id: number;
  name: string;
  days: string[];
  type: string;
  reminder: string;
};

export default function PlanPage() {
  const [name, setName] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [type, setType] = useState("Cardio");
  const [reminder, setReminder] = useState("");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  // ✅ Cargar userId del login al montar
  useEffect(() => {
    const storedId = localStorage.getItem("userId");
    if (storedId) {
      setUserId(storedId);
      fetchPlans(storedId);
    } else {
      setMessage("⚠️ No hay sesión activa, inicia sesión primero.");
    }
  }, []);

  // ✅ Obtener planes desde el backend
  const fetchPlans = async (id: string) => {
    try {
      const res = await fetch(`/auth/plan?userId=${id}`);
      const data = await res.json();
      if (res.ok) setPlans(data.plans || []);
    } catch (error) {
      console.error("Error cargando planes:", error);
    }
  };

  const toggleDay = (day: string) => {
    setDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // ✅ Crear plan asignado al usuario logueado
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) {
      setMessage("⚠️ No hay usuario logueado.");
      return;
    }

    try {
      const res = await fetch("/auth/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, name, days, type, reminder }),
      });
      const data = await res.json();

      if (res.ok) {
        setPlans((prev) => [...prev, data.plan]);
        setName("");
        setDays([]);
        setType("Cardio");
        setReminder("");
        setMessage("✅ Plan creado exitosamente");
        setTimeout(() => setMessage(""), 3000);
      } else {
        setMessage(`❌ Error: ${data.message}`);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Error al crear el plan");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🏋️‍♂️ FitApp</h2>
        <nav className={styles.nav}>
          <a href="/dashboard" className={styles.navItem}>Inicio</a>
          <a href="/dashboard/plan" className={`${styles.navItem} ${styles.active}`}>Plan de ejercicio</a>
          <a href="/perfil" className={styles.navItem}>Perfil</a>
          <a href="/" className={styles.navItem} onClick={() => localStorage.removeItem("userId")}>Cerrar sesión</a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className={styles.main}>
        {message && <div className={styles.toast}>{message}</div>}

        {/* Formulario */}
        <div className={styles.card}>
          <h1 className={styles.title}>➕ Crear nuevo plan</h1>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              placeholder="Nombre del plan"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />

            <label>Días de entrenamiento:</label>
            <div className={styles.days}>
              {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((day) => (
                <button
                  key={day}
                  type="button"
                  className={`${styles.dayChip} ${days.includes(day) ? styles.activeDay : ""}`}
                  onClick={() => toggleDay(day)}
                >
                  {day}
                </button>
              ))}
            </div>

            <label>Tipo de plan:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={styles.select}
            >
              <option>Cardio</option>
              <option>Fuerza</option>
              <option>Mixto</option>
            </select>

            <label>Hora de recordatorio:</label>
            <input
              type="time"
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              required
              className={styles.input}
            />

            <button type="submit" className={styles.btnPrimary}>Guardar plan</button>
          </form>
        </div>

        {/* Lista de planes */}
        <div className={styles.card}>
          <h2 className={styles.title}>📋 Mis planes</h2>
          {plans.length === 0 ? (
            <p>No tienes planes aún.</p>
          ) : (
            <ul className={styles.planList}>
              {plans.map((plan) => (
                <li key={plan.id} className={styles.planItem}>
                  <strong>{plan.name}</strong>
                  <span className={styles.planDetails}>
                    {plan.type} - {plan.days.join(", ")} - {plan.reminder}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
