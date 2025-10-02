import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, name, days, type, reminder } = body;

    if (!userId || !name) {
      return NextResponse.json({ message: "userId y name son requeridos" }, { status: 400 });
    }

    // Crear plan en la base de datos
    const newPlan = await prisma.plan.create({
      data: {
        name,
        days,     // Guardamos como Json
        type,
        reminder,
        userId: Number(userId),
      },
    });

    return NextResponse.json({ message: "Plan creado", plan: newPlan });
  } catch (error) {
    console.error("❌ Error creando plan:", error);
    return NextResponse.json({ message: "Error interno" }, { status: 500 });
  }
}
