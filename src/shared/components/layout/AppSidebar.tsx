import {
  Sidebar, SidebarContent, SidebarFooter,
  SidebarGroup, SidebarGroupLabel, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from '@/shared/components/ui/sidebar'
import { Home, Users, Building2, FileText, CreditCard, BarChart3, Settings } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Inicio', icon: Home, to: '/' },
]

const manageItems = [
  { label: 'Unidades',    icon: Building2,  to: '/units' },
  { label: 'Contratos',   icon: FileText,   to: '/leases' },
  { label: 'Inquilinos',  icon: Users,      to: '/tenants' },
  { label: 'Pagos',       icon: CreditCard, to: '/payments' },
  { label: 'Facturación', icon: FileText,   to: '/billing' },
  { label: 'Reportes',    icon: BarChart3,  to: '/reports' },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shrink-0">
            <Home size={16} className="text-white" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight">HabitaOS</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.to} end>
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Gestión</SidebarGroupLabel>
          <SidebarMenu>
            {manageItems.map((item) => (
              <SidebarMenuItem key={item.to}>
                <SidebarMenuButton asChild>
                  <NavLink to={item.to}>
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink to="/settings">
                <Settings size={16} />
                <span>Configuración</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <div className="flex items-center gap-2 px-2 py-3 border-t border-border">
          <div className="w-8 h-8 rounded-full bg-muted overflow-hidden shrink-0">
            <img src="https://i.pravatar.cc/32?img=8" alt="Juan Pérez" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium truncate">Juan Perez</p>
            <p className="text-[10px] text-muted-foreground">Propietario</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}