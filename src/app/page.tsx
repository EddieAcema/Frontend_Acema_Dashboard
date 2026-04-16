import { getValleduparMockData } from "@/services/dashboard.service";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default async function Home() {
  const data = await getValleduparMockData();

  return (
    <DashboardShell>
      <DashboardHeader header={data.header} />
      <pre className="text-xs bg-white p-4 rounded overflow-auto mt-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </DashboardShell>
  );
}