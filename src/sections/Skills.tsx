import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Database, Cloud, Layers, Code2, Terminal } from 'lucide-react';
import { skillCategories } from '@/data/portfolio';

const iconMap: Record<string, React.ElementType> = {
  Server,
  Database,
  Cloud,
  Layers,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial opacity-30" />
      </div>

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
              Skills & Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built over a decade of solving complex engineering challenges
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = iconMap[category.icon] || Code2;
              
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="h-full p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover border-glow">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple/20 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.skills.length} technologies</p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          className="group/skill"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <Terminal className="w-3.5 h-3.5 text-muted-foreground group-hover/skill:text-primary transition-colors" />
                              <span className="text-sm font-medium text-foreground">{skill.name}</span>
                            </div>
                            {skill.level && (
                              <span className="text-xs text-muted-foreground font-mono">
                                {skill.level}%
                              </span>
                            )}
                          </div>
                          {skill.level && (
                            <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
                              <motion.div
                                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan to-blue"
                                initial={{ width: 0 }}
                                animate={isInView ? { width: `${skill.level}%` } : {}}
                                transition={{
                                  duration: 1,
                                  delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                                  ease: 'easeOut',
                                }}
                              />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-6 p-4 rounded-xl bg-secondary/50 border border-border/50">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Clean Code Advocate</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Test-Driven Development</span>
              </div>
              <div className="w-px h-4 bg-border hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <Layers className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Agile Methodologies</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
