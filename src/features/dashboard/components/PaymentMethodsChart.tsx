import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Skeleton } from '@/shared/components/ui/skeleton'
import { usePaymentMethods } from '../hooks/useDashboard'
import { formatCurrency } from '@/shared/utils/formatCurrency'

export function PaymentMethodsChart() {
  const { data: paymentMethods, isLoading } = usePaymentMethods()

  const total = paymentMethods?.reduce((acc, m) => acc + m.amount, 0) ?? 0

  return (
    <Card className="w-full lg:w-[300px] shrink-0">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-semibold">
          Métodos de pago <span className="font-normal text-muted-foreground">(este mes)</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Skeleton className="w-40 h-40 rounded-full" />
            <div className="w-full flex flex-col gap-2">
              {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-4 w-full" />)}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-44 h-44">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={paymentMethods}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    dataKey="amount"
                    nameKey="name"
                    strokeWidth={2}
                    stroke="#fff"
                  >
                    {paymentMethods?.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [formatCurrency(Number(value ?? 0)), '']}
                    contentStyle={{ fontSize: 12, borderRadius: 8 }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-base font-bold text-foreground">{formatCurrency(total)}</span>
                <span className="text-xs text-muted-foreground">Total</span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              {paymentMethods?.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium text-foreground">
                    {formatCurrency(item.amount)} ({item.percentage}%)
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