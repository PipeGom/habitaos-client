import { DollarSign, FileText, TrendingUp, UserPlus } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useRecentActivity } from '../hooks/useDashboard'
import type { RecentActivityItem as TActivity } from '../types'

const iconConfig: Record<TActivity['type'], { icon: React.ElementType; bg: string; color: string }> = {
  payment:      { icon: DollarSign, bg: 'bg-emerald-100', color: 'text-emerald-600' },
  contract:  { icon: FileText,   bg: 'bg-blue-100',    color: 'text-blue-600' },
  "price-change":    { icon: TrendingUp, bg: 'bg-violet-100',  color: 'text-violet-600' },
  tenant: { icon: UserPlus,   bg: 'bg-amber-100',   color: 'text-amber-600' },
}

export function RecentActivity() {
  const { data: recentActivities, isLoading } = useRecentActivity()

  return (
    <Card className="flex-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Actividad reciente</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="w-9 h-9 rounded-full shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-3 w-3/4 mb-1.5" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
                <Skeleton className="h-3 w-24 shrink-0" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col divide-y divide-border">
            {recentActivities?.map((item) => {
              const config = iconConfig[item.type]
              const Icon = config.icon
              return (
                <div key={item.id} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <div className={`${config.bg} ${config.color} rounded-full p-2 shrink-0`}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground leading-snug">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 mt-0.5">{item.date}</span>
                </div>
              )
            })}
          </div>
        )}
      </CardContent>
    </Card>
  )
}