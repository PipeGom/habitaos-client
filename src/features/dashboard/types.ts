export interface DashboardMetrics {
  monthlyRevenue: number
  revenueVariation: number
  outstandingBalance: number
  balanceVariation: number
  occupiedUnits: number
  totalUnits: number
  availableUnits: number
  collectionRate: number
}

export interface MonthlyRevenue {
  month: string
  value: number
}

export interface UnitStatus {
  occupied: number
  available: number
  maintenance: number
  total: number
}

export interface ReceivablesAging {
  range: string
  value: number
  color: string
}

export interface UpcomingDueDate {
  unit: string
  tenant: string
  dueDate: string
  amount: number
  remainingDays: number
}

export interface RecentActivityItem {
  id: string
  type: 'payment' | 'contract' | 'price-change' | 'tenant'
  title: string
  description: string
  date: string
}

export interface PaymentMethod {
  name: string
  amount: number
  percentage: number
  color: string
}