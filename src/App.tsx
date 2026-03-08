import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { ChallengeSection } from '@/sections/ChallengeSection';
import { ExpertiseSection } from '@/sections/ExpertiseSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ApproachSection } from '@/sections/ApproachSection';
import { ContactSection } from '@/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ChallengeSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
