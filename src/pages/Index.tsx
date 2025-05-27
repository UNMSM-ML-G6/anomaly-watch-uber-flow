
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DashboardMetrics from "../components/DashboardMetrics";
import InteractiveHeatMap from "../components/InteractiveHeatMap";
import AnomalyAnalytics from "../components/AnomalyAnalytics";
import AlertsList from "../components/AlertsList";
import { SidebarProvider } from "../components/SidebarProvider";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const [selectedAnomalyType, setSelectedAnomalyType] = useState("all");

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex w-full">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          <TopBar 
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
            selectedTimeRange={selectedTimeRange}
            setSelectedTimeRange={setSelectedTimeRange}
            selectedAnomalyType={selectedAnomalyType}
            setSelectedAnomalyType={setSelectedAnomalyType}
          />
          
          <main className="flex-1 p-6 space-y-6 overflow-auto">
            {/* Key Metrics */}
            <DashboardMetrics />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Map Section */}
              <div className="xl:col-span-2">
                <InteractiveHeatMap region={selectedRegion} />
              </div>
              
              {/* Alerts Panel */}
              <div>
                <AlertsList />
              </div>
            </div>
            
            {/* Analytics Section */}
            <AnomalyAnalytics timeRange={selectedTimeRange} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
