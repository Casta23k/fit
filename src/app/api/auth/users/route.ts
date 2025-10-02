import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ message: "Falta userId" }, { status: 400 });
    }

    const id = Number(userId);
    if (isNaN(id)) {
      return NextResponse.json({ message: "userId inválido" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id },
      include: { plans: true },
    });

    if (!user) {
      return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("❌ Error obteniendo usuario:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
