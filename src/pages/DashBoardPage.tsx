import {
  MetricCards,
  RevenueChart,
  UnitStatusChart,
  AgingReceivablesChart,
  UpcomingDueDates,
  RecentActivity,
  PaymentMethodsChart,
} from '@/features/dashboard'

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Buenos días'
  if (hour < 18) return 'Buenas tardes'
  return 'Buenas noches'
}

export function DashboardPage() {
  return (
    <div className="p-6 flex flex-col gap-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-xl font-semibold text-foreground">
          ¡{getGreeting()}, Juan! 👋
        </h1>
        <p className="text-sm text-muted-foreground mt-0.5">
          Aquí tienes el resumen de tu propiedad hoy.
        </p>
      </div>

      <MetricCards />

      <div className="flex flex-col lg:flex-row gap-4">
        <RevenueChart />
        <UnitStatusChart />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <AgingReceivablesChart />
        <UpcomingDueDates />
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <RecentActivity />
        <PaymentMethodsChart />
      </div>
    </div>
  )
}