import { motion } from "motion/react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">تواصل معنا</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white mb-8">
            ابدأ رحلة <span className="text-gradient-gold">الرفاهية</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="mb-4">
              <h4 className="text-3xl font-tajawal font-bold text-white mb-4">نحن هنا لخدمتك</h4>
              <p className="text-white/60 leading-relaxed text-lg">
                سواء كنت تبحث عن تشطيب كامل أو ديكور داخلي مميز، فريقنا من المهندسين والخبراء جاهز لتحويل رؤيتك إلى واقع. تواصل معنا الآن لاستشارة مجانية.
              </p>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-black-light border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors shrink-0">
                <Phone className="text-gold" size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-xl mb-1">رقم الهاتف</h5>
                <p className="text-white/60 text-lg font-mono" dir="ltr">+20 100 012 6613</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-black-light border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors shrink-0">
                <Mail className="text-gold" size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-xl mb-1">البريد الإلكتروني</h5>
                <p className="text-white/60 text-lg font-mono">samygroupcon@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-full bg-black-light border border-white/10 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/30 transition-colors shrink-0">
                <MapPin className="text-gold" size={24} />
              </div>
              <div>
                <h5 className="text-white font-bold text-xl mb-1">العنوان</h5>
                <p className="text-white/60 text-lg">القاهرة، جمهورية مصر العربية</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black-light border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative Gradient */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold/10 rounded-full blur-[80px] pointer-events-none" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white/80 text-sm font-medium">الاسم بالكامل</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="أدخل اسمك"
                    className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-white/80 text-sm font-medium">رقم الهاتف</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="أدخل رقم هاتفك"
                    className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors text-right"
                    dir="ltr"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-white/80 text-sm font-medium">نوع الخدمة</label>
                <select
                  id="service"
                  className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="finishing">تشطيب شقق وفيلات</option>
                  <option value="decor">ديكور داخلي</option>
                  <option value="painting">أعمال النقاشة</option>
                  <option value="3d">تصميم 3D</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white/80 text-sm font-medium">رسالتك</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="اكتب تفاصيل طلبك هنا..."
                  className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold/50 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group flex items-center justify-center gap-2 bg-gold text-black font-bold text-lg py-4 rounded-xl hover:bg-gold-light transition-all mt-2"
              >
                إرسال الطلب
                <Send size={20} className="group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
