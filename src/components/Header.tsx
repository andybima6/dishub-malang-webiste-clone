import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-header-gradient shadow-medium">
      {/* Top Header with Logo and Title */}
      <div className="bg-government-light/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-soft">
                <div className="w-12 h-12 bg-government-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">PEMERINTAH KOTA MALANG</h1>
                <h2 className="text-xl">DINAS PERHUBUNGAN</h2>
                <p className="text-sm opacity-90">Jl. Raden Intan No. 1 Malang | Telp. 0341-491140</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-12 h-12 bg-government-accent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-government-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-3 rounded-none">
              PORTAL PEMKOT MALANG
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-3 rounded-none">
              SMART CITY
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-3 rounded-none">
              SAMBAT ONLINE
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-3 rounded-none">
              PPID
            </Button>
          </nav>
        </div>
      </div>

      {/* Sub Navigation */}
      <div className="bg-government-primary/80">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 text-sm">
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Beranda
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Layanan Publik
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Berita
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Kebijakan
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Unit Kerja
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Pengumuman
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              Hubungi Kami
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 px-4 py-2 rounded-none">
              PENGADUAN
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;