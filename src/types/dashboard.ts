
// Definición de tipos para mapear desde datos crudos a estructuras más amigables para el dashboard
export interface ValleduparRawRecord {
   
  ts: string | null;
  e_total: number | null;

  active_power_avg: number | null;
  active_power_min: number | null;
  active_power_max: number | null;

  reactive_power_avg: number | null;
  reactive_power_min: number | null;
  reactive_power_max: number | null;

  irradiance_avg: number | null;
  irradiance_min: number | null;
  irradiance_max: number | null;

  module_temperature_avg: number | null;
  module_temperature_min: number | null;
  module_temperature_max: number | null;

  ambient_temperature_avg: number | null;
  ambient_temperature_min: number | null;
  ambient_temperature_max: number | null;

  pressure_avg: number | null;
  pressure_min: number | null;
  pressure_max: number | null;

  humidity_avg: number | null;
  humidity_min: number | null;
  humidity_max: number | null;
}

// Tipos más amigables para el dashboard, mapeados desde los datos crudos

export interface DashboardHeader {
  reportTitle: string;
  plantName: string;
  date: string;
  installedCapacityKw: number;
  responsible: string;
}

export interface DashboardKpis {
  generatedEnergyKwh: number;
  expectedEnergyKwh: number;
  deviationPct: number;
  performanceRatioPct: number;
  availabilityPct: number;
  capacityFactorPct: number;
}

export type KpiVariant = "primary" | "success" | "factor";

export interface MetricKpiItem {
  type: "metric";
  title: string;
  value: string;
  unit?: string;
  variant?: KpiVariant;
}

export interface IconKpiItem {
  type: "icon";
  imageSrc: string;
  alt: string;
  variant?: KpiVariant;
}

export type KpiItem = MetricKpiItem | IconKpiItem;

export interface GenerationSeriesItem {
  hour: string;
  generationKw: number;
  irradianceWm2: number;
}

export interface EnvironmentalMetrics {
  dailyIrradianceKwhM2: number;
  ambientTemperatureC: number;
  moduleTemperatureC: number;
  windSpeedMs: number;
}

export interface EnergySummary {
  installedCapacityKwp: number;
  peakPowerKw: number;
  peakPowerHour: string;
  exportedEnergyKwh: number;
  powerFactor: number;
}

export interface EnergyDistribution {
  exportedEnergyKwh: number;
  exportedEnergyPct: number;
}

export interface ScadaStatus {
  dataAvailabilityPct: number;
}

export interface SiteConditions {
  panelCleaningStatus: string;
  vegetationStatus: string;
  weatherStatus: string;
}

export interface DashboardData {
  header: DashboardHeader;
  kpis: DashboardKpis;
  generationSeries: GenerationSeriesItem[];
  environmentalMetrics: EnvironmentalMetrics;
  energySummary: EnergySummary;
  energyDistribution: EnergyDistribution;
  scadaStatus: ScadaStatus;
  siteConditions: SiteConditions;
}