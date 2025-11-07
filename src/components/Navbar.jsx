import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'How it works', href: '#how' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/40 shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-pink-500" />
              <span className="font-bold text-lg">FoodFast</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-sm text-gray-700 hover:text-gray-900">
                  {l.name}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-white shadow hover:shadow-md transition">
                <ShoppingBag size={18} />
                Order now
              </button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 p-2"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 pb-4 flex flex-col gap-3">
                  {links.map((l) => (
                    <a
                      key={l.name}
                      href={l.href}
                      className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setOpen(false)}
                    >
                      {l.name}
                    </a>
                  ))}
                  <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 text-white shadow">
                    <ShoppingBag size={18} /> Order now
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
