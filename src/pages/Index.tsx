import MainLayout from "@/components/MainLayout";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <Card className="p-6 shadow-soft">
          <h1 className="text-2xl font-bold text-government-primary mb-4">
            Selamat Datang di Portal Dinas Perhubungan Kota Malang
          </h1>
          <p className="text-gray-700 leading-relaxed">
            Dinas Perhubungan Kota Malang berkomitmen untuk memberikan pelayanan terbaik 
            dalam bidang transportasi dan perhubungan. Kami menyediakan berbagai layanan 
            mulai dari perizinan, pengaduan, hingga informasi publik untuk masyarakat Kota Malang.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-government-primary mb-3">
              Layanan Perizinan
            </h2>
            <p className="text-gray-700 text-sm">
              Proses perizinan transportasi dan perhubungan yang mudah, cepat, dan transparan.
            </p>
          </Card>

          <Card className="p-6 shadow-soft">
            <h2 className="text-xl font-semibold text-government-primary mb-3">
              Pengaduan Masyarakat
            </h2>
            <p className="text-gray-700 text-sm">
              Salurkan keluhan dan masukan Anda terkait layanan transportasi di Kota Malang.
            </p>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
