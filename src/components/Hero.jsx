import { useEffect, useState } from "react";
import Icon from "./Icons";

const words = ["WEB APP", "REACT UI", "WEBSITE"];
const chips = [
  { icon: "react", label: "React", active: true },
  { icon: "code", label: "Laravel" },
  { icon: "db", label: "MySQL" },
  { icon: "cloud", label: "Vercel" },
];

export default function Hero() {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let w = 0, c = words[0].length, del = true, t;

    const tick = () => {
      setText(words[w].slice(0, c));
      if (del) {
        c--;
        if (c < 0) { del = false; w = (w + 1) % words.length; c = 0; }
      } else {
        c++;
        if (c > words[w].length) {
          del = true;
          c = words[w].length;
          t = setTimeout(tick, 1600);
          return;
        }
      }
      t = setTimeout(tick, del ? 60 : 110);
    };

    t = setTimeout(tick, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="grid lg:grid-cols-2">
      <div className="px-5 sm:px-10 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+3rem))] lg:pr-12 py-16 lg:py-24 flex flex-col justify-center">
        <h1 className="font-extrabold uppercase leading-[1.08] text-5xl sm:text-6xl xl:text-7xl tracking-tight">
          Bikin<br />
          <span className="grad-text">{text}</span>
          <span className="cursor" aria-hidden="true"></span><br />
          dengan React...
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed">
          Saya Yohanis Bawon. Saya fokus membuat aplikasi web dengan{" "}
          <strong className="text-white">React</strong>, dan juga bisa dasar Laravel, MySQL, serta deployment.
        </p>

        <div className="flex flex-wrap gap-4 mt-9">
          <a href="#proyek" className="bg-white text-black hover:bg-white/85 transition px-8 py-4 text-sm font-bold uppercase tracking-wide inline-flex items-center gap-2">
            <Icon name="folder" />Lihat proyek
          </a>
          <a href="#kontak" className="bg-[#2C2C31] hover:bg-[#3a3a40] transition px-8 py-4 text-sm font-bold uppercase tracking-wide inline-flex items-center gap-2">
            <Icon name="mail" />Kontak
          </a>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 text-sm">
          {chips.map((c) => (
            <span
              key={c.label}
              className={
                c.active
                  ? "flex items-center gap-2 bg-white text-black font-semibold rounded-lg px-3 py-2"
                  : "flex items-center gap-2 border border-edge text-white/80 rounded-lg px-3 py-2"
              }
            >
              <Icon name={c.icon} />{c.label}
            </span>
          ))}
        </div>
      </div>

      <div className="stage" aria-hidden="true">
        <div className="tilt">
          <div className="plane">
            <div className="pg pg-a"><b>COSAKATA</b><i style={{ width: "90%" }} /><i style={{ width: "75%" }} /><i style={{ width: "85%" }} /><i style={{ width: "55%" }} /><i style={{ width: "80%" }} /></div>
            <div className="pg pg-b"><b>REACT</b><i style={{ width: "80%" }} /><i style={{ width: "60%" }} /><i style={{ width: "90%" }} /><i style={{ width: "50%" }} /></div>
            <div className="pg pg-c"><b>VERCEL</b><i style={{ width: "95%" }} /><i style={{ width: "70%" }} /><i style={{ width: "85%" }} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}