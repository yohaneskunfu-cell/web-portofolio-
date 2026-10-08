import { PORTFOLIO_DATA } from "../data/portfolioData";
import { basicSkills } from "../data";
import Icon from "./Icons"; 

export default function Skills() {
  return (
    <section id="skill" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        {/* SECTION KEAHLIAN */}
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

        {/* SECTION MINAT & HOBI */}
        <div className="mt-20">
          <h2 className="font-extrabold text-3xl sm:text-4xl text-white">Minat & hobi</h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {PORTFOLIO_DATA.hobbies.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#E4E3DF] text-black rounded-3xl p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#222226] text-white rounded-2xl flex items-center justify-center mb-6">
                    <Icon name={item.icon} />
                  </div>
                  <h3 className="font-bold text-2xl text-black">{item.title}</h3>
                  <p className="text-black/70 mt-3 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Tombol Aksi Mirip Gambar 2 */}
                {item.link && (
                  <div className="mt-8">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-3 px-6 bg-[#D8D6D0] hover:bg-[#cccabf] text-black font-extrabold text-sm rounded-2xl transition-all shadow-sm border border-black/10"
                    >
                      <Icon name={item.btnIcon} />
                      <span>{item.actionText || "HUBUNGI SAYA"}</span>
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}