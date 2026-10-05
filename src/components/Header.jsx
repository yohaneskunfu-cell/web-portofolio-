const links = [
  { href: "#proyek", label: "Proyek" },
  { href: "#skill", label: "Keahlian" },
  { href: "#tentang", label: "Tentang" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-ink/95 backdrop-blur border-b border-edge">
      <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-extrabold text-xl">
          <span className="w-10 h-10 rounded-lg bg-white text-black grid place-items-center text-sm">YSB</span>
          <span className="hidden sm:inline">Yohanis Bawon</span>
        </a>
        <nav className="hidden md:flex gap-9 text-[15px] font-medium text-white/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
        <a
          href="#kontak"
          className="border border-white px-6 py-3 text-sm font-bold uppercase hover:bg-white hover:text-black transition-colors"
        >
          Hubungi saya
        </a>
      </div>
    </header>
  );
}