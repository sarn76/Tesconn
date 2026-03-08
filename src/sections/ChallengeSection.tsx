import { Activity, Zap } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const challenges = [
  {
    title: 'Evolving Structures',
    description: 'Adapting physical spaces to modern medical needs.',
    icon: Activity,
  },
  {
    title: 'Technological Integration',
    description: 'Seamlessly blending care with cutting-edge tech.',
    icon: Zap,
  },
];

export function ChallengeSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              The Challenge of Modern Healthcare
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operating effectively in today's environment requires a multitude of
              specialized solutions. The process of implementing latest technologies
              while maintaining financial performance can be overwhelming.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.15}>
            {challenges.map((challenge) => (
              <StaggerItem key={challenge.title}>
                <motion.div
                  className="bg-slate-50 rounded-xl p-6 h-full"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <challenge.icon className="w-6 h-6 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{challenge.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{challenge.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
