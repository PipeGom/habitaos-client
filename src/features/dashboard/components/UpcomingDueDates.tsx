import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useUpcomingDueDates } from '../hooks/useDashboard'
import { formatCurrency } from '@/shared/utils/formatCurrency'
import { cn } from '@/shared/utils/cn'

function DiasLabel({ days  }: { days : number }) {
  if (days  === 0) return <span className="text-red-500 font-semibold text-xs">Hoy</span>
  if (days  === 1) return <span className="text-amber-500 font-semibold text-xs">1 día</span>
  if (days  <= 2) return <span className="text-amber-500 font-semibold text-xs">{days } días</span>
  return <span className="text-muted-foreground text-xs">{days } días</span>
}

export function UpcomingDueDates() {
  const { data: upcomingDueDates, isLoading } = useUpcomingDueDates()

  return (
    <Card className="flex-1">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-semibold">Próximos vencimientos</CardTitle>
        <button className="text-xs text-muted-foreground border border-border rounded px-2 py-1 hover:bg-accent transition-colors">
          Ver todos
        </button>
      </CardHeader>
      <CardContent className="pt-0">
        {isLoading ? (
          <div className="flex flex-col gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full" />
            ))}
          </div>
        ) : (
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                {['Unidad', 'Inquilino', 'Vence el', 'Valor', 'Días'].map(h => (
                  <th key={h} className="text-left text-muted-foreground font-medium pb-2 pr-3 last:pr-0">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {upcomingDueDates?.map((v, i) => (
                <tr
                  key={i}
                  className={cn(
                    'border-b border-border last:border-0',
                    'hover:bg-accent/50 transition-colors'
                  )}
                >
                  <td className="py-2.5 pr-3 font-medium text-foreground">{v.unit}</td>
                  <td className="py-2.5 pr-3 text-muted-foreground">{v.tenant}</td>
                  <td className="py-2.5 pr-3 text-muted-foreground">{v.dueDate}</td>
                  <td className="py-2.5 pr-3 font-medium text-foreground">{formatCurrency(v.amount)}</td>
                  <td className="py-2.5"><DiasLabel days={v.remainingDays} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </CardContent>
    </Card>
  )
}