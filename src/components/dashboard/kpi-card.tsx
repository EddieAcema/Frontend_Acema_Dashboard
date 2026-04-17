import type { ComponentType, SVGProps } from "react";
import type { KpiVariant } from "@/types/dashboard";

interface KpiCardProps {
  title: string;
  value: string;
  unit?: string;
  variant?: KpiVariant;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

// Definimos estilos para cada variante de KPI
const variantClasses: Record<KpiVariant, string> = {
  primary: "bg-(--color-bg-kpi) text-white",
  success: "bg-(--color-accent) text-white",
  factor: "bg-(--color-bg-factor) text-white",
};

export function KpiCard({title, value, unit, variant = "primary",Icon,}: KpiCardProps) {
    
  return (
    <article className={`w-max flex-1 rounded-lg px-4 py-2 shadow-sm h-20 ${variantClasses[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-wide opacity-90">
            {title}
          </p>
          <div className="mt-1 flex items-end gap-1">
            <span className="text-3xl font-semibold leading-none">{value}</span>
            {unit ? (
              <span className={`${unit === '%' ? 'text-2xl' : 'text-md'} font-medium opacity-90`}>{unit}</span>
            ) : null}
          </div>
        </div>        
      </div>
    </article>
  );
}