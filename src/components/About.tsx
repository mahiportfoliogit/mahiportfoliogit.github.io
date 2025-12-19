import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code2, Palette, Rocket, Users } from "lucide-react";

export function About() {
  const { ref, isInView } = useInView();

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I constantly look for ways to write code more efficiently, as it challenges me to deepen my understanding and continuously improve.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "I realized how crucial design is to user experience and adoption, so I prioritize design just as highly as functionality.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "I deliver projects on time by following a clear schedule and adapting when challenges arise, without compromising quality.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "While I enjoy solo projects, I value team collaboration for the diverse perspectives and insights it brings.",
    },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/5 to-black" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am a computer science student at Georgia Tech with concentrations in Artificial Intelligence and Data Science and Analytics, focused on building intelligent systems with real-world impact. I have experience across full-stack development and applied AI, including building production-level applications and contributing to large-scale, user-facing platforms. Beyond engineering, I am deeply involved in leadership, research, and community building, bridging academia, industry, and innovation through both technical and organizational roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-cyan-950/20 to-blue-950/20 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Icon className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl mb-2 text-white">{highlight.title}</h3>
                <p className="text-gray-400">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
