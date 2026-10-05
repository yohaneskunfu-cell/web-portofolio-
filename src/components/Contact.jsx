import { useRef, useState } from "react";
import Icon from "./Icons";
import { contacts } from "../data";

export default function Contact() {
  const [toast, setToast] = useState({ show: false, msg: "" });
  const timer = useRef(null);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2500);
  };

  const copyText = async (text, label) => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      try { ok = document.execCommand("copy"); } catch { /* abaikan */ }
      document.body.removeChild(t);
    }
    showToast(ok ? `${label} disalin: ${text}` : `Gagal menyalin ${label.toLowerCase()}`);
  };

  return (
    <section id="kontak" className="py-24">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <h2 className="font-extrabold uppercase text-4xl sm:text-6xl">
          Mari <span className="grad-text">bekerja sama</span>
        </h2>
        <p className="text-white/70 mt-4 max-w-lg mx-auto">
          Punya proyek web atau ingin berkolaborasi? Hubungi saya lewat kontak di bawah.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mt-10 text-left">
          {contacts.map((c) => (
            <div key={c.label} className="bg-[#1F1F23] border border-edge rounded-2xl p-6">
              <div className="ico"><Icon name={c.icon} /></div>
              <p className="text-sm text-white/50 mt-3">{c.label}</p>
              <p className="font-bold text-xl">{c.value}</p>
              <button
                onClick={() => copyText(c.value, c.toastLabel)}
                className="mt-4 w-full bg-white text-black hover:bg-white/85 transition text-sm font-bold uppercase py-3 inline-flex items-center justify-center gap-2"
              >
                <Icon name="copy" />{c.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div id="toast" role="status" className={toast.show ? "show" : ""}>
        {toast.msg}
      </div>
    </section>
  );
}