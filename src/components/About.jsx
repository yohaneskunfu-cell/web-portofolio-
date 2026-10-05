import Icon from "./Icons";
import { profile, hobbies } from "../data";

export default function About() {
  return (
    <section id="tentang" className="py-24 bg-soft text-black">
      <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-extrabold uppercase text-4xl sm:text-5xl">Tentang saya</h2>
          <p className="text-black/70 mt-5 leading-relaxed">
            Saya siswa jurusan Rekayasa Perangkat Lunak (RPL) di SMK Bagimu Negeri Ku. Saya suka membangun aplikasi web, terutama bagian tampilannya.
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            {profile.map((p) => (
              <li key={p.label} className="flex items-center gap-3">
                <span className="ico ico-dk !w-10 !h-10 !text-xl"><Icon name={p.icon} /></span>
                <span>
                  <span className="block text-black/50">{p.label}</span>
                  <span className="font-semibold">{p.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <h3 className="font-bold text-2xl mb-5">Minat &amp; hobi</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {hobbies.map((h) => (
              <div key={h.title} className="bg-white border border-rule rounded-2xl p-5">
                <div className="ico ico-dk"><Icon name={h.icon} /></div>
                <h4 className="font-bold mt-3">{h.title}</h4>
                <p className="text-sm text-black/65 mt-1">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}