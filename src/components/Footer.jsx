import React from 'react';

export default function Footer() {
  // Data logo biar tidak copy-paste berkali-kali
  const logos = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRYdydGFLDj7n0uZIRvg0H3S03sCUeBQcz4RZkoe30w&s=10",
      alt: "Logo SD",
      label: "SD YPPK Getentiri"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS46HWeQ9Ct4Z-MWCh-BtgVsTp845ozM9QlXh9VahxVOg&s=10",
      alt: "Logo SMP",
      label: "SMP Negeri 1 Asiki"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlUHEEH09onrm6cQAtv_DB9ayic8HkuwU7F9f9mOZGPg&s=10",
      alt: "Logo RPL",
      label: "Rekayasa Perangkat Lunak"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCbnrJ4pLIEzz73bFIM1h7wRBzR_RFXWjnUBzBQfhtCA&s=10",
      alt: "Logo Provinsi",
      label: "Papua Selatan"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUSvUC1WHhY71BuSxMZJCFkfp7hMsGau384W_JdE4Hw&s=10",
      alt: "Logo Kabupaten",
      label: "Kab. Boven Diguel"
    },
    {
      src: "https://smkbagimunegeriku.sch.id/wp-content/uploads/2021/12/cropped-Logo-BN-512x512-1.png",
      alt: "Logo SMK",
      label: "SMK Bagimu Negeriku"
    },
    {
      src: "https://images.seeklogo.com/logo-png/50/1/kabupaten-semarang-logo-png_seeklogo-500298.png",
      alt: "Logo Kabupaten",
      label: "Kab. Semarang"
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9N0-7tDBfhipaMspQchJLT22I2wnbvFcqQcP_stqGkw&s=10",
      alt: "Logo Provinsi",
      label: "Jawa Tengah"
    },
    {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/250px-Flag_of_Indonesia.svg.png",
      alt: "Logo Negara",
      label: "Indonesia"
    }
  ];

  // Komponen item logo
  const LogoItem = ({ logo }) => (
    <div className="flex flex-col items-center min-w-[100px] mx-4">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center p-2 border border-white/10 hover:border-gray-400 transition">
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[10px] mt-1.5 text-gray-400 text-center whitespace-nowrap">
        {logo.label}
      </span>
    </div>
  );

  return (
    <footer className="w-full py-10 bg-[#121212] border-t border-[#222] text-center text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 space-y-8">

        {/* ===== MARQUEE LOGO ===== */}
        <div className="overflow-hidden relative w-full">
          {/* Gradient kiri & kanan biar lebih bagus */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee">
            {/* Set 1 */}
            <div className="flex items-center">
              {logos.map((logo, i) => (
                <LogoItem key={`set1-${i}`} logo={logo} />
              ))}
            </div>

            {/* Set 2 (duplikat) */}
            <div className="flex items-center">
              {logos.map((logo, i) => (
                <LogoItem key={`set2-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        <div className="border-t border-white/5 w-3/4 mx-auto"></div>

        {/* Copyright */}
        <div>
          <h4 className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
            © 2026 Yohanis Bawon. SMK Bagimu Negeriku, Jurusan RPL.
          </h4>
        </div>
      </div>
    </footer>
  );
}