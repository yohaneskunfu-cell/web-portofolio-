import Icon from "./Icons";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="proyek" className="py-24 bg-soft text-black">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="font-extrabold uppercase text-4xl sm:text-5xl">Proyek saya</h2>
        <p className="text-black/60 mt-3 max-w-lg">Klik kartu untuk membuka proyeknya langsung.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link bg-ink text-white rounded-2xl p-8 flex flex-col"
            >
              <div className="ico ico-lg"><Icon name={p.icon} /></div>
              <h3 className="font-bold text-2xl mt-6">{p.title}</h3>
              <p className="text-white/70 mt-3 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-5 text-xs font-semibold">
                {p.tags.map((t) => (
                  <span key={t} className="bg-white/10 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <span className="mt-8 pt-5 border-t border-edge font-bold inline-flex items-center gap-2">
                {p.cta} <Icon name="ext" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}