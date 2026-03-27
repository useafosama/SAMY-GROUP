import { motion } from "motion/react";
import { MessageCircle, Instagram, Facebook, MapPin, Video } from "lucide-react";

const socialLinks = [
  {
    id: "whatsapp",
    name: "واتساب",
    icon: MessageCircle,
    url: "https://wa.me/20100012661",
    cta: "افتح واتساب",
    color: "from-[#25D366]/20 to-[#25D366]/5",
    borderColor: "group-hover:border-[#25D366]",
    iconColor: "text-[#25D366]",
  },
  {
    id: "instagram",
    name: "إنستجرام",
    icon: Instagram,
    url: "https://www.instagram.com/samygroup_",
    cta: "تابعنا بالصور",
    color: "from-[#E1306C]/20 to-[#E1306C]/5",
    borderColor: "group-hover:border-[#E1306C]",
    iconColor: "text-[#E1306C]",
  },
  {
    id: "facebook",
    name: "فيسبوك",
    icon: Facebook,
    url: "https://www.facebook.com/share/18P6x4PRGa/?mibextid=wwXIfr",
    cta: "زور صفحتنا",
    color: "from-[#1877F2]/20 to-[#1877F2]/5",
    borderColor: "group-hover:border-[#1877F2]",
    iconColor: "text-[#1877F2]",
  },
  {
    id: "tiktok",
    name: "تيك توك",
    icon: Video,
    url: "https://www.tiktok.com/@samy__group",
    cta: "شاهد فيديوهاتنا",
    color: "from-[#00f2fe]/20 to-[#4facfe]/5",
    borderColor: "group-hover:border-[#00f2fe]",
    iconColor: "text-[#00f2fe]",
  },
  {
    id: "location",
    name: "موقعنا",
    icon: MapPin,
    url: "https://share.google/nWjydmj3vrWyt1vit",
    cta: "احصل على الاتجاهات",
    color: "from-[#EA4335]/20 to-[#EA4335]/5",
    borderColor: "group-hover:border-[#EA4335]",
    iconColor: "text-[#EA4335]",
  },
];

export function SocialLinks() {
  return (
    <section className="py-24 bg-black-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">تواصل معنا</h2>
          <h3 className="text-4xl md:text-5xl font-tajawal font-bold text-white mb-8">
            تابعنا على <span className="text-gradient-gold">السوشيال ميديا</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative flex flex-col items-center p-8 rounded-2xl bg-black border border-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden ${link.borderColor}`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-black-light border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${link.iconColor}`}>
                  <link.icon size={32} />
                </div>
                
                <h4 className="text-xl font-tajawal font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {link.name}
                </h4>
                
                <span className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white/5 text-white/80 text-sm font-medium group-hover:bg-white/10 transition-colors border border-white/5">
                  {link.cta}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
