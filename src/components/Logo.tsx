const Logo = () => {
  return (
    <div className="h-full w-full bg-black border border-white/10 rounded-xl flex items-center justify-center p-6 relative overflow-hidden group shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-white/5 rounded-full blur-xl group-hover:bg-white/10 transition-all duration-500"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-2xl font-black tracking-tighter text-white">
          ZHAF<span className="text-gray-500">RAN</span>.
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mt-1 group-hover:text-white transition-colors">
          Admin Panel
        </p>
      </div>
    </div>
  );
};

export default Logo;
