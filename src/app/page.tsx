import { Services } from './components/sections/Services';
import { Meditation } from './components/sections/Meditation';
import { Numerology } from './components/sections/Numerology';
import { Testimonials } from './components/sections/Testimonials';
import { CTA } from './components/sections/CTA';
import HeroSection from './components/sections/HeroSection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-purple-200 text-white">
      <main className="container mx-auto px-4">
        <HeroSection />
        <section className="py-20">
          <Services />
        </section>
        <section className="py-12">
          <Meditation />
        </section>
        <section className="py-12">
          <Numerology />
        </section>
        <section className="py-12">
          <Testimonials />
        </section>
        <section className="py-12">
          <CTA />
        </section>
      </main>
    </div>
  );
}
