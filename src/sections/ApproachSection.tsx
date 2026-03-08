import { Lightbulb, CheckCircle, Award } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const approaches = [
  {
    title: 'Deep Expertise',
    description: 'Years of specialized experience in the complexities of healthcare infrastructure and management.',
    icon: Award,
  },
  {
    title: 'Innovative Strategy',
    description: 'Utilizing the latest methodologies to solve old problems in new, efficient ways.',
    icon: Lightbulb,
  },
  {
    title: 'Smooth Implementation',
    description: 'Ensuring minimal disruption to your daily operations while upgrades take place.',
    icon: CheckCircle,
  },
];

export function ApproachSection() {
  return (
    <section id="process" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/images/project-2.jpg" alt="Medical facility" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">The TESCONN Approach</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We don't just advise; we partner. Our comprehensive and customized approach takes into consideration every
            aspect of your operation.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {approaches.map((approach) => (
            <StaggerItem key={approach.title}>
              <motion.div className="text-center" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 mb-4">
                  <approach.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{approach.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{approach.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
