import {
  BarChart3,
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true },
    { icon: Users, label: "Users", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: ShieldCheck, label: "Security", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="h-full w-full bg-black border border-white/10 rounded-xl p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
      <div className="space-y-2 relative z-10">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 pl-3">
          Menu
        </p>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 group ${
              item.active
                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon
              size={18}
              className={
                item.active
                  ? "text-black"
                  : "group-hover:scale-110 transition-transform"
              }
            />
            <span>{item.label}</span>
            {item.active && <ChevronRight size={14} className="ml-auto" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
