import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, days, type, reminder } = await req.json();

    if (!name || !days || !type || !reminder) {
      return NextResponse.json({ message: "Faltan campos requeridos" }, { status: 400 });
    }

    const newPlan = await prisma.plan.create({
      data: {
        name,
        days,    // array de strings directamente
        type,
        reminder,
      },
    });

    return NextResponse.json({ message: "Plan creado", planId: newPlan.id }, { status: 201 });
  } catch (error) {
    console.error("Error al crear plan:", error);
    return NextResponse.json({ message: "Error interno del servidor" }, { status: 500 });
  }
}

