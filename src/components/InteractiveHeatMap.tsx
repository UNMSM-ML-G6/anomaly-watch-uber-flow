
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Layers, Navigation, Menu, Search, User } from "lucide-react";
import { useState } from "react";

interface InteractiveHeatMapProps {
  region: string;
}

const InteractiveHeatMap = ({ region }: InteractiveHeatMapProps) => {
  const [mapType, setMapType] = useState<"satellite" | "map">("map");
  const [heatmapEnabled, setHeatmapEnabled] = useState(true);

  // Datos simulados de zonas con diferentes intensidades
  const heatZones = [
    { id: 1, x: 25, y: 30, intensity: 0.9, size: 80, color: "from-red-500 to-yellow-400", rides: 45 },
    { id: 2, x: 45, y: 25, intensity: 0.7, size: 60, color: "from-orange-500 to-yellow-400", rides: 32 },
    { id: 3, x: 60, y: 40, intensity: 0.8, size: 70, color: "from-red-400 to-orange-400", rides: 38 },
    { id: 4, x: 35, y: 55, intensity: 0.6, size: 50, color: "from-yellow-500 to-green-400", rides: 24 },
    { id: 5, x: 70, y: 60, intensity: 0.5, size: 45, color: "from-yellow-400 to-green-400", rides: 18 },
    { id: 6, x: 15, y: 70, intensity: 0.4, size: 40, color: "from-green-400 to-blue-400", rides: 12 },
    { id: 7, x: 80, y: 35, intensity: 0.3, size: 35, color: "from-green-400 to-blue-400", rides: 8 },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Header tipo Uber */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200/50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">Pickups en tiempo real</h1>
              <p className="text-sm text-gray-500">Nueva York • {region === "all" ? "Todas las zonas" : region}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mapa principal */}
      <div className="relative w-full h-96 bg-gray-100 mt-16">
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
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
              {zone.rides} viajes activos
            </div>
          </div>
        ))}

        {/* Botón de ubicación actual */}
        <div className="absolute bottom-4 right-4">
          <Button size="sm" className="bg-white text-gray-700 hover:bg-gray-50 shadow-lg border border-gray-200 rounded-full w-10 h-10 p-0">
            <Navigation className="h-4 w-4" />
          </Button>
        </div>

        {/* Controles del mapa en esquina superior derecha */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
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
      </div>

      {/* Panel inferior estilo Uber */}
      <div className="bg-white border-t border-gray-200 p-4">
        {/* Métricas principales */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">5,221</div>
            <div className="text-sm text-gray-500">Viajes totales</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">20</div>
            <div className="text-sm text-gray-500">Anomalías</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">98.5%</div>
            <div className="text-sm text-gray-500">Disponibilidad</div>
          </div>
        </div>

        {/* Leyenda */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-600">Densidad de viajes:</span>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
              <span className="text-gray-500 text-xs">Baja</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              <span className="text-gray-500 text-xs">Media</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-gray-500 text-xs">Alta</span>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
            Actualizado hace 1 min
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default InteractiveHeatMap;
