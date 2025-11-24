import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans p-4 md:p-6 lg:p-8 flex justify-center items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 min-h-[90vh]">
        <div className="lg:col-span-3 h-24 lg:h-32">
          <Logo />
        </div>

        <div className="lg:col-span-9 h-24 lg:h-32">
          <Header />
        </div>

        <div className="hidden lg:block lg:col-span-3 lg:row-span-2 min-h-[500px]">
          <Sidebar />
        </div>

        <div className="lg:hidden col-span-1">
          <Sidebar />
        </div>

        <div className="lg:col-span-9 lg:row-span-2">
          <MainContent />

          <div className="mt-8">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
