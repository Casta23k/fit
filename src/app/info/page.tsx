// src/pages/register-info.tsx
import { Dumbbell } from "lucide-react"
import Link from "next/link"
import "../style/formu.css"

export default function RegisterInfoPage() {
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
            <h2 className="login-title">Registra tu información personal</h2>
            <p className="login-description">
              Completa tus datos personales para que podamos darte un plan de entrenamiento y alimentación
              adecuado a tus objetivos.
            </p>
          </div>

          {/* Contenido del formulario */}
          <div className="login-content">
            <form className="space-y-4">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="input-field"
                />
              </div>

              {/* Fecha de nacimiento */}
              <div>
                <label className="block text-sm font-medium">Fecha de nacimiento</label>
                <input
                  type="date"
                  className="input-field"
                />
              </div>

              {/* Sexo */}
              <div>
                <label className="block text-sm font-medium">Sexo</label>
                <select className="input-field">
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              </div>

              {/* Frecuencia de ejercicio */}
              <div>
                <label className="block text-sm font-medium">Frecuencia semanal de ejercicio</label>
                <select className="input-field">
                  <option value="ninguna">Ninguna</option>
                  <option value="1-2">1 - 2 veces</option>
                  <option value="3-4">3 - 4 veces</option>
                  <option value="5+">5 o más</option>
                </select>
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

              {/* Peso actual */}
              <div>
                <label className="block text-sm font-medium">Peso actual</label>
                <input
                  type="number"
                  placeholder="70kg"
                  className="input-field"
                />
              </div>

              {/* Altura */}
              <div>
                <label className="block text-sm font-medium">Altura</label>
                <input
                  type="number"
                  placeholder="1.70m"
                  step="0.01"
                  className="input-field"
                />
              </div>

              {/* Objetivo */}
              <div>
                <label className="block text-sm font-medium">Objetivo</label>
                <select className="input-field">
                  <option value="bajar">Bajar de peso</option>
                  <option value="mantener">Mantener peso</option>
                  <option value="subir">Subir masa muscular</option>
                </select>
              </div>

              {/* Peso meta */}
              <div>
                <label className="block text-sm font-medium">Peso meta</label>
                <input
                  type="number"
                  placeholder="70kg"
                  className="input-field"
                />
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
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="login-footer-link">
                  Inicia sesión aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
