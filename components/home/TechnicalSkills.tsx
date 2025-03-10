"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaSearch, 
  FaCode, 
  FaBrain
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiSupabase, 
  SiPostgresql 
} from "react-icons/si";
import { CommitGraph } from "@/components/ui/CommitGraph";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number; // 1-5 scale
  }>;
};

export function TechnicalSkills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: <FaReact className="h-6 w-6 text-primary" />,
      skills: [
        { name: "NextJS", level: 5 },
        { name: "React", level: 5 },
        { name: "Vue", level: 4 },
        { name: "TypeScript", level: 5 },
        { name: "TailwindCSS", level: 5 },
      ],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Python", level: 4 },
        { name: "Supabase", level: 5 },
        { name: "PostgreSQL", level: 4 },
        { name: "Node.js", level: 4 },
        { name: "Express", level: 4 },
      ],
    },
    {
      title: "IA/ML",
      icon: <FaBrain className="h-6 w-6 text-primary" />,
      skills: [
        { name: "LangChain", level: 5 },
        { name: "AI SDK", level: 5 },
        { name: "OpenAI", level: 4 },
        { name: "Hugging Face", level: 3 },
        { name: "RAG", level: 4 },
      ],
    },
    {
      title: "SEO",
      icon: <FaSearch className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Technical SEO", level: 5 },
        { name: "Core Web Vitals", level: 5 },
        { name: "Schema Markup", level: 4 },
        { name: "Analytics", level: 4 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "NextJS": return <SiNextdotjs />;
      case "React": return <FaReact />;
      case "TypeScript": return <SiTypescript />;
      case "TailwindCSS": return <SiTailwindcss />;
      case "Python": return <FaPython />;
      case "Supabase": return <SiSupabase />;
      case "PostgreSQL": return <SiPostgresql />;
      case "Node.js": return <FaNodeJs />;
      default: return <FaCode />;
    }
  };

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Background decoration avec style underground */}
      <div className="absolute inset-0 bg-grid-small-black/[0.05] -z-10" />
      <div className="absolute inset-0 studio-grid -z-10 opacity-30" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="inline-block industrial-border px-4 py-1 mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="underground-text text-sm">EXPERTISE TECHNIQUE</span>
          </motion.div>
          <div className="space-y-2">
            <h2 className="underground-gradient-text text-3xl font-bold tracking-tighter sm:text-4xl">Stack Technologique</h2>
            <p className="text-muted-foreground md:text-lg max-w-[800px]">
              Des technologies modernes pour des applications performantes et évolutives
            </p>
          </div>
          <div className="vu-meter mx-auto w-1/2 max-w-[300px] mt-4" style={{ "--level": "70%" } as React.CSSProperties}></div>
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="industrial-container flex flex-col h-full p-5"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="industrial-border p-3"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="underground-text text-xl">{category.title}</h3>
              </div>
              
              <ul className="space-y-3 w-full flex-grow">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={skill.name}
                    className="relative"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-sm font-mono">
                        <span className="mr-2 text-primary">{getSkillIcon(skill.name)}</span>
                        {skill.name}
                      </span>
                      <span className="flex">
                        {[...Array(5)].map((_, i) => (
                          <motion.span 
                            key={i} 
                            className={`h-1.5 w-1.5 rounded-sm mx-0.5 ${i < skill.level ? 'bg-primary' : 'bg-muted'}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                          />
                        ))}
                      </span>
                    </div>
                    
                    <motion.div 
                      className="mt-1 h-1 w-full bg-muted rounded-sm overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <motion.div 
                        className="h-full bg-primary rounded-sm"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level * 20}%` }}
                        transition={{ 
                          delay: 0.4 + index * 0.1, 
                          duration: 0.8,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Ajout du Commit Graph avec style underground */}
        <motion.div
          className="mt-12 max-w-7xl mx-auto underground-card p-6 rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="mb-4">
            <h3 className="underground-text text-lg mb-1">CONTRIBUTIONS OPEN SOURCE</h3>
            <p className="text-sm text-muted-foreground">Représentation visuelle de mon activité de développement</p>
          </div>
          <CommitGraph 
            title=""
            subtitle=""
          />
        </motion.div>
      </div>
    </section>
  );
} 