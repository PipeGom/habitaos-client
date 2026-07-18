import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useReceivablesAging } from '../hooks/useDashboard'
import { formatCurrency } from '@/shared/utils/formatCurrency'

export function AgingReceivablesChart() {
  const { data: receivablesAging, isLoading } = useReceivablesAging()

  const maxValor = receivablesAging ? Math.max(...receivablesAging.map(c => c.value)) : 1

  return (
    <Card className="flex-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">
          Estado de la cartera <span className="font-normal text-muted-foreground">(por antigüedad)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="h-3 w-28" />
                <Skeleton className="h-3 flex-1" />
                <Skeleton className="h-3 w-20" />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {receivablesAging?.map((item) => (
              <div key={item.range} className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground w-36 shrink-0">{item.range}</span>
                <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${(item.value / maxValor) * 100}%`,
                      background: item.color,
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-foreground w-24 text-right shrink-0">
                  {formatCurrency(item.value)}
                </span>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}