import { Building2, Wrench, TrendingUp, Cpu, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'New Hospital Design & Planning',
    description:
      'From initial concept to ground-breaking, we manage the intricate details of designing modern healthcare facilities. Our approach ensures operational efficiency and patient-centric environments.',
    link: '#',
    image: '/images/project-1.jpg',
    featured: true,
  },
  {
    title: 'Campus Revitalization',
    description: 'Revamping existing campuses to meet current standards without disrupting critical operations.',
    icon: Wrench,
  },
  {
    title: 'Financial Performance',
    description: 'Improving the bottom line through operational optimization and resource management.',
    icon: TrendingUp,
  },
  {
    title: 'Technology Implementation',
    description:
      'Integrating the latest medical and operational technologies to ensure your facility remains at the cutting edge of care delivery.',
    icon: Cpu,
  },
  {
    title: 'Top-to-Bottom Management',
    description: 'A unique blend of expertise ensuring smooth and successful implementation every step of the way.',
    icon: Building2,
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Our Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Comprehensive solutions for every aspect.
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          <AnimatedSection className="lg:col-span-2 lg:row-span-2">
            <motion.div
              className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="absolute inset-0">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
              </div>

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="bg-white/10 backdrop-blur-sm w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{services[0].title}</h3>
                <p className="text-white/80 leading-relaxed mb-4 max-w-lg">{services[0].description}</p>
                <a
                  href={services[0].link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </AnimatedSection>

          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            {services.slice(1, 3).map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="bg-white border border-slate-200 rounded-xl p-6 h-full hover:shadow-lg transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {service.icon && (
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                      <service.icon className="w-5 h-5 text-slate-700" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="lg:col-span-3 grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
            {services.slice(3).map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="bg-white border border-slate-200 rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  {service.icon && (
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-slate-700" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
