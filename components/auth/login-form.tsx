import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: "Email y contraseña son obligatorios" }, { status: 400 })
    }

    // Buscar usuario
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 })
    }

    // Validar contraseña
    const isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
      return NextResponse.json({ message: "Contraseña incorrecta" }, { status: 401 })
    }

    return NextResponse.json({ message: "Inicio de sesión exitoso", user }, { status: 200 })
  } catch (error) {
    console.error("Error en login:", error)
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 })
  }
}
