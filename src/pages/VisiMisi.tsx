import MainLayout from "@/components/MainLayout";
import citra from "@/assets/citra.png"; // Adjust the path as necessary

const VisiMisi = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="bg-blue-50 text-gray-800 px-6 py-10 md:px-20 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Visi Misi</h2>

            {/* Visi */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-2">» Visi</h3>
              <ul className="list-disc pl-6">
                <li>Terwujudnya Sistem Transportasi yang Handal dan Terintegrasi</li>
              </ul>
            </div>

            {/* Misi */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-black mb-2">» Misi</h3>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Meningkatkan Kualitas Sistem Transportasi Aman, Tertib, dan Nyaman</span>
                </li>
              </ul>
            </div>

            {/* Gambar 5 Citra Manusia Perhubungan */}
            <div className="mt-10">
              <img
                src={citra} // Ganti path jika perlu
                alt="5 Citra Manusia Perhubungan"
                className="w-full max-w-xl mx-auto rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default VisiMisi;
