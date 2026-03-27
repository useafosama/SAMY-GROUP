import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, Eye, Flame, ArrowLeft } from "lucide-react";

// Real Facebook videos
const videos = [
  {
    id: 1,
    title: "اي هو بند النقاشة وإزاي بنختار الألوان؟",
    category: "نصائح",
    views: "1.2M",
    trending: true,
    thumbnail: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/v/1B6h3wHVrs/?mibextid=wwXIfr",
  },
  {
    id: 2,
    title: "اخطر 3 معلومات عن الجبسمبورد",
    category: "نصائح",
    views: "850K",
    trending: true,
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/r/18Bba9z1Fc/?mibextid=wwXIfr",
  },
  {
    id: 3,
    title: "ازاي بنحسب كمية الأسمنت؟",
    category: "تنفيذ",
    views: "420K",
    trending: false,
    thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/r/19HXUX5tp7/?mibextid=wwXIfr",
  },
  {
    id: 4,
    title: "اي هو الشيرب؟",
    category: "تنفيذ",
    views: "630K",
    trending: true,
    thumbnail: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/r/18QC56BrYZ/?mibextid=wwXIfr",
  },
  {
    id: 5,
    title: "اي هي بنود التشطيبات ونبدأ ازاي؟",
    category: "نصائح",
    views: "2.1M",
    trending: true,
    thumbnail: "https://images.unsplash.com/photo-1541888086925-920a0b41461d?q=80&w=2058&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/r/1CoWuKbsco/?mibextid=wwXIfr",
  },
  {
    id: 6,
    title: "قبل وبعد - تشطيب شقة التجمع",
    category: "قبل/بعد",
    views: "950K",
    trending: false,
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
    videoUrl: "https://www.facebook.com/share/v/1B6h3wHVrs/?mibextid=wwXIfr", // Fallback to first video for demo
  },
];

const categories = ["الكل", "نصائح", "قبل/بعد", "تنفيذ"];

export function Videos() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filteredVideos = activeCategory === "الكل" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const getEmbedUrl = (url: string) => {
    // For Facebook videos
    if (url.includes("facebook.com")) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false&width=560`;
    }
    return url;
  };

  return (
    <section id="videos" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">نصايح وخبرات من شغلنا الحقيقي</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white mb-8">
            شوف <span className="text-gradient-gold">شغلنا الحقيقي ونصايحنا</span>
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

        {/* Video Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer shadow-2xl border border-white/5 hover:border-gold/30 transition-colors bg-black-light"
                onClick={() => setSelectedVideo(getEmbedUrl(video.videoUrl))}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2 z-20">
                  <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white/90 text-xs font-bold">
                    <Eye size={14} className="text-gold" />
                    {video.views}
                  </div>
                  {video.trending && (
                    <div className="flex items-center gap-1 bg-red-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-red-500/30 text-red-500 text-xs font-bold">
                      <Flame size={14} />
                      تريند
                    </div>
                  )}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-black ml-1" size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <span className="text-gold text-xs font-bold tracking-wider uppercase mb-2 block">
                    {video.category}
                  </span>
                  <h4 className="text-xl font-tajawal font-bold text-white leading-tight">{video.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="group flex items-center justify-center gap-3 bg-gold text-black font-bold text-lg py-4 px-10 rounded-full transition-all hover:bg-gold-light hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            احجز استشارة الآن
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-black/50 rounded-full p-2 z-50"
              onClick={() => setSelectedVideo(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border border-white/10 relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedVideo.includes("facebook.com") ? (
                <iframe
                  src={selectedVideo}
                  className="w-full h-full border-none overflow-hidden"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <iframe
                  src={selectedVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
