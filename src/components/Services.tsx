import { motion } from "motion/react";
import { Paintbrush, Home, Layers, Cuboid } from "lucide-react";

const services = [
  {
    title: "تشطيب شقق وفيلات",
    description: "تنفيذ كافة أعمال التشطيبات بأعلى جودة وأفضل الخامات لضمان رفاهيتك.",
    icon: Home,
    delay: 0.1,
  },
  {
    title: "ديكور داخلي",
    description: "تصميمات عصرية وكلاسيكية تناسب ذوقك وتبرز جمال مساحتك الخاصة.",
    icon: Layers,
    delay: 0.2,
  },
  {
    title: "أعمال النقاشة",
    description: "أحدث صيحات الألوان والدهانات مع ضمان الجودة والدقة في التنفيذ.",
    icon: Paintbrush,
    delay: 0.3,
  },
  {
    title: "تصميم 3D",
    description: "شوف شقتك قبل التنفيذ بتصميمات ثلاثية الأبعاد واقعية جداً.",
    icon: Cuboid,
    delay: 0.4,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">خدماتنا المتميزة</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white">
            كل ما تحتاجه لبناء <span className="text-gradient-gold">منزل أحلامك</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group relative bg-black-light border border-white/5 rounded-2xl p-8 hover:border-gold/30 transition-all duration-500 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-black-lighter flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/5 group-hover:border-gold/20 shadow-lg">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>
                
                <h4 className="text-2xl font-tajawal font-bold text-white mb-4 group-hover:text-gold-light transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">
                  {service.description}
                </p>
              </div>
              
              {/* Bottom Line Indicator */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
