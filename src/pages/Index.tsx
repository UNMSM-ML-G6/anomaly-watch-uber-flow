
import { useState } from "react";
import InteractiveHeatMap from "../components/InteractiveHeatMap";
import { SidebarProvider } from "../components/SidebarProvider";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gray-50 flex w-full">
        {/* Main Content - Full Screen Map */}
        <div className="flex-1 flex flex-col">
          {/* Main Map Section - Takes full screen */}
          <div className="flex-1 relative">
            <InteractiveHeatMap 
              region={selectedRegion}
              timeRange={selectedTimeRange}
              onRegionChange={setSelectedRegion}
              onTimeRangeChange={setSelectedTimeRange}
            />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
