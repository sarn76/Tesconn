import { ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { motion } from 'framer-motion';

const projects = [
  {
    category: 'Design & Build',
    year: '2023',
    title: 'Northside Medical Plaza',
    description: 'Complete structural design and interior planning for a 200-bed facility focused on cardiology.',
    image: '/images/project-1.jpg',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    category: 'Technology',
    year: '2022',
    title: "St. Mary's Digital Integration",
    description: 'IoT implementation across 4 campus buildings to monitor air quality and patient flow.',
    image: '/images/project-2.jpg',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
  {
    category: 'Revitalization',
    year: '2022',
    title: 'Central Valley Expansion',
    description: 'Adding 50,000 sq ft of emergency response space while keeping the main hospital fully operational.',
    image: '/images/project-3.jpg',
    categoryColor: 'bg-green-100 text-green-700',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-2">Selected Work</h2>
            <p className="text-lg text-slate-600">Delivered Projects</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors group"
          >
            View all case studies
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.15}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <motion.div className="group cursor-pointer" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.categoryColor}`}>
                      {project.category}
                    </span>
                    <span className="text-sm text-slate-500">{project.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
