import type { DashboardHeader as DashboardHeaderType } from "@/types/dashboard";
import Image from "next/image";
import { CalendarDaysIcon, GlobeAltIcon, InformationCircleIcon } from "@heroicons/react/24/outline";


interface DashboardHeaderProps {
  header: DashboardHeaderType;
}

export function DashboardHeader({ header }: DashboardHeaderProps) {
  return (
    <header className="rounded-lg bg-(--color-bg-header) px-6 py-4 shadow-sm ">
      <div className="flex items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold uppercase tracking-wide text-(--color-primary)">
            {header.reportTitle}
          </h1>
          <p className="text-lg font-semibold uppercase tracking-wide text-(--color-accent)">
            {header.plantName}
          </p>
        </div>

        <div className="flex shrink-0 items-center justify-center">
          <Image
            src="/img/logo-acema.png"
            alt="Logo ACEMA"
            width={180}
            height={52}
            priority
          />
        </div>

        <div className="flex gap-6 text-sm items-center">  

          <div className="flex gap-2 items-center">
            <CalendarDaysIcon className="h-8 w-8 text-(--color-accent-light)" />
            <div className="text-start">
                <p className="text-xs font-semibold uppercase text-(--color-primary)">
                Fecha
                </p>
                <p className="font-bold text-base">
                    {header.date}
                </p>
            </div>
          </div>          
          

          <div className="flex gap-2 items-center">
            <GlobeAltIcon className="h-8 w-8 text-(--color-accent-light)" />
            <div className="text-start">
                <p className="text-xs font-semibold uppercase text-(--color-primary)">
                    Capacidad instalada
                </p>
                <p className="font-bold text-base">
                    {header.installedCapacityKw.toLocaleString()} kWp
                </p>
            </div>
            
          </div>

          <div className="flex gap-2 items-center">
            <InformationCircleIcon className="h-8 w-8 text-(--color-accent-light)" />
            <div className="text-start">
                <p className="text-xs font-semibold uppercase text-(--color-primary)">
                Responsable
                </p>
                <p className="font-bold text-base">{header.responsible}</p>
            </div>
          </div>

          
        </div>
      </div>
    </header>
  );
}