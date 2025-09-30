"use client"

import { useState } from "react"
import { Search, User } from "lucide-react"
import ProfileHeader from "./header"
import "../styles/perfil.css"

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]

  const toggleDay = (day: string) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-14 bg-orange-400 flex flex-col items-center py-4">
        <div className="bg-white rounded-full p-2 mb-2">
          <User className="w-6 h-6 text-orange-400" />
        </div>
        <span className="text-xs text-gray-800 font-medium">Perfil</span>
      </aside>

      {/* Main Content */}
      <div className="ml-14">
        <ProfileHeader />

        <main className="p-6 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "personal"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Información personal
            </button>
            <button
              onClick={() => setActiveTab("ejercicios")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "ejercicios"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "bg-transparent text-gray-600 hover:bg-gray-100"
              }`}
            >
              Plan de ejercicios
            </button>
          </div>

          {/* Search Bar */}
          <div className="bg-orange-300 rounded-full px-6 py-3 flex items-center gap-3 mb-8">
            <Search className="w-5 h-5 text-gray-700" />
            <input
              type="text"
              placeholder="Search Groups"
              className="bg-transparent border-none outline-none flex-1 text-gray-800 placeholder-gray-700"
            />
          </div>

          {/* Profile Avatar and Name */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-32 h-32 rounded-full bg-orange-300 flex items-center justify-center">
              <User className="w-16 h-16 text-gray-800" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Fulanito Martino</h2>
          </div>

          {/* Conditional Rendering for Tabs */}
          {activeTab === "personal" ? (
            /* Profile Information Card */
            <div className="bg-orange-300 rounded-3xl p-8">
              {/* Email and Password */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Correo electrónico:</label>
                  <input
                    type="email"
                    defaultValue="full@gmail.com"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Contraseña:</label>
                  <input
                    type="password"
                    defaultValue="********"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-5 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Sexo:</label>
                  <input
                    type="text"
                    placeholder="Lorem"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Edad:</label>
                  <input
                    type="text"
                    placeholder="Lorem"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Altura:</label>
                  <input
                    type="text"
                    placeholder="Lorem"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Peso Actual:</label>
                  <input
                    type="text"
                    placeholder="Lorem"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Peso Meta:</label>
                  <input
                    type="text"
                    placeholder="Lorem"
                    className="w-full px-4 py-2 rounded-full bg-white text-gray-800 outline-none focus:ring-2 focus:ring-orange-500"
                    disabled
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-800 mb-3">Nivel de experiencia</label>
                <div className="flex gap-4">
                  <button className="px-6 py-2 rounded-full bg-white text-gray-800 font-medium hover:bg-gray-100 transition-colors">
                    Principiante
                  </button>
                  <button className="px-6 py-2 rounded-full bg-gray-400 text-gray-800 font-medium hover:bg-gray-500 transition-colors">
                    Intermedio
                  </button>
                  <button className="px-6 py-2 rounded-full bg-gray-400 text-gray-800 font-medium hover:bg-gray-500 transition-colors">
                    Avanzado
                  </button>
                </div>
              </div>

              {/* Exercise Frequency */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-800 mb-3">Frecuencia semanal de ejercicio:</label>
                <input
                  type="text"
                  placeholder="Lorem"
                  className="w-full max-w-md px-4 py-2 rounded-full bg-gray-500 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-orange-500"
                  disabled
                />
              </div>

              {/* Main Goal */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-800 mb-3">Meta Principal</label>
                <div className="flex gap-4">
                  <button className="px-6 py-2 rounded-full bg-gray-500 text-white font-medium hover:bg-gray-600 transition-colors">
                    Bajar de peso
                  </button>
                  <button className="px-6 py-2 rounded-full bg-gray-400 text-gray-800 font-medium hover:bg-gray-500 transition-colors">
                    Ganar masa muscular
                  </button>
                  <button className="px-6 py-2 rounded-full bg-gray-400 text-gray-800 font-medium hover:bg-gray-500 transition-colors">
                    Mantener salud
                  </button>
                </div>
              </div>

              {/* Edit Button */}
              <div className="flex justify-end">
                <button className="px-8 py-3 rounded-full bg-orange-800 text-white font-semibold hover:bg-orange-900 transition-colors">
                  EDITAR
                </button>
              </div>
            </div>
          ) : (
            /* Exercise Plan Card */
            <div className="exercise-plan-card">
              {/* Routine Name */}
              <div className="mb-6">
                <label className="exercise-label">Nombre de la rutina</label>
                <input type="text" placeholder="Definir" className="exercise-input" />
              </div>

              {/* Training Days Selection */}
              <div className="mb-6">
                <label className="exercise-label">Sesión de días de entrenamiento</label>
                <div className="days-grid">
                  {daysOfWeek.map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={`day-button ${selectedDays.includes(day) ? "day-selected" : "day-unselected"}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Session Duration */}
              <div className="mb-6">
                <label className="exercise-label">Duración de cada sesión</label>
                <input type="text" placeholder="30 min" className="exercise-input" />
              </div>

              {/* Training Type */}
              <div className="mb-6">
                <label className="exercise-label">Tipo de entrenamiento</label>
                <div className="training-type-grid">
                  <button className="training-type-button training-type-selected">
                    Cardio
                    <span className="training-type-description">(correr, bicicleta, saltar cuerda etc)</span>
                  </button>
                  <button className="training-type-button training-type-unselected">
                    Fuerza
                    <span className="training-type-description">(pesas, flexiones, sentadillas, etc)</span>
                  </button>
                  <button className="training-type-button training-type-unselected">
                    Mixto
                    <span className="training-type-description">(circuito)</span>
                  </button>
                </div>
              </div>

              {/* Reminder Schedule */}
              <div className="mb-8">
                <label className="exercise-label">Horario de recordatorio</label>
                <input type="text" placeholder="XX:XX xm" className="exercise-input" />
              </div>

              {/* Edit Button */}
              <div className="flex justify-end">
                <button className="px-8 py-3 rounded-full bg-orange-800 text-white font-semibold hover:bg-orange-900 transition-colors">
                  EDITAR
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
