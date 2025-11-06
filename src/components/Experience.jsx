import { motion } from 'framer-motion';
import { CheckCircle2, Image } from 'lucide-react';

export default function Experience() {
  const items = [
    'Mengikuti kegiatan ACO 23',
    'Mengikuti kegiatan Mentoring 2023',
    'Membuat website sederhana',
    'Menjadi Panitia Sidang Pleno Himatik',
  ];

  return (
    <section id="pengalaman" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-slate-800"
          >
            Pengalaman
          </motion.h2>

          <ul className="mt-6 space-y-3">
            {items.map((text, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 text-sky-600" size={20} />
                <span className="text-slate-700">{text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm"
        >
          <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-sky-100 to-white flex items-center justify-center">
            <Image className="text-sky-400" size={56} />
          </div>
          <p className="mt-4 text-slate-500 text-sm">
            Ilustrasi sederhana bernuansa biru-putih untuk melengkapi tampilan modern dan profesional.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
