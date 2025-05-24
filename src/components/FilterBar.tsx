
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Filter, RefreshCw } from "lucide-react";

interface FilterBarProps {
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedTimeRange: string;
  setSelectedTimeRange: (value: string) => void;
  selectedAnomalyType: string;
  setSelectedAnomalyType: (value: string) => void;
}

const FilterBar = ({
  selectedRegion,
  setSelectedRegion,
  selectedTimeRange,
  setSelectedTimeRange,
  selectedAnomalyType,
  setSelectedAnomalyType,
}: FilterBarProps) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-slate-400" />
        <span className="text-slate-300 font-medium">Filtros:</span>
      </div>
      
      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
        <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white">
          <SelectValue placeholder="Región" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 border-slate-600">
          <SelectItem value="all" className="text-white hover:bg-slate-600">Todas las regiones</SelectItem>
          <SelectItem value="mexico" className="text-white hover:bg-slate-600">México</SelectItem>
          <SelectItem value="brazil" className="text-white hover:bg-slate-600">Brasil</SelectItem>
          <SelectItem value="colombia" className="text-white hover:bg-slate-600">Colombia</SelectItem>
          <SelectItem value="peru" className="text-white hover:bg-slate-600">Perú</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
        <SelectTrigger className="w-32 bg-slate-700 border-slate-600 text-white">
          <SelectValue placeholder="Tiempo" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 border-slate-600">
          <SelectItem value="1h" className="text-white hover:bg-slate-600">Última hora</SelectItem>
          <SelectItem value="24h" className="text-white hover:bg-slate-600">24 horas</SelectItem>
          <SelectItem value="7d" className="text-white hover:bg-slate-600">7 días</SelectItem>
          <SelectItem value="30d" className="text-white hover:bg-slate-600">30 días</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedAnomalyType} onValueChange={setSelectedAnomalyType}>
        <SelectTrigger className="w-48 bg-slate-700 border-slate-600 text-white">
          <SelectValue placeholder="Tipo de anomalía" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 border-slate-600">
          <SelectItem value="all" className="text-white hover:bg-slate-600">Todos los tipos</SelectItem>
          <SelectItem value="cancellation" className="text-white hover:bg-slate-600">Cancelaciones</SelectItem>
          <SelectItem value="wait_time" className="text-white hover:bg-slate-600">Tiempo de espera</SelectItem>
          <SelectItem value="route" className="text-white hover:bg-slate-600">Rutas inusuales</SelectItem>
          <SelectItem value="fraud" className="text-white hover:bg-slate-600">Fraude potencial</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" size="sm" className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
        <RefreshCw className="h-4 w-4 mr-2" />
        Actualizar
      </Button>
    </div>
  );
};

export default FilterBar;
