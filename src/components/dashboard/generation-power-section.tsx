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
    <section className="rounded-lg border border-(--color-border) bg-(--color-bg-card) shadow-sm">
      <header className="border-b border-(--color-border) px-4 py-3">
        <h2 className="text-lg font-semibold uppercase tracking-wide text-(--color-primary)">
          Generación y Curva de Potencia
        </h2>
      </header>

      <div className="grid gap-4 p-4 xl:grid-cols-[280px_minmax(0,1fr)]">
        <GenerationTable series={series} />
        <GenerationPowerChart series={series} />
      </div>
    </section>
  );
}