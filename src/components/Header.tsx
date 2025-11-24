import { Bell, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="h-full w-full bg-gradient-to-r from-gray-900 via-gray-800 to-black border border-white/10 rounded-xl flex items-center justify-between px-8 relative overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 hidden md:flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2 w-1/3 hover:border-white/30 transition-colors">
        <Search size={18} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search documentation..."
          className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-500 w-full"
        />
      </div>

      <div className="relative z-10 flex items-center gap-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full animate-pulse"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white leading-tight">
              Zhafran
            </p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <span className="font-bold text-white text-xs">Z</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
