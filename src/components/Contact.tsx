import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MapPin } from "lucide-react";

export function Contact() {
  const { ref, isInView } = useInView();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mpatel687@gatech.edu",
      href: "mailto:mpatel687@gatech.edu",
      clickable: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Atlanta, GA",
      clickable: false,
    },
  ];

  return (
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 pb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            const CardContent = (
              <>
                <div className="mb-4 p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-cyan-400" />
                </div>
                <p className="text-gray-400">{info.label}</p>
                <p className="text-white font-medium">{info.value}</p>
              </>
            );

            const baseClasses = `
              group flex flex-col items-center text-center p-8
              bg-gradient-to-br from-cyan-950/10 to-blue-950/10
              border border-cyan-500/20 rounded-2xl
              hover:border-cyan-500/50 transition-all
            `;

            return info.clickable ? (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${baseClasses} cursor-pointer`}
              >
                {CardContent}
              </motion.a>
            ) : (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${baseClasses} cursor-default`}
              >
                {CardContent}
              </motion.div>
            );
          })}
        </div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24 flex justify-center" // Changed mt-10 to mt-24
        >
          <span
            className="inline-flex items-center justify-center
                      px-6 py-3
                      bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                      border border-cyan-500/20
                      rounded-full
                      text-cyan-400 text-center
                      backdrop-blur-md"
          >
            Thank you for visiting - come back soon to see more updates 👋
          </span>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-24 pt-12 border-t border-cyan-500/20"
        >
          <p className="text-gray-400">
            © 2025 Mahi Patel. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
