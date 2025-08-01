import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "@/assets/icons/Logo.svg"

const Footer = () => {
  return (
    <footer className="bg-header-gradient text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Government Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12  rounded-full flex items-center justify-center">
                <div className="w-14 h-14 bg-government-primary rounded-full flex items-center justify-center">
                  <img src={Logo} alt="logo"  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">DINAS PERHUBUNGAN</h3>
                <p className="text-sm opacity-90">KOTA MALANG</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Jl. Raden Intan No. 1 Malang<br />
              Telp. 0341-491140<br />
              Email: dishub@malangkota.go.id
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              <Youtube className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Portal Pemkot Malang</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Smart City</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Sambat Online</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">PPID</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Perizinan</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Pengaduan</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Informasi Publik</a></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-opacity">Hubungi Kami</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 Dinas Perhubungan Kota Malang. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;