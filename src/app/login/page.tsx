"use client";

import { useState } from "react";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles/login.css";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Guardamos el ID del usuario en localStorage
        localStorage.setItem("userId", data.userId);

        router.push("/dashboard"); // redirigir tras login exitoso
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md mx-auto">
        <div className="login-container">
          <div className="login-header">
            <div className="login-logo">
              <Dumbbell className="login-logo-icon" />
              <h1 className="login-logo-text">FitLife</h1>
            </div>
            <h2 className="login-title">Bienvenido de vuelta</h2>
            <p className="login-description">Inicia sesión para continuar tu journey fitness</p>
          </div>

          <div className="login-content">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 w-full rounded"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 w-full rounded"
              />
              <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded">
                Iniciar sesión
              </button>
            </form>

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
  );
}
