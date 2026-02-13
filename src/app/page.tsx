import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <About />
        <Projects />
      </div>
    </main>
  );
}
