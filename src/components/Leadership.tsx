import { motion } from "motion/react";
import { AccomplishmentsSlideshow } from "./AccomplishmentsSlideshow";

export function Leadership() {
  return (
    <section id="leadership" className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        </motion.div>

        <AccomplishmentsSlideshow />
      </div>
    </section>
  );
}


