import { Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarInset } from '@/shared/components/ui/sidebar'
import { AppSidebar } from '@/shared/components/layout/AppSidebar'
import { Topbar } from '@/shared/components/layout/Topbar'
import { PageWrapper } from '@/shared/components/layout/PageWrapper'
import { DashboardPage } from '@/pages/DashBoardPage'

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground mt-1">Próximamente.</p>
    </div>
  )
}

export function Router() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Topbar />
        <PageWrapper>
          <Routes>
            <Route path="/"         element={<DashboardPage />} />
            <Route path="/tenants"  element={<PlaceholderPage title="Inquilinos" />} />
            <Route path="/units"    element={<PlaceholderPage title="Unidades" />} />
            <Route path="/leases"   element={<PlaceholderPage title="Contratos" />} />
            <Route path="/payments" element={<PlaceholderPage title="Pagos" />} />
            <Route path="/billing"  element={<PlaceholderPage title="Facturación" />} />
            <Route path="/reports"  element={<PlaceholderPage title="Reportes" />} />
            <Route path="/settings" element={<PlaceholderPage title="Configuración" />} />
          </Routes>
        </PageWrapper>
      </SidebarInset>
    </SidebarProvider>
  )
}