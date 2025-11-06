import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-semibold tracking-tight text-sky-700">
          Ersha Nabilah
        </a>

        <nav className="hidden md:flex items-center gap-8 text-slate-700">
          <a href="#profil" className="hover:text-sky-700 transition-colors">Profil</a>
          <a href="#pengalaman" className="hover:text-sky-700 transition-colors">Pengalaman</a>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700"
          onClick={() => setOpen(!open)}
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            <a href="#profil" className="py-2 text-slate-700 hover:text-sky-700" onClick={() => setOpen(false)}>Profil</a>
            <a href="#pengalaman" className="py-2 text-slate-700 hover:text-sky-700" onClick={() => setOpen(false)}>Pengalaman</a>
          </div>
        </div>
      )}
    </header>
  );
}
