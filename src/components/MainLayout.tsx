import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="col-span-1 lg:col-span-8">
              {children}
            </div>
            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;