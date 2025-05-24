
import { Search, Bell, User, Menu, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useSidebar } from "./SidebarProvider";

interface TopBarProps {
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedTimeRange: string;
  setSelectedTimeRange: (value: string) => void;
  selectedAnomalyType: string;
  setSelectedAnomalyType: (value: string) => void;
}

const TopBar = ({
  selectedRegion,
  setSelectedRegion,
  selectedTimeRange,
  setSelectedTimeRange,
  selectedAnomalyType,
  setSelectedAnomalyType,
}: TopBarProps) => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Panel de Anomalías</h1>
            <p className="text-sm text-gray-500">Monitoreo en tiempo real</p>
          </div>
        </div>

        {/* Center - Filters */}
        <div className="hidden md:flex items-center space-x-3">
          <Filter className="h-4 w-4 text-gray-400" />
          
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Región" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las regiones</SelectItem>
              <SelectItem value="mexico">México</SelectItem>
              <SelectItem value="brazil">Brasil</SelectItem>
              <SelectItem value="colombia">Colombia</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Tiempo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">1 hora</SelectItem>
              <SelectItem value="24h">24 horas</SelectItem>
              <SelectItem value="7d">7 días</SelectItem>
              <SelectItem value="30d">30 días</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              placeholder="Buscar anomalías..." 
              className="pl-10 w-64"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
