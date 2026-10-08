export * from "./portfolioData";

export const projects = [
  {
    icon: "react",
    title: "Aplikasi React: Cosakata",
    desc: "Aplikasi web interaktif yang dibuat dengan React, dengan tampilan responsif di HP maupun desktop.",
    tags: ["React", "Tailwind CSS"],
    href: "https://cosakata-ysb.vercel.app/",
    cta: "Buka aplikasi",
  },
  {
    icon: "cloud",
    title: "Deployment di Vercel",
    desc: "Proyek dipublikasikan ke Vercel lewat GitHub, jadi setiap pembaruan kode langsung tayang.",
    tags: ["Vercel", "GitHub"],
    href: "https://vercel.com/bawon/cosakata-ysb",
    cta: "Buka dashboard",
  },
  {
    icon: "cloud",
    title: "Website Pembelajaran Sejarah",
    desc: "Website interaktif untuk mempelajari perjalanan Indonesia menuju kemerdekaan, dilengkapi dengan infografis dan gambar pejuang.",
    tags: ["Vercel", "GitHub"],
    href: "https://ysb-perjalanan-indonesia.vercel.app/",
    cta: "Buka dashboard",
  },
  {
    icon: "cloud",
    title: "Website Pembelajaran Matematika",
    desc: "Website interaktif untuk mempelajari konsep matematika dasar, dilengkapi dengan contoh soal dan penjelasan serta memiliki kalkulator sederhana.",
    tags: ["Vercel", "GitHub"],
    href: "https://web-mtkysb.vercel.app/",
    cta: "Buka dashboard",
  },
];

export const basicSkills = [
  { icon: "code", name: "Laravel", desc: "Backend dan REST API dasar" },
  { icon: "db", name: "MySQL", desc: "Tabel dan query dasar" },
  { icon: "cloud", name: "Deployment", desc: "Publikasi ke Vercel" },
];

export const profile = [
  { icon: "cal", label: "Tanggal lahir", value: "5 September" },
  { icon: "cap", label: "Sekolah", value: "SMK Bagimu Negeri Ku" },
  { icon: "laptop", label: "Jurusan", value: "Rekayasa Perangkat Lunak" },
];
export const hobbies = [
  { 
    title: "Futsal (Pivot)", 
    desc: "Bermain sebagai pemain depan, melatih fokus dan kerja sama tim.", 
    icon: "ball",
    btnIcon: "youtube", // Ikon khusus tombol
    link: "https://www.youtube.com/shorts/ExG49Epfq50", 
    actionText: "LIAT BAGIMANA BERMAIN" 
  },
  { 
    title: "Mixed Martial Arts", 
    desc: "Menyukai MMA untuk melatih disiplin fisik dan mental.", 
    icon: "bolt",
    btnIcon: "ig",
    link: "https://www.instagram.com/p/Dcv-NVoojE3/",
    actionText: "LIHAT AKTIVITAS"
  },
  { 
    title: "Musik Phonk & Hip-Hop", 
    desc: "Teman setia saat mengoding.", 
    icon: "head",
    btnIcon: "youtube",
    link: "https://www.youtube.com/watch?v=OfS4CxrEZ-o",
    actionText: "DENGARKAN MUSIK"
  },
  { 
    title: "boxing", 
    desc: "Menyukai boxing untuk melatih kekuatan dan daya tahan.", 
    icon: "glove",
    btnIcon: "ig",
    link: "https://www.instagram.com/p/DM8kdbKJKSq/",
    actionText: "LIHAT AKTIVITAS"
  },
];

export const contacts = [
  {
    icon: "phone",
    label: "Nomor HP",
    value: "085251188088",
    href: "https://wa.me/6285251188088", 
    btn: "HUBUNGI SAYA"
  },
  {
    icon: "ig",
    label: "Instagram",
    value: "@b.yohanis",
    href: "https://instagram.com/b.yohanis", 
    btn: "BUKA INSTAGRAM"
  },
  {
    icon: "mail",
    label: "Email",
    value: "yohaneskunfu@gmail.com",
    href: "mailto:yohaneskunfu@gmail.com",
    btn: "KIRIM EMAIL"
  },
  {
    icon: "fb",
    label: "Facebook",
    value: "Katuk Duatiga",
    href: "https://www.facebook.com/profile.php?id=61568590173877",
    btn: "BUKA FACEBOOK"
  }
];