import MainLayout from "@/components/MainLayout";

const Profile = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-blue-50 text-gray-800 px-6 py-10 md:px-20 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Profil Dinas Perhubungan Kota Malang</h1>
            <p className="mb-6 leading-relaxed">
              Dinas Perhubungan Kota Malang adalah lembaga pemerintah yang bertanggung jawab atas pengelolaan dan pengembangan sektor transportasi dan perhubungan di Kota Malang. Dinas ini berperan penting dalam menciptakan sistem
              transportasi yang efisien, aman, dan teratur guna mendukung mobilitas masyarakat serta pertumbuhan ekonomi di Kota Malang.
            </p>
            <p className="mb-6 leading-relaxed">
              Dalam menjalankan tugasnya, Dinas Perhubungan Kota Malang memiliki beberapa bidang inti, antara lain bidang lalu lintas, pengelolaan parkiran, dan angkutan jalan. Bidang lalu lintas bertanggung jawab dalam pengaturan dan
              pengendalian lalu lintas di Kota Malang, termasuk penegakan peraturan lalu lintas dan perencanaan sistem pengaturan lalu lintas yang efisien.
            </p>
            <p className="mb-6 leading-relaxed">
              Bidang pengelolaan parkiran bertugas dalam mengatur fasilitas parkir di Kota Malang, termasuk pengembangan kebijakan parkir, penggunaan lahan parkir, dan pendapatan dari parkir yang dikelola dengan baik. Sedangkan bidang
              angkutan jalan bertanggung jawab dalam pengaturan dan pengelolaan angkutan umum dan angkutan barang di Kota Malang, meliputi perencanaan rute, pengawasan kendaraan, dan penegakan peraturan terkait angkutan jalan.
            </p>
            <p className="mb-6 leading-relaxed">
              Dinas Perhubungan Kota Malang juga bekerja sama dengan pihak terkait, seperti kepolisian, untuk meningkatkan keamanan lalu lintas dan mengurangi kemacetan di jalan-jalan Kota Malang. Selain itu, dinas ini berperan dalam
              merumuskan kebijakan dan program pengembangan infrastruktur transportasi, seperti jalan, jembatan, dan terminal, guna mendukung kelancaran sistem transportasi di Kota Malang.
            </p>
            <p className="leading-relaxed">
              Melalui upaya yang dilakukan, Dinas Perhubungan Kota Malang berkomitmen untuk memberikan pelayanan transportasi yang berkualitas, aman, dan terjangkau bagi masyarakat Kota Malang. Tujuan utamanya adalah meningkatkan kualitas
              hidup masyarakat, mendukung pertumbuhan ekonomi, serta menciptakan lingkungan transportasi yang berkelanjutan di Kota Malang.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
