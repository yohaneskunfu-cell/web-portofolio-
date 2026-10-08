


export const PORTFOLIO_DATA = {
  name: "Yohanis Bawon",
  initials: "YSB",
  school: "SMK Bagimu Negeriku",
  major: "Rekayasa Perangkat Lunak",
  birthDate: "5 September 2010",
  contacts: {
    phone: {
      label: "Nomor HP",
      value: "085251188088",
      link: "https://wa.me/6285251188088",
      actionText: "HUBUNGI SAYA",
    },
    instagram: {
      label: "Instagram",
      value: "@b.yohanis",
      link: "https://www.instagram.com/b.yohanis/",
      actionText: "BUKA INSTAGRAM",
    },
    email: {
      label: "Email",
      value: "yohaneskunfu@gmail.com",
      link: "mailto:yohaneskunfu@gmail.com",
      actionText: "KIRIM EMAIL",
    },
    facebook: {
      label: "Facebook",
      value: "Katuk Duatiga",
      link: "https://www.facebook.com/profile.php?id=61568590173877",
      actionText: "BUKA FACEBOOK",
    }
  },
  typedWords: ["WEB APP", "REACT UI", "WEBSITE"],
  projects: [
    {
      id: 1,
      title: "Aplikasi React: Cosakata",
      description: "Aplikasi web interaktif yang dibuat dengan React, dengan tampilan responsif di HP maupun desktop.",
      tags: ["React", "Tailwind CSS"],
      link: "https://cosakata-ysb.vercel.app/",
      icon: "react",
      actionText: "Buka aplikasi",
    },
    {
      id: 2,
      title: "Deployment di Vercel",
      description: "Proyek dipublikasikan ke Vercel lewat GitHub, jadi setiap pembaruan kode langsung tayang.",
      tags: ["Vercel", "GitHub"],
      link: "https://vercel.com/bawon/cosakata-ysb",
      icon: "cloud",
      actionText: "Buka dashboard",
    },
    {
      id: 3,
      title: "Website Pembelajaran Sejarah",
      description: "Website interaktif untuk mempelajari perjalanan Indonesia menuju kemerdekaan, dilengkapi dengan infografis dan gambar pejuang.",
      tags: ["HTML", "CSS"],
      link: "https://ysb-perjalanan-indonesia.vercel.app/",
      icon: "cloud",
      actionText: "Buka aplikasi",
    },
    {
      id: 4,
      title: "Website Pembelajaran Matematika",
      description: "Website interaktif untuk mempelajari konsep matematika dasar, dilengkapi dengan contoh soal dan penjelasan serta memiliki kalkulator sederhana.",
      tags: ["HTML", "CSS"],
      link: "https://web-mtkysb.vercel.app/",
      icon: "cloud",
      actionText: "Buka aplikasi",
    }
  ],
  skills: {
    main: {
      name: "React",
      description: "Membuat antarmuka yang cepat, responsif, dan tersusun dari komponen. Ini yang paling saya kuasai dan sudah saya pakai di proyek Cosakata.",
    },
    secondary: [
      { name: "Laravel", desc: "Backend dan REST API dasar", icon: "code" },
      { name: "MySQL", desc: "Tabel dan query dasar", icon: "db" },
      { name: "Deployment", desc: "Publikasi ke Vercel", icon: "cloud" },
    ],
  },
  hobbies: [
    { 
      title: "Futsal (Pivot)", 
      desc: "Bermain sebagai pemain depan, melatih fokus dan kerja sama tim.", 
      icon: "ball",
      btnIcon: "youtube",
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
  ],
};

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