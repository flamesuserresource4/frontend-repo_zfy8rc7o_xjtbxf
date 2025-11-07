export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-pink-500" />
            <span className="font-semibold">FoodFast</span>
          </div>
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} FoodFast. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
