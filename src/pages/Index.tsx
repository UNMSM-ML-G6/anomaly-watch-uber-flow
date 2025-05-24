
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <h1 className="text-xl font-bold text-white">Anomaly Detection</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input 
                  placeholder="Buscar anomalías..." 
                  className="pl-10 bg-slate-800 border-slate-600 text-white placeholder-slate-400 w-64"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-4">
            <MetricsPanel />
          </div>
        </div>

        {/* Charts and Analysis */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
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
