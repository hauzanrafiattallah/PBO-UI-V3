import { ArrowRight, BarChart3 } from "lucide-react";

const MainContent = () => {
  return (
    <div className="h-full flex flex-col gap-6">
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 backdrop-blur-sm">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Welcome to the{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
              Future
            </span>{" "}
            of Management.
          </h2>
          <div className="flex gap-2">
            <div className="h-2 w-20 bg-white rounded-full"></div>
            <div className="h-2 w-10 bg-gray-700 rounded-full"></div>
            <div className="h-2 w-5 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-black border border-white/10 rounded-xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-white block rounded-sm"></span>
            Project Overview
          </h3>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed text-justify">
            <p className="group-hover:text-gray-300 transition-colors">
              Sistem ini dirancang dengan antarmuka monokromatik yang elegan
              untuk meminimalkan gangguan visual. Sebagai{" "}
              <strong>Admin Zhafran</strong>, Anda memiliki kontrol penuh atas
              data analitik yang disajikan secara real-time.
            </p>

            <p>
              Teknologi yang digunakan mencakup <em>Next.js App Router</em>{" "}
              untuk performa maksimal, dipadukan dengan fleksibilitas{" "}
              <em>Tailwind CSS</em>. Setiap komponen bersifat modular,
              memungkinkan skalabilitas tinggi di masa depan tanpa merusak
              konsistensi desain UI.
            </p>
          </div>

          <button className="mt-8 flex items-center gap-2 text-white text-sm font-bold border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all">
            Read Full Report <ArrowRight size={14} />
          </button>
        </div>

        <div className="lg:col-span-1 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-xl p-1 relative flex items-center justify-center min-h-[250px] lg:min-h-auto shadow-inner">
          <div className="absolute inset-4 border border-dashed border-white/20 rounded-lg"></div>

          <div className="relative z-10 text-center p-6">
            <div className="w-20 h-20 bg-gradient-to-tr from-white to-gray-400 rounded-xl mx-auto mb-4 rotate-3 hover:rotate-6 transition-transform shadow-lg flex items-center justify-center">
              <BarChart3 size={32} className="text-black" />
            </div>
            <h4 className="text-white font-bold text-lg">Daily Stats</h4>
            <p className="text-gray-400 text-xs mt-2">
              Activity increased by 85% since last login.
            </p>

            <div className="mt-6 flex justify-center gap-2">
              <span className="block w-2 h-2 rounded-full bg-white"></span>
              <span className="block w-2 h-2 rounded-full bg-gray-600"></span>
              <span className="block w-2 h-2 rounded-full bg-gray-600"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
