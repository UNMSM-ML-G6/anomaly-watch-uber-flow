
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
    <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden text-white hover:bg-slate-700/50"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div>
            <h1 className="text-xl font-semibold text-white">Panel de Anomalías</h1>
            <p className="text-sm text-slate-300">Monitoreo en tiempo real</p>
          </div>
        </div>

        {/* Center - Filters */}
        <div className="hidden md:flex items-center space-x-3">
          <Filter className="h-4 w-4 text-slate-400" />
          
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
              <SelectValue placeholder="Región" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              <SelectItem value="all" className="text-white hover:bg-slate-700">Todas las regiones</SelectItem>
              <SelectItem value="mexico" className="text-white hover:bg-slate-700">México</SelectItem>
              <SelectItem value="brazil" className="text-white hover:bg-slate-700">Brasil</SelectItem>
              <SelectItem value="colombia" className="text-white hover:bg-slate-700">Colombia</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white backdrop-blur-sm">
              <SelectValue placeholder="Tiempo" />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              <SelectItem value="1h" className="text-white hover:bg-slate-700">1 hora</SelectItem>
              <SelectItem value="24h" className="text-white hover:bg-slate-700">24 horas</SelectItem>
              <SelectItem value="7d" className="text-white hover:bg-slate-700">7 días</SelectItem>
              <SelectItem value="30d" className="text-white hover:bg-slate-700">30 días</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input 
              placeholder="Buscar anomalías..." 
              className="pl-10 w-64 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 backdrop-blur-sm"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative text-white hover:bg-slate-700/50">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="text-white hover:bg-slate-700/50">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
