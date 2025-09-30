// src/pages/plan-ejercicio.tsx
import { Dumbbell } from "lucide-react"
import Link from "next/link"
import "../styles/login.css"

export default function PlanEjercicioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        <div className="login-container">
          {/* Header con logo y título */}
          <div className="login-header">
            <div className="login-logo">
              <Dumbbell className="login-logo-icon" />
              <h1 className="login-logo-text">FitLife</h1>
            </div>
            <h2 className="login-title">Plan de Ejercicio</h2>
            <p className="login-description">
              Completa tus datos personales para que podamos crear un plan de entrenamiento y nutrición adaptado a ti. 
              Esta información nos ayudará a conocerte mejor y ofrecerte un seguimiento personalizado para alcanzar 
              tus objetivos de forma más efectiva.
            </p>
          </div>

          {/* Contenido del formulario */}
          <div className="login-content">
            <form className="space-y-4">
              {/* Objetivo principal */}
              <div>
                <label className="block text-sm font-medium">Objetivo principal</label>
                <input
                  type="text"
                  placeholder="Definir"
                  className="input-field"
                />
              </div>

              {/* Nivel de experiencia */}
              <div>
                <label className="block text-sm font-medium">Nivel de experiencia</label>
                <select className="input-field">
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>

              {/* Frecuencia semanal de ejercicio */}
              <div>
                <label className="block text-sm font-medium">Frecuencia semanal de ejercicio</label>
                <input
                  type="text"
                  placeholder="Seguido"
                  className="input-field"
                />
              </div>

              {/* Duración de cada sesión */}
              <div>
                <label className="block text-sm font-medium">Duración de cada sesión</label>
                <input
                  type="text"
                  placeholder="30 min"
                  className="input-field"
                />
              </div>

              {/* Tipo de entrenamiento */}
              <div>
                <label className="block text-sm font-medium">Tipo de entrenamiento</label>
                <select className="input-field">
                  <option value="cardio">Cardio</option>
                  <option value="fuerza">Fuerza</option>
                  <option value="mixto">Mixto</option>
                </select>
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Guardar
              </button>
            </form>

            <div className="login-footer">
              <p className="login-footer-text">
                ¿Quieres modificar tus datos?{" "}
                <Link href="/register-info" className="login-footer-link">
                  Edita tu información aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
