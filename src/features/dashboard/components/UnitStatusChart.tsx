import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { useUnitStatus } from '../hooks/useDashboard'

const COLORES = ['#16a34a', '#a855f7', '#d1d5db']

export function UnitStatusChart() {
  const { data, isLoading } = useUnitStatus()

  const chartData = data ? [
    { name: 'Ocupadas',      value: data.occupied,     color: COLORES[0] },
    { name: 'Disponibles',   value: data.available,  color: COLORES[1] },
    { name: 'Mantenimiento', value: data.maintenance, color: COLORES[2] },
  ] : []

  return (
    <Card className="w-full lg:w-[300px] shrink-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">Estado de las unidades</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="w-40 h-40 rounded-full" />
            <div className="w-full flex flex-col gap-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-44 h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="value"
                    strokeWidth={2}
                    stroke="#fff"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [value ?? 0, '']}
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-foreground">{data?.total}</span>
                <span className="text-xs text-muted-foreground">Total</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-foreground">
                    {item.value} ({data ? ((item.value / data.total) * 100).toFixed(1) : 0}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}