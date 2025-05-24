
import { BarChart3, Map, AlertTriangle, Settings, Home, TrendingUp, Filter, Users } from "lucide-react";
import { useSidebar } from "./SidebarProvider";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", icon: Home, href: "#", current: true },
  { name: "Anomalías", icon: AlertTriangle, href: "#", current: false },
  { name: "Mapa", icon: Map, href: "#", current: false },
  { name: "Analytics", icon: BarChart3, href: "#", current: false },
  { name: "Tendencias", icon: TrendingUp, href: "#", current: false },
  { name: "Conductores", icon: Users, href: "#", current: false },
];

const Sidebar = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div className={cn(
      "bg-slate-800/60 backdrop-blur-xl border-r border-slate-700/50 flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-semibold text-white">AnomalyDash</h1>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navigation.map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-200",
                item.current
                  ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border-r-2 border-blue-400 backdrop-blur-sm"
                  : "text-slate-300 hover:bg-slate-700/50 hover:text-white hover:backdrop-blur-sm"
              )}
            >
              <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />
              {!isCollapsed && item.name}
            </a>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="p-2 border-t border-slate-700/50">
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium text-slate-300 rounded-md hover:bg-slate-700/50 hover:text-white transition-all duration-200"
        >
          <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
          {!isCollapsed && "Configuración"}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
