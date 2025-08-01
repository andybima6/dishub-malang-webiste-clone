import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <div className="relative z-[9999]">
        <Header />
      </div>
      <main className="px-4 sm:px-6 md:px-8 relative z-0 flex-1 bg-gray-50 max-w-7xl mx-auto">
        <div className="w-full py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="bg-[#3B2F88] border-t-4 border-yellow-400 mb-4">
                <div className="px-4 py-6 sm:px-6 md:px-8"></div>
              </div>
              {children}
            </div>
 
            <div className="col-span-12 lg:col-span-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
