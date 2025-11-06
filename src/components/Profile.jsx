import { motion } from 'framer-motion';
import { User, IdCard, Calendar, Globe, GraduationCap } from 'lucide-react';

export default function Profile() {
  const rows = [
    { icon: <User className="text-sky-600" size={18} />, label: 'Nama', value: 'Ersha Nabilah' },
    { icon: <GraduationCap className="text-sky-600" size={18} />, label: 'Kelas', value: 'PTIK D 2023' },
    { icon: <IdCard className="text-sky-600" size={18} />, label: 'NIM', value: '230209501040' },
    { icon: <Calendar className="text-sky-600" size={18} />, label: 'Tanggal Lahir', value: '4 Agustus 2005' },
    { icon: <Globe className="text-sky-600" size={18} />, label: 'Kewarganegaraan', value: 'Indonesia' },
  ];

  return (
    <section id="profil" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-slate-800"
        >
          Profil
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 rounded-2xl bg-white border border-sky-200 shadow-sm p-6 md:p-8"
        >
          <div className="grid gap-4">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700">
                {r.icon}
                <div className="w-36 md:w-48 text-slate-500">{r.label}</div>
                <div className="font-medium">{r.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
