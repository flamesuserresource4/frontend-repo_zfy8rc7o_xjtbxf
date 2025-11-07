import { motion } from 'framer-motion';

const items = [
  { id: 1, name: 'Classic Burger', price: 8.99, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Margherita Pizza', price: 10.99, img: 'https://images.unsplash.com/photo-1548368889-5eda27d4dbdb?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Sushi Platter', price: 14.99, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Pasta Bowl', price: 9.99, img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Fresh Salad', price: 7.49, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Taco Trio', price: 8.49, img: 'https://images.unsplash.com/photo-1551503750-16a3a0a14014?q=80&w=1200&auto=format&fit=crop' },
];

export default function MenuGrid() {
  return (
    <section id="menu" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular near you</h2>
            <p className="text-gray-600">Handpicked favorites from top-rated restaurants</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={item.img} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">$ {item.price.toFixed(2)}</p>
                  </div>
                  <button className="rounded-lg bg-gray-900 px-3 py-2 text-sm text-white hover:bg-gray-800">Add</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
