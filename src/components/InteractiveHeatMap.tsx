
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Layers, Navigation, Menu, Search, User, Filter, MoreHorizontal, Settings } from "lucide-react";
import { useState } from "react";

interface InteractiveHeatMapProps {
  region: string;
  timeRange: string;
  onRegionChange: (value: string) => void;
  onTimeRangeChange: (value: string) => void;
}

const InteractiveHeatMap = ({ region, timeRange, onRegionChange, onTimeRangeChange }: InteractiveHeatMapProps) => {
  const [mapType, setMapType] = useState<"satellite" | "map">("map");
  const [heatmapEnabled, setHeatmapEnabled] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Datos simulados de zonas con diferentes intensidades
  const heatZones = [
    { id: 1, x: 25, y: 30, intensity: 0.9, size: 80, color: "from-red-500 to-yellow-400", rides: 45, anomalies: 8 },
    { id: 2, x: 45, y: 25, intensity: 0.7, size: 60, color: "from-orange-500 to-yellow-400", rides: 32, anomalies: 3 },
    { id: 3, x: 60, y: 40, intensity: 0.8, size: 70, color: "from-red-400 to-orange-400", rides: 38, anomalies: 5 },
    { id: 4, x: 35, y: 55, intensity: 0.6, size: 50, color: "from-yellow-500 to-green-400", rides: 24, anomalies: 1 },
    { id: 5, x: 70, y: 60, intensity: 0.5, size: 45, color: "from-yellow-400 to-green-400", rides: 18, anomalies: 0 },
    { id: 6, x: 15, y: 70, intensity: 0.4, size: 40, color: "from-green-400 to-blue-400", rides: 12, anomalies: 0 },
    { id: 7, x: 80, y: 35, intensity: 0.3, size: 35, color: "from-green-400 to-blue-400", rides: 8, anomalies: 0 },
  ];

  return (
    <div className="relative w-full h-screen bg-white">
      {/* Header tipo Uber/Cabify */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-white shadow-sm border-b border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100 p-2">
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">AnomalyDash</h1>
              <p className="text-sm text-gray-500">Monitoreo en tiempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-gray-700 hover:bg-gray-100"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Filtros expandibles */}
        {showFilters && (
          <div className="mt-4 flex items-center gap-3 pb-2 border-b border-gray-100">
            <Select value={region} onValueChange={onRegionChange}>
              <SelectTrigger className="w-40 h-9 bg-gray-50 border-gray-200">
                <SelectValue placeholder="Región" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las regiones</SelectItem>
                <SelectItem value="mexico">México</SelectItem>
                <SelectItem value="brazil">Brasil</SelectItem>
                <SelectItem value="colombia">Colombia</SelectItem>
              </SelectContent>
            </Select>

            <Select value={timeRange} onValueChange={onTimeRangeChange}>
              <SelectTrigger className="w-32 h-9 bg-gray-50 border-gray-200">
                <SelectValue placeholder="Tiempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1h">1 hora</SelectItem>
                <SelectItem value="24h">24 horas</SelectItem>
                <SelectItem value="7d">7 días</SelectItem>
                <SelectItem value="30d">30 días</SelectItem>
              </SelectContent>
            </Select>

            <Badge variant="secondary" className="text-xs bg-green-50 text-green-700 border-green-200">
              En vivo
            </Badge>
          </div>
        )}
      </div>

      {/* Mapa principal */}
      <div className="relative w-full h-full mt-16 bg-gray-100">
        {/* Fondo del mapa estilo Uber */}
        <div className={`absolute inset-0 ${
          mapType === "satellite" 
            ? "bg-gradient-to-br from-green-800 via-green-700 to-blue-800" 
            : "bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200"
        }`}>
          {/* Calles estilo Uber */}
          {mapType === "map" && (
            <div className="absolute inset-0">
              {/* Calles principales */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white shadow-sm"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-sm"></div>
              {/* Calles secundarias */}
              <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gray-300"></div>
              <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gray-300"></div>
              <div className="absolute top-0 bottom-0 left-1/4 w-0.5 bg-gray-300"></div>
              <div className="absolute top-0 bottom-0 left-3/4 w-0.5 bg-gray-300"></div>
              {/* Bloques de edificios */}
              <div className="absolute top-1/4 left-1/3 w-1/3 h-1/4 bg-gray-200 rounded-sm"></div>
              <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-gray-200 rounded-sm"></div>
              <div className="absolute top-1/4 left-3/4 w-1/6 h-1/3 bg-gray-200 rounded-sm"></div>
            </div>
          )}
        </div>

        {/* Capas de calor con estilo Uber */}
        {heatmapEnabled && heatZones.map((zone) => (
          <div
            key={zone.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ 
              left: `${zone.x}%`, 
              top: `${zone.y}%`,
            }}
          >
            {/* Círculo de calor */}
            <div 
              className={`rounded-full bg-gradient-radial ${zone.color} opacity-60 animate-pulse`}
              style={{ 
                width: `${zone.size}px`,
                height: `${zone.size}px`,
                filter: 'blur(4px)',
              }}
            ></div>
            {/* Pin central estilo Uber */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 bg-white rounded-full shadow-lg border-2 border-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              </div>
            </div>
            {/* Tooltip al hover */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              <div className="text-center">
                <div className="font-semibold">{zone.rides} viajes activos</div>
                {zone.anomalies > 0 && (
                  <div className="text-red-400">{zone.anomalies} anomalías</div>
                )}
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
            </div>
          </div>
        ))}

        {/* Controles del mapa */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <Button
              variant={mapType === "map" ? "default" : "ghost"}
              size="sm"
              onClick={() => setMapType("map")}
              className={`text-xs rounded-none border-0 ${mapType === "map" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-50"}`}
            >
              Mapa
            </Button>
            <Button
              variant={mapType === "satellite" ? "default" : "ghost"}
              size="sm"
              onClick={() => setMapType("satellite")}
              className={`text-xs rounded-none border-0 ${mapType === "satellite" ? "bg-black text-white" : "text-gray-700 hover:bg-gray-50"}`}
            >
              Satélite
            </Button>
          </div>
          <Button
            variant={heatmapEnabled ? "default" : "outline"}
            size="sm"
            onClick={() => setHeatmapEnabled(!heatmapEnabled)}
            className={`bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200 rounded-lg ${heatmapEnabled ? "bg-black text-white" : ""}`}
          >
            <Layers className="h-4 w-4 mr-1" />
            Calor
          </Button>
        </div>

        {/* Botón de ubicación */}
        <div className="absolute bottom-28 right-4 z-20">
          <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200 rounded-full w-12 h-12 p-0">
            <Navigation className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Panel inferior estilo Uber */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
        {/* Handle para arrastrar */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-8 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        <div className="px-4 pb-4">
          {/* Métricas principales */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5,221</div>
              <div className="text-xs text-gray-500">Viajes totales</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">147</div>
              <div className="text-xs text-gray-500">Anomalías</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-xs text-gray-500">Disponibilidad</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2.3s</div>
              <div className="text-xs text-gray-500">Resp. promedio</div>
            </div>
          </div>

          {/* Alertas recientes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Alertas Recientes</h3>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg border border-red-100">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Pico anómalo en Zona Centro</div>
                  <div className="text-xs text-gray-500">hace 2 min • 45 viajes afectados</div>
                </div>
                <Badge variant="destructive" className="text-xs">
                  Alta
                </Badge>
              </div>
              
              <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-100">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">Tiempo de respuesta elevado</div>
                  <div className="text-xs text-gray-500">hace 5 min • Zona Norte</div>
                </div>
                <Badge variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                  Media
                </Badge>
              </div>
            </div>
          </div>

          {/* Leyenda compacta */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
            <div className="flex items-center gap-3 text-xs">
              <span className="text-gray-600 font-medium">Densidad:</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
                <span className="text-gray-500">Baja</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <span className="text-gray-500">Media</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                <span className="text-gray-500">Alta</span>
              </div>
            </div>
            <Badge variant="secondary" className="text-xs bg-green-50 text-green-700">
              Actualizado • 1 min
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeatMap;
