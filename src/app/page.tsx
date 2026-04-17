
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { KpiIconCard } from "@/components/dashboard/kpi-icon-card";
import { getValleduparMockData } from "@/services/dashboard.service";
import { GenerationPowerSection } from "@/components/dashboard/generation-power-section";
import type { KpiItem } from "@/types/dashboard";

export default async function Home() {

  const data = await getValleduparMockData();
  const kpiItems: KpiItem[] = [
    {
      type: "metric",
      title: "Energía generada",
      value: data.kpis.generatedEnergyKwh.toLocaleString("es-CO"),
      unit: "kWh",
    },
    {
      type: "metric",
      title: "Energía esperada",
      value: data.kpis.expectedEnergyKwh.toLocaleString("es-CO"),
      unit: "kWh",
    },
    {
      type: "metric",
      title: "Desviación",
      value: data.kpis.deviationPct.toFixed(2),
      unit: "%",
    },
    {
      type: "metric",
      title: "Performance Ratio (PR)",
      value: data.kpis.performanceRatioPct.toFixed(1),
      unit: "%",
      variant: "success" as const,
    },
    {
      type: "metric",
      title: "Disponibilidad",
      value: data.kpis.availabilityPct.toFixed(1),
      unit: "%",
    },
    {
      type: "icon",
      variant: "primary",
      imageSrc: "/img/kpi-img.png",
      alt: "Solar",
    },
    {
      type: "metric",
      title: "Factor de planta",
      value: data.kpis.capacityFactorPct.toFixed(2),
      unit: "%",
      variant: "factor",
    },
  ];

  return (
    <DashboardShell>
      <div className="space-y-4">
        <DashboardHeader header={data.header} />

        <section className="flex items-stretch gap-3 mb-2">
          {kpiItems.map((item, index) => {
            if (item.type === "icon") {
              return (
                <KpiIconCard
                  key={`icon-${index}`}
                  imageSrc={item.imageSrc}
                  alt={item.alt}
                  variant={item.variant}
                />
              );
            }

            return (
              <KpiCard
                key={item.title}
                title={item.title}
                value={item.value}
                unit={item.unit}
                variant={item.variant}
              />
            );
          })}
        </section>

        <GenerationPowerSection series={data.generationSeries} />
        
      </div>
    </DashboardShell>
  );
}