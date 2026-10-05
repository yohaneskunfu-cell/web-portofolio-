export const PORTFOLIO_DATA = {
  name: "Yohanis Bawon",
  initials: "YSB",
  school: "SMK Bagimu Negeri Ku",
  major: "Rekayasa Perangkat Lunak",
  birthDate: "5 September 2010",
  contacts: {
    phone: "085251188088",
    instagram: "@b.yohanis",
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
    { title: "Futsal (Pivot)", desc: "Bermain sebagai pemain depan, melatih fokus dan kerja sama tim.", icon: "ball" },
    { title: "Mixed Martial Arts", desc: "Menyukai MMA untuk melatih disiplin fisik dan mental.", icon: "bolt" },
    { title: "Musik Phonk & Hip-Hop", desc: "Teman setia saat mengoding.", icon: "head" },
    { title: "Kustomisasi desktop", desc: "Menata tampilan desktop agar rapi dan nyaman dipakai.", icon: "desk" },
  ],
};