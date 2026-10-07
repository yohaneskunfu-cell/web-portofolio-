import Icon from "./Icons";
import { contacts } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="kontak" className="py-24">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="font-extrabold uppercase text-4xl sm:text-6xl">
          Mari <span className="grad-text">bekerja sama dan belajar bersama</span>
        </h2>
        <p className="text-white/70 mt-4 max-w-lg mx-auto">
          Punya proyek web atau ingin berkolaborasi? Hubungi saya lewat kontak di bawah.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10 text-left">
          {contacts.map((c) => (
            <div key={c.label} className="bg-[#1F1F23] border border-edge rounded-2xl p-6">
              <div className="ico">
                <Icon name={c.icon} />
              </div>
              <p className="text-sm text-white/50 mt-3">{c.label}</p>
              {c.value && <p className="font-bold text-xl">{c.value}</p>}

              {/* Menggunakan tag <a> untuk membuka link WhatsApp / Instagram */}
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-white text-black hover:bg-white/85 transition text-sm font-bold uppercase py-3 inline-flex items-center justify-center gap-2 rounded-lg"
              >
                <Icon name={c.icon} />
                {c.btn}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}