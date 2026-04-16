interface DashboardShellProps {
    children: React.ReactNode;
}

export function DashboardShell({children}: DashboardShellProps){
    return (
        <div className="min-h-screen bg-(--color-bg-page) py-6 px-4">
            <div className="mx-auto w-full max-w-(--dashboard-max-width)">
                {children}
            </div>
        </div>
    );
}