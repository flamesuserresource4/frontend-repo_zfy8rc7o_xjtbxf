import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Crave it. Tap it. We'll deliver it hot and fast.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Explore hundreds of local restaurants and get your favorites delivered in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-white shadow hover:shadow-md"
              >
                Browse menu <ChevronRight size={18} />
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-gray-900 border border-black/10 shadow-sm"
              >
                How it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 flex items-center gap-2 text-sm text-gray-600"
            >
              <Star className="text-yellow-500" size={18} /> 4.9 rating • 3k+ happy customers
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto h-72 w-full max-w-md rounded-3xl bg-gradient-to-tr from-orange-500 to-pink-500 p-1"
            >
              <div className="h-full w-full rounded-3xl bg-white p-6">
                <div className="grid grid-cols-3 gap-3">
                  {['🍔','🍕','🥗','🍣','🌯','🍜','🥟','🍟','🍰'].map((i, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="flex h-20 items-center justify-center rounded-2xl bg-gray-50 text-3xl shadow-sm"
                    >
                      {i}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
