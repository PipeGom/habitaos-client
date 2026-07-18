import { useQuery } from '@tanstack/react-query'
import type {
  DashboardMetrics,
  MonthlyRevenue,
  UnitStatus,
  ReceivablesAging,
  UpcomingDueDate,
  RecentActivityItem,
  PaymentMethod
} from '../types'

const mockMetrics: DashboardMetrics = {
  monthlyRevenue: 14500000,
  revenueVariation: 12.5,
  outstandingBalance: 2800000,
  balanceVariation: -4.3,
  occupiedUnits: 67,
  totalUnits: 70,
  availableUnits: 3,
  collectionRate: 92,
}

const mockMonthlyRevenue: MonthlyRevenue[] = [
  { month: 'Ene', value: 8200000 },
  { month: 'Feb', value: 9100000 },
  { month: 'Mar', value: 10500000 },
  { month: 'Abr', value: 12900000 },
  { month: 'May', value: 14500000 },
  { month: 'Jun', value: 13800000 },
  { month: 'Jul', value: 12400000 },
  { month: 'Ago', value: 13100000 },
  { month: 'Sep', value: 12800000 },
  { month: 'Oct', value: 13500000 },
  { month: 'Nov', value: 14100000 },
  { month: 'Dic', value: 13200000 },
]

const mockUnitStatus: UnitStatus = {
  occupied: 67,
  available: 3,
  maintenance: 0,
  total: 70,
}

const mockReceivablesAging: ReceivablesAging[] = [
  { range: 'Corriente (0 días)', value: 1650000, color: '#16a34a' },
  { range: '1 - 30 días', value: 650000, color: '#eab308' },
  { range: '31 - 60 días', value: 350000, color: '#f97316' },
  { range: '60 - 90 días', value: 100000, color: '#ef4444' },
  { range: '90+ días', value: 50000, color: '#991b1b' },
]

const mockUpcomingDueDates: UpcomingDueDate[] = [
  { unit: 'A101', tenant: 'Juan David Gómez', dueDate: '10/05/2025', amount: 900000, remainingDays: 0 },
  { unit: 'B204', tenant: 'María Fernanda Ruiz', dueDate: '11/05/2025', amount: 1000000, remainingDays: 1 },
  { unit: 'C302', tenant: 'Andrés Felipe López', dueDate: '12/05/2025', amount: 850000, remainingDays: 2 },
  { unit: 'A303', tenant: 'Laura Martínez', dueDate: '13/05/2025', amount: 900000, remainingDays: 3 },
  { unit: 'B103', tenant: 'Carlos Mario Díaz', dueDate: '15/05/2025', amount: 750000, remainingDays: 5 },
]

const mockRecentActivity: RecentActivityItem[] = [
  {
    id: '1',
    type: 'payment',
    title: 'Pago recibido de Juan David Gómez (A101)',
    description: 'Por valor de $900.000 vía Transferencia Bancaria',
    date: 'Hoy, 10:15 a. m.',
  },
  {
    id: '2',
    type: 'contract',
    title: 'Nuevo contrato creado para Laura Martínez (A303)',
    description: 'Contrato #CT-2025-078',
    date: 'Ayer, 4:32 p. m.',
  },
  {
    id: '3',
    type: 'price-change',
    title: 'Cambio de precio en unidad B102',
    description: 'Nuevo precio: $1.100.000 (desde 01/06/2025)',
    date: 'Ayer, 11:08 a. m.',
  },
  {
    id: '4',
    type: 'tenant',
    title: 'Nuevo inquilino registrado: Pedro Vargas',
    description: 'Para la unidad C201',
    date: '08/05/2025, 3:21 p. m.',
  },
]

const mockPaymentMethods: PaymentMethod[] = [
  { name: 'Transferencia', amount: 7250000, percentage: 50, color: '#16a34a' },
  { name: 'Nequi', amount: 4350000, percentage: 30, color: '#6366f1' },
  { name: 'Efectivo', amount: 1740000, percentage: 12, color: '#a855f7' },
  { name: 'Otros', amount: 1160000, percentage: 8, color: '#d1d5db' },
]

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export function useDashboardMetrics() {
  return useQuery({
    queryKey: ['dashboard', 'metrics'],
    queryFn: async () => {
      await delay(300)
      return mockMetrics
    },
  })
}

export function useMonthlyRevenue() {
  return useQuery({
    queryKey: ['dashboard', 'monthly-revenue'],
    queryFn: async () => {
      await delay(300)
      return mockMonthlyRevenue
    },
  })
}

export function useUnitStatus() {
  return useQuery({
    queryKey: ['dashboard', 'unit-status'],
    queryFn: async () => {
      await delay(300)
      return mockUnitStatus
    },
  })
}

export function useReceivablesAging() {
  return useQuery({
    queryKey: ['dashboard', 'receivables-aging'],
    queryFn: async () => {
      await delay(300)
      return mockReceivablesAging
    },
  })
}

export function useUpcomingDueDates() {
  return useQuery({
    queryKey: ['dashboard', 'upcoming-due-dates'],
    queryFn: async () => {
      await delay(300)
      return mockUpcomingDueDates
    },
  })
}

export function useRecentActivity() {
  return useQuery({
    queryKey: ['dashboard', 'recent-activity'],
    queryFn: async () => {
      await delay(300)
      return mockRecentActivity
    },
  })
}

export function usePaymentMethods() {
  return useQuery({
    queryKey: ['dashboard', 'payment-methods'],
    queryFn: async () => {
      await delay(300)
      return mockPaymentMethods
    },
  })
}