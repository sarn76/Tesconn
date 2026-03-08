import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EKGAnimation } from '@/components/EKGAnimation';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-[72px]">
      <EKGAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div className="max-w-3xl" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              Redefining Healthcare Infrastructure
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-slate-900">Complex facilities.</span>
            <br />
            <span className="text-slate-400">Simplified solutions.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
            Healthcare facilities are complex, evolving structures. Whether designing a
            new hospital or revamping a campus, TESCONN brings the expertise and
            innovation to elevate your facility.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-6 rounded-lg text-base font-medium transition-all duration-200 hover:scale-[1.02] group">
              Start your project
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-6 rounded-lg text-base font-medium transition-all duration-200">
              View our work
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
