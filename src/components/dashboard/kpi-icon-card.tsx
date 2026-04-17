import Image from "next/image";

type KpiIconCardVariant = "primary" | "success" | "factor";

interface KpiIconCardProps {
  imageSrc: string;
  alt: string;
  variant?: KpiIconCardVariant;
}

const variantClasses: Record<KpiIconCardVariant, string> = {
  primary: "bg-(--color-bg-kpi)",
  success: "bg-(--color-accent)",
  factor: "bg-(--color-bg-factor)",
};

// Componente específico para KPI de tipo icono, con estilos adaptados para mostrar una imagen representativa
export function KpiIconCard({ imageSrc, alt, variant = "primary"}: KpiIconCardProps) {
  return (
    <article className={`flex items-center justify-center 
        rounded-lg w-18 ${variantClasses[variant]}`} >
      <Image
        src={imageSrc}
        alt={alt}
        width={56}
        height={56}
        priority
      />
    </article>
  );
}