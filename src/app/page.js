"use client";

import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Achievements from '@/components/Achievements';
import Languages from '@/components/Languages';
import TextType from '@/components/TextType';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Home() {
  return (
    <div className="min-h-screen bg-pink p-4 sm:p-8 max-w-4xl mx-auto text-foreground pt-24 sm:pt-28">
      <TextType
        text="Hello, I'm Dewi!"
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-center leading-tight mb-12 tracking-tight mx-auto"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <Header />
      <About />
      <Education />
      <Skills />
      <Achievements />
      <Projects />
      <Languages />
    </div>
  );
}