import { motion } from 'framer-motion';
import { Smartphone, Utensils, Truck } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Pick your favorites',
    desc: 'Browse nearby restaurants and choose from curated menus and top picks.',
  },
  {
    icon: Utensils,
    title: 'We prepare with care',
    desc: 'Your order is confirmed instantly and prepared fresh by the restaurant.',
  },
  {
    icon: Truck,
    title: 'Delivered lightning fast',
    desc: 'Our couriers bring it hot to your door. Track every step in real-time.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 bg-gradient-to-b from-white to-orange-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-2 text-gray-600">Simple steps to get great food delivered</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-orange-500 to-pink-500 text-white">
                <s.icon size={22} />
              </div>
              <h3 className="font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
