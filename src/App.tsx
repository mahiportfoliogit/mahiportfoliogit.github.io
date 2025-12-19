import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Leadership } from "./components/Leadership";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Leadership />
      <Projects />
      <Contact />
    </div>
  );
}
