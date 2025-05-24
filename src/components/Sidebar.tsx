
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
      "bg-white border-r border-gray-200 flex flex-col transition-all duration-300",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-lg font-semibold text-gray-900">AnomalyDash</h1>
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
                "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                item.current
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <IconComponent className="mr-3 h-5 w-5 flex-shrink-0" />
              {!isCollapsed && item.name}
            </a>
          );
        })}
      </nav>

      {/* Settings */}
      <div className="p-2 border-t border-gray-200">
        <a
          href="#"
          className="group flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
        >
          <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
          {!isCollapsed && "Configuración"}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
