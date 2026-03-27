import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2 } from "lucide-react";

const categories = ["الكل", "شقق", "فيلات", "مطابخ", "حمامات"];

const projects = [
  { id: 1, title: "فيلا مودرن - التجمع الخامس", category: "فيلات", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" },
  { id: 2, title: "شقة كلاسيك - المعادي", category: "شقق", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" },
  { id: 3, title: "مطبخ أمريكي - زايد", category: "مطابخ", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "حمام فندقي - التجمع", category: "حمامات", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" },
  { id: 5, title: "شقة الترا سوبر لوكس", category: "شقق", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" },
  { id: 6, title: "فيلا كلاسيك - الشروق", category: "فيلات", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredProjects = activeCategory === "الكل" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-black-light relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">معرض أعمالنا</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white mb-8">
            شاهد <span className="text-gradient-gold">إبداعاتنا</span>
          </h3>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-black text-white/70 border border-white/10 hover:border-gold/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-sm font-bold tracking-wider uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h4 className="text-2xl font-tajawal font-bold text-white mb-4">
                      {project.title}
                    </h4>
                    <div className="w-12 h-12 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center border border-gold/50 hover:bg-gold hover:text-black transition-colors">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
