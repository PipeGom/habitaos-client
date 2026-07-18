import { DollarSign, CreditCard, Home, Building2, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useDashboardMetrics } from '../hooks/useDashboard'
import { formatCurrency } from '@/shared/utils/formatCurrency'

interface MetricCardProps {
  icon: React.ReactNode
  iconBg: string
  label: string
  value: string
  meta: string
  metaColor?: string
}

function MetricCard({ icon, iconBg, label, value, meta, metaColor = 'text-muted-foreground' }: MetricCardProps) {
  return (
    <Card>
      <CardContent className="p-4 flex items-start gap-3">
        <div className={`${iconBg} rounded-xl p-3 shrink-0`}>
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
          <p className="text-xl font-semibold text-foreground truncate">{value}</p>
          <p className={`text-xs mt-0.5 ${metaColor}`}>{meta}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function MetricCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-4 flex items-start gap-3">
        <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-3 w-24 mb-2" />
          <Skeleton className="h-6 w-32 mb-1" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardContent>
    </Card>
  )
}

export function MetricCards() {
  const { data: metrics, isLoading } = useDashboardMetrics()

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {Array.from({ length: 5 }).map((_, i) => <MetricCardSkeleton key={i} />)}
      </div>
    )
  }

  if (!metrics) return null

  const hasRevenueGrowth = metrics.revenueVariation > 0
  const hasOutstandingBalanceGrowth = metrics.balanceVariation > 0

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      <MetricCard
        icon={<DollarSign size={20} className="text-white" />}
        iconBg="bg-emerald-500"
        label="Ingresos del mes"
        value={formatCurrency(metrics.monthlyRevenue)}
        meta={`${hasRevenueGrowth ? '↑' : '↓'} ${Math.abs(metrics.revenueVariation)}% vs mes anterior`}
        metaColor={hasOutstandingBalanceGrowth ? 'text-emerald-600' : 'text-red-500'}
      />
      <MetricCard
        icon={<CreditCard size={20} className="text-white" />}
        iconBg="bg-amber-500"
        label="Cartera pendiente"
        value={formatCurrency(metrics.outstandingBalance)}
        meta={`${hasOutstandingBalanceGrowth  ? '↑' : '↓'} ${Math.abs(metrics.balanceVariation)}% vs mes anterior`}
        metaColor={hasOutstandingBalanceGrowth  ? 'text-red-500' : 'text-emerald-600'}
      />
      <MetricCard
        icon={<Home size={20} className="text-white" />}
        iconBg="bg-blue-500"
        label="Unidades ocupadas"
        value={String(metrics.occupiedUnits)}
        meta={`${((metrics.occupiedUnits  / metrics.totalUnits) * 100).toFixed(1)}% del total`}
      />
      <MetricCard
        icon={<Building2 size={20} className="text-white" />}
        iconBg="bg-violet-500"
        label="Unidades disponibles"
        value={String(metrics.availableUnits)}
        meta={`${((metrics.availableUnits  / metrics.totalUnits) * 100).toFixed(1)}% del total`}
      />
      <MetricCard
        icon={<TrendingUp size={20} className="text-white" />}
        iconBg="bg-emerald-500"
        label="Recaudo del mes"
        value={`${metrics.collectionRate}%`}
        meta={metrics.collectionRate  >= 90 ? 'Muy bien 👏' : 'Por mejorar'}
        metaColor={metrics.collectionRate  >= 90 ? 'text-emerald-600' : 'text-amber-500'}
      />
    </div>
  )
}