import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { aboutContent, personalInfo } from '@/data/portfolio';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const highlights = [
    {
      icon: Briefcase,
      title: 'Experience',
      value: '10+ Years',
      description: 'Industry experience',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      value: 'MCA',
      description: 'NIT Raipur, 2017',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      description: 'Available worldwide',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Breaking down complex challenges into elegant, scalable solutions.',
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and architectural patterns.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Passionate about financial independence and long-term value creation.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-muted-foreground mb-4">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Building <span className="text-gradient">Scalable Systems</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A decade of crafting high-performance backend solutions and enterprise applications
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-invert max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90">
                  {aboutContent.intro}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.journey}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.philosophy}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.interests}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-card border border-border card-hover"
                  >
                    <item.icon className="w-5 h-5 text-primary mb-2" />
                    <div className="font-semibold text-foreground">{item.value}</div>
                    <div className="text-xs text-muted-foreground">{item.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Values & Approach */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Approach Card */}
              <div className="p-6 rounded-2xl bg-card border border-border card-hover">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary" />
                  </span>
                  My Approach
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.approach}
                </p>
              </div>

              {/* Values Grid */}
              <div className="grid gap-4">
                {values.map((value) => (
                  <div
                    key={value.title}
                    className="p-5 rounded-xl bg-secondary/50 border border-border/50 card-hover flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
