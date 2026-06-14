import Portfolio from '@/components/Portfolio';
import HumanFigureScene from '@/components/HumanFigureScene';

export const metadata = {
  title: 'Er. Purushottam Chand Bohora | Founder & Tech Architect',
  description: 'Securing the Web. Building the Future of SaaS. Cybersecurity Engineer, Full-Stack Developer, Startup Founder.',
  keywords: ['Founder', 'CTO', 'Tech Architect', 'Cybersecurity', 'Full-Stack Developer', 'SaaS'],
};

export default function Home() {
  return (
    <main className="w-full">
      <HumanFigureScene />
      <Portfolio />
    </main>
  );
}
