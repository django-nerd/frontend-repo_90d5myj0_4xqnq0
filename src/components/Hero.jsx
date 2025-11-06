import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 md:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-white to-white pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center relative">
        <div className="order-2 md:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-800"
          >
            Ersha Nabilah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 text-sky-700 font-medium"
          >
            Mahasiswa PTIK D 2023
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-slate-600 max-w-prose"
          >
            "Belajar. Berkembang. Berkontribusi."
          </motion.p>
        </div>

        <div className="order-1 md:order-2 h-[360px] md:h-[480px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-sky-200/60 bg-white/60">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  );
}
