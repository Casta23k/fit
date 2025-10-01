"use client";

import { useState } from "react";

export default function PlanPage() {
  const [name, setName] = useState("");
  const [days, setDays] = useState<string[]>([]);
  const [type, setType] = useState("Cardio");
  const [reminder, setReminder] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const weekdays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const handleDayChange = (day: string) => {
    setDays(days.includes(day) ? days.filter(d => d !== day) : [...days, day]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || days.length === 0 || !reminder) {
      setError("Por favor completa todos los campos");
      return;
    }

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, days, type, reminder }),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccess("Plan creado exitosamente");
        setName(""); setDays([]); setType("Cardio"); setReminder("");
      } else {
        setError(data.message);
      }
    } catch {
      setError("Error de conexión");
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>FitLife</h2>
        <ul>
          <li>
            <a href="/dashboard">Inicio</a>
          </li>
          <li>
            <a href="/dashboard/plan">Planes</a>
          </li>
          <li>
            <a href="/dashboard/profile">Perfil</a>
          </li>
          <li>
            <a
              href="/"
              className="logout"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              Cerrar sesión
            </a>
          </li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="dashboard-main">
        <h1>Crear Plan de Ejercicio</h1>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <form onSubmit={handleSubmit} className="plan-form">
          <label>Nombre del plan</label>
          <input
            type="text"
            placeholder="Nombre del plan"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Días de entrenamiento</label>
          <div className="checkbox-group">
            {weekdays.map(day => (
              <label key={day}>
                <input
                  type="checkbox"
                  checked={days.includes(day)}
                  onChange={() => handleDayChange(day)}
                  className="accent-primary"
                />
                {day}
              </label>
            ))}
          </div>

          <label>Tipo de entrenamiento</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Cardio">Cardio</option>
            <option value="Fuerza">Fuerza</option>
            <option value="Mixto">Mixto</option>
          </select>

          <label>Hora de recordatorio</label>
          <input type="time" value={reminder} onChange={(e) => setReminder(e.target.value)} />

          <button type="submit">Guardar Plan</button>
        </form>
      </main>
    </div>
  );
}
