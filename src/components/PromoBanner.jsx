import { useState } from "react";

export default function PromoBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;

  return (
    <div className="bg-white text-black text-sm font-medium py-3 px-12 text-center relative">
      Siswa RPL SMK Bagimu Negeri Ku, terbuka untuk proyek dan kolaborasi.
      <a href="#kontak" className="font-bold underline ml-2">Hubungi saya</a>
      <button
        onClick={() => setShow(false)}
        aria-label="Tutup"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl leading-none text-black/50 hover:text-black"
      >
        &times;
      </button>
    </div>
  );
}