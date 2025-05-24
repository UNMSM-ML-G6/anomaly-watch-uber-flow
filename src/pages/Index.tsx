
import { useState } from "react";
import MetricsPanel from "../components/MetricsPanel";
import AnomalyChart from "../components/AnomalyChart";
import AlertsPanel from "../components/AlertsPanel";
import HeatMap from "../components/HeatMap";
import TimelinePanel from "../components/TimelinePanel";
import FilterBar from "../components/FilterBar";
import { Bell, Settings, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const [selectedAnomalyType, setSelectedAnomalyType] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 relative">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20"></div>
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Header */}
      <header className="relative border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">Anomaly Detection</h1>
                  <p className="text-white/60 text-sm">Sistema Inteligente de Detección</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                <Input 
                  placeholder="Buscar anomalías..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50 w-72 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/70 hover:text-white hover:bg-white/10 backdrop-blur-sm">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative p-6 space-y-8">
        {/* Filters */}
        <FilterBar 
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
          selectedAnomalyType={selectedAnomalyType}
          setSelectedAnomalyType={setSelectedAnomalyType}
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-4">
            <MetricsPanel />
          </div>
        </div>

        {/* Charts and Analysis */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AnomalyChart timeRange={selectedTimeRange} />
          </div>
          <div>
            <AlertsPanel />
          </div>
        </div>

        {/* Heat Map and Timeline */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <HeatMap region={selectedRegion} />
          <TimelinePanel />
        </div>
      </main>
    </div>
  );
};

export default Index;
