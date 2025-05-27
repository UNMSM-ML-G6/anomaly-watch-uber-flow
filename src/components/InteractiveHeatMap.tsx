
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Layers, Maximize2, RotateCcw, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface InteractiveHeatMapProps {
  region: string;
}

const InteractiveHeatMap = ({ region }: InteractiveHeatMapProps) => {
  const [mapType, setMapType] = useState<"satellite" | "map">("satellite");
  const [heatmapEnabled, setHeatmapEnabled] = useState(true);

  // Datos simulados de zonas con diferentes intensidades
  const heatZones = [
    { id: 1, x: 25, y: 30, intensity: 0.9, size: 80, color: "from-red-500 to-yellow-400" },
    { id: 2, x: 45, y: 25, intensity: 0.7, size: 60, color: "from-orange-500 to-yellow-400" },
    { id: 3, x: 60, y: 40, intensity: 0.8, size: 70, color: "from-red-400 to-orange-400" },
    { id: 4, x: 35, y: 55, intensity: 0.6, size: 50, color: "from-yellow-500 to-green-400" },
    { id: 5, x: 70, y: 60, intensity: 0.5, size: 45, color: "from-yellow-400 to-green-400" },
    { id: 6, x: 15, y: 70, intensity: 0.4, size: 40, color: "from-green-400 to-blue-400" },
    { id: 7, x: 80, y: 35, intensity: 0.3, size: 35, color: "from-green-400 to-blue-400" },
  ];

  const metrics = [
    { label: "Total Rides", value: "5221", color: "text-white" },
    { label: "Anomaly", value: "20", color: "text-red-400" },
    { label: "Alerts", value: "52", color: "text-yellow-400" },
    { label: "Downtime", value: "0.02%", color: "text-green-400" },
  ];

  return (
    <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold text-white flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-400" />
            New York Uber Pickups Heatmap
          </CardTitle>
          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Controles del mapa */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant={mapType === "map" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapType("map")}
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              Mapa
            </Button>
            <Button
              variant={mapType === "satellite" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapType("satellite")}
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              Satélite
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={heatmapEnabled ? "default" : "outline"}
              size="sm"
              onClick={() => setHeatmapEnabled(!heatmapEnabled)}
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              <Layers className="h-4 w-4 mr-1" />
              Toggle Heatmap
            </Button>
            <div className="flex gap-1">
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 p-2">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 p-2">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700/50 p-2">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mapa principal */}
        <div className="relative w-full h-80 rounded-lg overflow-hidden border border-slate-600/50">
          {/* Fondo del mapa */}
          <div className={`absolute inset-0 ${
            mapType === "satellite" 
              ? "bg-gradient-to-br from-green-800 via-green-700 to-blue-800" 
              : "bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400"
          }`}>
            {/* Simulación de calles para vista de mapa */}
            {mapType === "map" && (
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/30"></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/30"></div>
                <div className="absolute top-1/4 left-0 right-0 h-px bg-white/20"></div>
                <div className="absolute top-3/4 left-0 right-0 h-px bg-white/20"></div>
                <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/20"></div>
                <div className="absolute top-0 bottom-0 left-3/4 w-px bg-white/20"></div>
              </div>
            )}
            
            {/* Simulación de Manhattan para vista satélite */}
            {mapType === "satellite" && (
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-1/3 h-1/2 bg-gray-600/40 rounded-sm"></div>
                <div className="absolute top-1/3 left-1/4 w-1/2 h-1/3 bg-gray-700/30 rounded-sm"></div>
              </div>
            )}
          </div>

          {/* Capas de calor */}
          {heatmapEnabled && heatZones.map((zone) => (
            <div
              key={zone.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{ 
                left: `${zone.x}%`, 
                top: `${zone.y}%`,
                width: `${zone.size}px`,
                height: `${zone.size}px`,
              }}
            >
              <div 
                className={`w-full h-full rounded-full bg-gradient-radial ${zone.color} animate-pulse`}
                style={{ 
                  opacity: zone.intensity * 0.7,
                  filter: 'blur(8px)',
                }}
              ></div>
            </div>
          ))}

          {/* Controles de zoom en el mapa */}
          <div className="absolute top-4 right-4 flex flex-col gap-1">
            <Button variant="outline" size="sm" className="bg-white/90 border-gray-300 text-gray-700 hover:bg-white p-1 h-8 w-8">
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="bg-white/90 border-gray-300 text-gray-700 hover:bg-white p-1 h-8 w-8">
              <ZoomOut className="h-4 w-4" />
            </Button>
          </div>

          {/* Indicador de escala */}
          <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
            5 km
          </div>
        </div>

        {/* Métricas */}
        <div className="grid grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-slate-700/30 rounded-lg p-3 text-center border border-slate-600/30">
              <div className="text-xs text-slate-400 mb-1">{metric.label}</div>
              <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Leyenda del mapa de calor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-300">Densidad:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-blue-400 to-green-400"></div>
              <span className="text-slate-400">Baja</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              <span className="text-slate-400">Media</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-slate-400">Alta</span>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
            Actualizado: hace 1 min
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveHeatMap;
