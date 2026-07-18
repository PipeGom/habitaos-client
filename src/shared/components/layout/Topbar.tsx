import { Bell, CalendarDays, ChevronDown } from 'lucide-react'
import { SidebarTrigger } from '@/shared/components/ui/sidebar'
import { Button } from '@/shared/components/ui/button'

function formatFecha(): string {
  return new Intl.DateTimeFormat('es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())
}

export function Topbar() {
  return (
    <header className="h-[56px] border-b border-border bg-background flex items-center justify-between px-6 shrink-0">
      <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground font-normal">
          <CalendarDays size={13} />
          {formatFecha()}
          <ChevronDown size={12} />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground relative">
          <Bell size={16} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
        </Button>
      </div>
    </header>
  )
}