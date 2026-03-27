import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201000126613"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      
      {/* Tooltip */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-white text-black text-sm font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl">
        تواصل معنا الآن
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 border-8 border-transparent border-r-white" />
      </div>
    </motion.a>
  );
}
