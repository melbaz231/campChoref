import Details from './components/Details';
import EnrollmentForm from './components/EnrollmentForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

export default function App() {
  return (
    <div className="min-h-screen bg-night-900">
      <a
        href="#register"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sun-300 focus:px-4 focus:py-2 focus:font-semibold focus:text-night-900"
      >
        Skip to registration
      </a>
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Details />
        <EnrollmentForm />
      </main>
      <Footer />
    </div>
  );
}
