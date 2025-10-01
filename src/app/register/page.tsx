"use client";

import { useState } from "react";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "../styles/register.css";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("/login"); // redirigir tras registro exitoso
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
        <div className="register-container">
          <div className="register-header">
            <div className="register-logo">
              <Dumbbell className="register-logo-icon" />
              <h1 className="register-logo-text">FitLife</h1>
            </div>
            <h2 className="register-title">Únete a FitLife</h2>
            <p className="register-description">Crea tu cuenta y comienza tu transformación hoy</p>
          </div>

          <div className="register-content">
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500">{error}</p>}
              <input
                type="text"
                placeholder="Nombre completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 w-full rounded"
              />
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
              <button type="submit" className="bg-green-500 text-white w-full py-2 rounded">
                Registrarse
              </button>
            </form>

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
  );
}
