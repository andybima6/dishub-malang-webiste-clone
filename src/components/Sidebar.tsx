import { Card } from "@/components/ui/card";

const Sidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-4">
      <h2 className="text-xl font-semibold mb-2">In this section</h2>
      <Card className="shadow-soft">
        <div className="p-0">
          <div className="bg-header-gradient text-white p-4 rounded-t-lg">
            <h4 className="text-base">Profil</h4>
          </div>
          <div className="p-0">
            <nav className="space-y-0">
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-government-light/30 border-b border-gray-200 transition-colors">
                Pimpinan
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-government-light/30 border-b border-gray-200 transition-colors">
                Profil Dinas Perhubungan Kota Malang
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-government-light/30 border-b border-gray-200 transition-colors">
                Sekretariat
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:bg-government-light/30 transition-colors">
                Struktur Organisasi
              </a>
            </nav>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
