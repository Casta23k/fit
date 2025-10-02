"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, User } from "lucide-react";
import styles from "./Perfil.module.css";

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [user, setUser] = useState<any>(null);
  const [plans, setPlans] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // 👈 aquí lees al usuario guardado
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    const userId = parsedUser?.id;

    if (!userId) {
      setError("No hay usuario autenticado.");
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/auth/users?userId=${userId}`);
        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Error al obtener usuario");
          setLoading(false);
          return;
        }

        const userPlans = Array.isArray(data.plans)
          ? data.plans.map((plan: any) => ({
              ...plan,
              days: Array.isArray(plan.days) ? plan.days : [],
            }))
          : [];

        setUser(data);
        setPlans(userPlans);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("No se pudo conectar con el servidor.");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const filteredPlans = plans.filter((plan) =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="p-4">Cargando datos...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <div className={styles.dashboardPage}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>🏋️‍♂️ FitApp</h2>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navItem}>Inicio</Link>
          <Link href="/dashboard/plan" className={styles.navItem}>Plan de ejercicio</Link>
          <Link href="/dashboard/perfil" className={`${styles.navItem} ${styles.active}`}>Perfil</Link>
          <Link href="/" className={styles.navItem}>Cerrar sesión</Link>
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Perfil de Usuario</h1>
          <div className={styles.userIcon}><User className="w-6 h-6 text-gray-800" /></div>
        </div>

        <div className={styles.tabs}>
          <button
            className={`${styles.tabButton} ${activeTab === "personal" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("personal")}
          >
            Información personal
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === "ejercicios" ? styles.activeTab : ""}`}
            onClick={() => setActiveTab("ejercicios")}
          >
            Plan de ejercicios
          </button>
        </div>

        {activeTab === "ejercicios" && (
          <div className={styles.searchBar}>
            <Search className="w-5 h-5 text-gray-700" />
            <input
              type="text"
              placeholder="Buscar ejercicios..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <div className={styles.avatarSection}>
          <div className={styles.avatar}><User className="w-16 h-16 text-gray-800" /></div>
          <h2>{user.name}</h2>
        </div>

        {activeTab === "personal" ? (
          <div className={styles.card}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Correo electrónico</label>
                <input type="email" value={user.email} disabled />
              </div>
              <div>
                <label>Contraseña</label>
                <input type="password" value="********" disabled />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.exercisePlanCard}>
            {filteredPlans.length > 0 ? (
              filteredPlans.map((plan) => (
                <div key={plan.id} className={styles.card}>
                  <h3>{plan.name}</h3>
                  <p><strong>Días:</strong> {plan.days.join(", ")}</p>
                  <p><strong>Tipo:</strong> {plan.type}</p>
                  <p><strong>Recordatorio:</strong> {plan.reminder}</p>
                </div>
              ))
            ) : (
              <p>No se encontraron planes.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
