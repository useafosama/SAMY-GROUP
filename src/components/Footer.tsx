import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="SAMY GROUP" className="h-20 w-auto object-contain" />
              <span className="sr-only">SAMY GROUP</span>
            </a>
            <p className="text-white/60 leading-relaxed max-w-sm">
              شركة رائدة في مجال التشطيبات والديكور الداخلي، نقدم حلولاً متكاملة لتحويل مساحتك إلى تحفة فنية تلبي طموحاتك.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-gold hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-gold hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-gold hover:text-black transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-gold hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 font-tajawal">روابط سريعة</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#hero" className="text-white/60 hover:text-gold transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="text-white/60 hover:text-gold transition-colors">خدماتنا</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-gold transition-colors">أعمالنا</a></li>
              <li><a href="#videos" className="text-white/60 hover:text-gold transition-colors">فيديوهات</a></li>
              <li><a href="#testimonials" className="text-white/60 hover:text-gold transition-colors">آراء العملاء</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 font-tajawal">خدماتنا</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-white/60">تشطيب شقق وفيلات</li>
              <li className="text-white/60">ديكور داخلي</li>
              <li className="text-white/60">أعمال النقاشة والدهانات</li>
              <li className="text-white/60">تصميم 3D واقعي</li>
              <li className="text-white/60">إشراف هندسي متكامل</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-xl mb-6 font-tajawal">معلومات التواصل</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-white/60 flex items-center gap-2">
                <span className="text-gold">الهاتف:</span>
                <span dir="ltr">+20 100 012 6613</span>
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <span className="text-gold">الإيميل:</span>
                <span>samygroupcon@gmail.com</span>
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <span className="text-gold">العنوان:</span>
                <span>القاهرة، مصر</span>
              </li>
              <li className="text-white/60 flex items-center gap-2">
                <span className="text-gold">ساعات العمل:</span>
                <span>10 ص - 10 م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} SAMY GROUP. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-gold transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-gold transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
