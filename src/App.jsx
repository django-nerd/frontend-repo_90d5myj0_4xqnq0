import Header from './components/Header';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-inter">
      <Header />
      <main>
        <Hero />
        <Profile />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
