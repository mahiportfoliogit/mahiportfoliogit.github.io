import aiGtSummit from "../assets/aigt-summit.png";
import aiAtl from "../assets/ai-atl.jpg";
import notion from "../assets/notion.jpg";
import digitalTwins from "../assets/digital-twins.jpg";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AccomplishmentsSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const accomplishments = [
    {
      image: aiGtSummit,
      title: "AI@GT Summit",
      description:
        "Director of Events for the AI@GT Summit, creating immersive AI experiences that bridge academics, industry, and innovation together.",
      date: "April 2025",
      link: "https://www.linkedin.com/posts/ai-gt_last-monday-ai-at-georgia-tech-hosted-our-activity-7320182835812720640-gzH9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiLK9oBAalkZazvNfVbGy23en81UJ68Pqc",
    },
    {
      image: aiAtl,
      title: "AI ATL 2025",
      description:
        "Executive Director of AI ATL 2025, leading the Southeast’s largest AI hackathon with 500+ participants across 90+ universities.",
      date: "November 2025",
      link: "https://www.aiatl.io/",
    },
    {
      image: digitalTwins,
      title: "Research for Harvard Data Science Review",
      description:
        "Developed behavioral digital twin systems to simulate, analyze, and predict real-world behaviors at scale in the wine industry.",
      date: "December 2025",
      link: "https://sparky.ai/",
    },
    {
      image: notion,
      title: "Georgia Tech Campus Involvement",
      description:
        "Serving as a Student Ambassador, Resident Assistant, and Teaching Assistant while supporting outreach, mentorship, and inclusive community building across Georgia Tech.",
      date: "August 2025",
      link: "https://www.gatech.edu",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % accomplishments.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, accomplishments.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % accomplishments.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide(
      (prev) => (prev - 1 + accomplishments.length) % accomplishments.length
    );
  };

  return (
    <section id="leadership" className="py-32">
      {/* Leadership Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Leadership
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Overview of Academic Engagement and Professional Experience
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={accomplishments[currentSlide].image}
                alt={accomplishments[currentSlide].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-8 md:p-12"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-lg border border-cyan-500/30">
                    <Award className="text-cyan-400" size={24} />
                  </div>

                  <div className="flex-1">
                    <p className="text-cyan-400 mb-2">
                      {accomplishments[currentSlide].date}
                    </p>

                    <h3 className="text-3xl mb-3 text-white">
                      {accomplishments[currentSlide].title}
                    </h3>

                    <p className="text-gray-300 text-lg">
                      {accomplishments[currentSlide].description}
                    </p>

                    <a
                      href={accomplishments[currentSlide].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Click here to learn more →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all z-10"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
