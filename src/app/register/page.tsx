"use client"

import { RegisterForm } from "@/components/auth/register-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Dumbbell className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">FitLife</h1>
        </div>

        <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold">Únete a FitLife</CardTitle>
            <CardDescription className="text-muted-foreground">
              Crea tu cuenta y comienza tu transformación hoy
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <RegisterForm />
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                ¿Ya tienes cuenta?{" "}
                <Link href="/login" className="text-primary hover:underline font-medium">
                  Inicia sesión
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
