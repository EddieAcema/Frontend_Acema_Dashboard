import type { DashboardData } from "@/types/dashboard";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3001";

export async function getValleduparMockData(): Promise<DashboardData> {
    // consulta de datos al backend, con manejo de errores
  try {
    const response = await fetch(`${API_BASE_URL}/api/valledupar`, {
      cache: "no-store", // Evita cachear la respuesta para siempre, asegurando datos frescos en cada solicitud
    });

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    return response.json() as Promise<DashboardData>;
  } catch (error) {
    throw new Error(`No se pudo conectar al backend: ${error}`);
  }
}