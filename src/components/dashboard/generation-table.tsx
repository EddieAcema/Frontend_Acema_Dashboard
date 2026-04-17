import type { GenerationSeriesItem } from "@/types/dashboard";

interface GenerationTableProps {
  series: GenerationSeriesItem[];
}

export function GenerationTable({ series }: GenerationTableProps) {
    
  return (
    <div className="overflow-hidden rounded-lg border border-(--color-border) bg-white">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-(--color-bg-kpi) text-white">
          <tr>
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase">
              Hora
            </th>
            <th className="px-3 py-2 text-right text-xs font-semibold uppercase">
              Generación (kW)
            </th>
            <th className="px-3 py-2 text-right text-xs font-semibold uppercase">
              Irradiancia (W/m²)
            </th>
          </tr>
        </thead>

        <tbody className="text-(--color-primary)">
          {series.map((item) => (
            <tr key={item.hour} className="border-t border-(--color-border)">
              <td className="px-3 py-2 font-medium">{item.hour}</td>
              <td className="px-3 py-2 text-right">
                {item.generationKw.toLocaleString("es-CO")}
              </td>
              <td className="px-3 py-2 text-right">
                {item.irradianceWm2.toLocaleString("es-CO")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}