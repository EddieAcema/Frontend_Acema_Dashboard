import type { GenerationSeriesItem } from "@/types/dashboard";

interface GenerationTableProps {
  series: GenerationSeriesItem[];
}

export function GenerationTable({ series }: GenerationTableProps) {

  return (

    <div className="overflow-hidden rounded-lg border border-(--color-border) bg-white">
      <table className="border-collapse text-sm">
        <thead className="bg-(--color-primary) text-white">
          <tr>
            <th className="px-2 py-2 text-left text-xs uppercase font-light">
              Hora
            </th>
            <th className="px-2 py-2 text-left text-xs uppercase font-light whitespace-nowrap">
              Generación (kW)
            </th>
            <th className="px-2 py-2 text-left text-xs font-light whitespace-nowrap">
                <span className="uppercase">Irradiancia (W/</span>m²)
            </th>
          </tr>
        </thead>

        <tbody>
          {series.map((item) => (
            <tr key={item.hour} className="border-t border-(--color-border)">
              <td className="px-2  font-medium bg-(--color-bg-kpi) text-white">{item.hour}</td>
              <td className="px-3 text-center">
                {item.generationKw.toLocaleString("es-CO")}
              </td>
              <td className="px-3 text-center">
                {item.irradianceWm2.toLocaleString("es-CO")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}