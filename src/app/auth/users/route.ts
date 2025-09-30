import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" })

  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: "Faltan datos" })

  try {
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(400).json({ message: "Usuario no encontrado" })

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) return res.status(400).json({ message: "Contraseña incorrecta" })

    return res.status(200).json({ message: "Login exitoso", user: { id: user.id, name: user.name, email: user.email } })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "Error interno del servidor" })
  }
}
