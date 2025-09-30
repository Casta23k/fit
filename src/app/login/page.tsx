import { LoginForm } from "@/components/auth/login-form"
import { Dumbbell } from "lucide-react"
import Link from "next/link"
import "../styles/login.css"

export default function LoginPage() {
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
            <h2 className="login-title">Bienvenido de vuelta</h2>
            <p className="login-description">Inicia sesión para continuar tu journey fitness</p>
          </div>

          {/* Contenido del formulario */}
          <div className="login-content">
            <LoginForm />

            <div className="login-footer">
              <p className="login-footer-text">
                ¿No tienes cuenta?{" "}
                <Link href="/register" className="login-footer-link">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
