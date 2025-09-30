import { RegisterForm } from "@/components/auth/register-form"
import { Dumbbell } from "lucide-react"
import Link from "next/link"
import "../styles/register.css"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        <div className="register-container">
          {/* Header con logo y título */}
          <div className="register-header">
            <div className="register-logo">
              <Dumbbell className="register-logo-icon" />
              <h1 className="register-logo-text">FitLife</h1>
            </div>
            <h2 className="register-title">Únete a FitLife</h2>
            <p className="register-description">Crea tu cuenta y comienza tu transformación hoy</p>
          </div>

          {/* Contenido del formulario */}
          <div className="register-content">
            <RegisterForm />

            <div className="register-footer">
              <p className="register-footer-text">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="register-footer-link">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
