import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد محمود",
    role: "مالك فيلا بالتجمع",
    content: "شغل احترافي جداً والتزام بالمواعيد. التشطيب طلع أحسن من التصميم الـ 3D بكتير. شكراً SAMY GROUP على المجهود الرائع.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة حسن",
    role: "صاحبة شقة بالشيخ زايد",
    content: "أفضل شركة تشطيبات اتعاملت معاها. دقة في التفاصيل واختيار خامات ممتازة. المهندسين كانوا متعاونين جداً طول فترة التنفيذ.",
    rating: 5,
  },
  {
    id: 3,
    name: "م. محمد علي",
    role: "مستثمر عقاري",
    content: "تعاملت معاهم في أكتر من مشروع تجاري وسكني. دايماً بيبهروني بجودة الشغل والالتزام بالميزانية. أنصح بيهم بشدة.",
    rating: 5,
  },
  {
    id: 4,
    name: "نورهان طارق",
    role: "مالكة شقة بالمعادي",
    content: "الديكور الداخلي كان تحفة فنية. قدروا يفهموا ذوقي ويترجموه لواقع ملموس. شكراً لفريق العمل المتميز.",
    rating: 4,
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: "rtl", align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-24 bg-black-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">آراء العملاء</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white mb-8">
            ماذا يقول <span className="text-gradient-gold">عملاؤنا</span>
          </h3>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef} dir="rtl">
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_40%] pl-4 transition-opacity duration-300"
                  style={{ opacity: selectedIndex === index || selectedIndex === index - 1 || selectedIndex === index + 1 ? 1 : 0.5 }}
                >
                  <div className="bg-black border border-white/10 rounded-2xl p-8 h-full relative group hover:border-gold/30 transition-colors">
                    <Quote className="absolute top-6 left-6 text-gold/20 w-12 h-12 rotate-180" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? "text-gold fill-gold" : "text-white/20"}
                        />
                      ))}
                    </div>
                    
                    <p className="text-white/80 leading-relaxed mb-8 font-light text-lg">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="mt-auto">
                      <h4 className="text-xl font-tajawal font-bold text-white mb-1 group-hover:text-gold-light transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-gold/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all"
            >
              <ChevronRight size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
