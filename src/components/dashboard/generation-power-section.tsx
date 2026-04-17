import type { GenerationSeriesItem } from "@/types/dashboard";
import { GenerationPowerChart } from "@/components/dashboard/generation-power-chart";
import { GenerationTable } from "@/components/dashboard/generation-table";

interface GenerationPowerSectionProps {
  series: GenerationSeriesItem[];
}

export function GenerationPowerSection({
  series,
}: GenerationPowerSectionProps) {
  return (
    <section className=" w-3/5 rounded-lg bg-(--color-bg-card) shadow-sm">
      <div className="border-b border-(--color-border) px-4 py-2">
        <h2 className="text-md font-bold uppercase tracking-wide text-(--color-text-curve)">
          Generación y Curva de Potencia
        </h2>
      </div>

      <div className="grid p-3 xl:grid-cols-[2.05fr_3fr]">
        <GenerationTable series={series} />
        <GenerationPowerChart series={series} />
      </div>
    </section>
  );
}