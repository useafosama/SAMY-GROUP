import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, PhoneCall } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-[120%] object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-black/40 backdrop-blur-sm text-gold-light text-sm font-medium tracking-wide"
        >
          نصنع الفخامة منذ 2018
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-tajawal font-bold text-white leading-tight mb-6"
        >
          عيش حياة الرفاهية <br />
          مع <span className="text-gradient-gold">SAMY GROUP</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
        >
          خبرة من 2018 في التشطيب والديكور وتنفيذ أفخم الوحدات السكنية والتجارية بأعلى معايير الجودة العالمية.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <a
            href="#contact"
            className="group relative flex items-center justify-center gap-3 bg-gold text-black font-bold text-lg py-4 px-8 rounded-full overflow-hidden transition-all hover:scale-105 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              <PhoneCall size={20} />
              اطلب استشارة
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </a>

          <a
            href="#portfolio"
            className="group flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white font-bold text-lg py-4 px-8 rounded-full transition-all hover:bg-white/10 hover:border-white w-full sm:w-auto"
          >
            شوف أعمالنا
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-sm tracking-widest uppercase font-tajawal">اكتشف المزيد</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
