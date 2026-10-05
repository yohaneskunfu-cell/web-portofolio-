import Icon from "./Icons";
import { basicSkills } from "../data";

export default function Skills() {
  return (
    <section id="skill" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-extrabold uppercase text-4xl sm:text-5xl">Keahlian</h2>

        <div className="grid lg:grid-cols-5 gap-6 mt-10">
          <div className="lg:col-span-3 bg-white text-black rounded-3xl p-8 sm:p-10">
            <div className="ico ico-dk ico-lg"><Icon name="react" /></div>
            <p className="mt-6 text-sm font-semibold text-black/50">Keahlian utama</p>
            <h3 className="font-extrabold text-4xl mt-1">React</h3>
            <p className="text-black/70 mt-4 leading-relaxed max-w-md">
              Membuat antarmuka yang cepat, responsif, dan tersusun dari komponen. Ini yang paling saya kuasai dan sudah saya pakai di proyek Cosakata.
            </p>
          </div>

          <div className="lg:col-span-2 border border-edge rounded-3xl p-8 bg-[#1F1F23]">
            <p className="text-sm font-semibold text-white/50">Sebatas bisa (dasar)</p>
            <ul className="mt-5 space-y-5">
              {basicSkills.map((s) => (
                <li key={s.name} className="flex items-center gap-4">
                  <span className="ico"><Icon name={s.icon} /></span>
                  <span>
                    <span className="block font-bold">{s.name}</span>
                    <span className="text-sm text-white/60">{s.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}