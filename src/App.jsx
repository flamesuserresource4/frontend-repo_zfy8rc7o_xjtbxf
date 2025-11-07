import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <MenuGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
