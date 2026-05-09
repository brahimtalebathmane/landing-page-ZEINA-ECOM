import Image from "next/image";

type Feature = { title: string; subtitle: string };
type Testimonial = { name: string; text: string };
type Faq = { q: string; a: string };

const features: Feature[] = [
  { title: "استجابة", subtitle: "سريعة وحيوية" },
  { title: "منظم", subtitle: "وسهل المتابعة" },
  { title: "آمن", subtitle: "وعالي الدقة" },
  { title: "عملي", subtitle: "للاستخدام اليومي" }
];

const testimonials: Testimonial[] = Array.from({ length: 8 }).map((_, idx) => ({
  name: idx % 2 === 0 ? "محمد مصطفى" : "زهراء عالي",
  text: "كنت أستخدم جهاز قياس السكر لعدة أشهر، وأنا معجب جدا بدقته وسهولة استخدامه."
}));

const faqs: Faq[] = [
  { q: "هل الجهاز سهل الاستخدام؟", a: "نعم، سهل جدا ويعطي النتيجة خلال ثوان بخطوات بسيطة." },
  { q: "هل النتائج دقيقة؟", a: "نعم، الجهاز يوفر قراءة دقيقة لمتابعة مستوى السكر يوميا." },
  { q: "ماذا يحتوي الصندوق؟", a: "الجهاز + شرائط قياس + إبر وخز + دليل استخدام." },
  { q: "هل يوجد توصيل والدفع عند الاستلام؟", a: "نعم، نوفر التوصيل مع إمكانية الدفع عند الاستلام." }
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-md items-center justify-between px-3 py-3">
      <button className="rounded-lg bg-brand px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft">
        اغتنم العرض الآن
      </button>
      <div className="flex items-center gap-2">
        <div className="h-px w-14 bg-black/40" />
        <span className="text-[13px] font-semibold text-neutral-800">متجر زينة</span>
      </div>
      <Image src="/logo.png" alt="زينة" width={84} height={32} className="h-7 w-auto" />
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-md px-3 pb-4 pt-2 text-center">
      <h1 className="text-[40px] font-black leading-none text-brand">راقب صحتك الآن</h1>
      <h2 className="text-[40px] font-black leading-none text-brand">من منزلك</h2>
      <p className="mt-1 text-[14px] text-neutral-700">
        جهاز قياس السكر يراقب الجلوكوز في الدم عبر شريط اختبار سريع ودقيق
      </p>

      <div className="dots-bg mt-4 rounded-xl p-3">
        <div className="flex h-56 items-center justify-center rounded-lg border border-black/15 bg-black/10 text-4xl font-bold text-white">
          صورة أو فيديو
        </div>
        <div className="mt-2 grid grid-cols-3 rounded-full bg-[#72aa75] px-3 py-1.5 text-[16px] font-black text-white">
          <span>خصم %50</span>
          <span className="text-center line-through">2000 MRU</span>
          <span className="text-left">1500 MRU</span>
        </div>
      </div>

      <h2 className="mt-3 text-[42px] font-black leading-none text-neutral-900">جهاز قياس السكر</h2>
      <p className="mt-1 text-[18px] text-neutral-700">يساعد مرضى السكري في متابعة مستويات السكر بسهولة</p>

      <div className="mx-1 mt-3 rounded-2xl border border-[#d1e3cf] bg-[#eef5ec] p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="text-left text-sm text-yellow-500">★★★★★</div>
          <div className="h-10 w-10 rounded-full bg-brand/80 text-center leading-10 text-white">👤</div>
          <div className="text-right">
            <p className="text-[20px] font-black leading-none">محمد عالي</p>
            <p className="mt-1 text-[14px] text-neutral-700">منتج فعلا يستحق التجربة</p>
          </div>
        </div>
      </div>

      <p className="mt-2 text-[20px] font-black text-brand">وفر 500 أوقية اليوم فقط!</p>
      <a
        href="#offer"
        className="inline-block rounded-lg bg-brand px-5 py-2 text-[28px] font-black leading-none text-white shadow-soft"
      >
        اغتنم العرض الآن
      </a>
      <p className="mt-1 text-[12px] text-neutral-600">الدفع عند الاستلام</p>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-md px-3 py-4">
      <div className="rounded-2xl border border-[#dbe9d8] bg-white p-3">
        <h3 className="text-center text-[38px] font-black text-brand">المميزات</h3>
        <div className="mt-3 grid grid-cols-4 gap-2">
        {features.map((item, idx) => (
            <article key={idx} className="rounded-2xl border border-[#d7e5d5] p-2 text-center">
              <div className="mx-auto h-14 w-14 rounded-full border border-[#b8d1b4] bg-[#f1f8ef]" />
              <h4 className="mt-2 text-[14px] font-black text-neutral-900">{item.title}</h4>
              <p className="text-[11px] leading-4 text-neutral-600">{item.subtitle}</p>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}

export function ProductMedia({ title = "صورة" }: { title?: string }) {
  return (
    <section className="dots-bg mt-3 py-10">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="flex h-48 items-center justify-center border-y border-black/20 bg-black/10">
          <h3 className="stroke-title text-[48px] font-black text-white">{title}</h3>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="noise-bg py-4">
      <div className="mx-auto w-full max-w-md px-2 text-center">
        <h3 className="text-[32px] font-black text-neutral-900">تقييم 4.8 من أكثر 5000 مستخدم</h3>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {testimonials.map((item, idx) => (
            <article key={idx} className="rounded-lg bg-brand px-2 py-2 text-white shadow-soft">
              <div className="text-left text-[10px] text-yellow-300">★★★★★</div>
              <p className="mt-1 h-16 overflow-hidden text-[10px] leading-tight">{item.text}</p>
              <h4 className="mt-1 text-[12px] font-black">{item.name}</h4>
              <div className="mx-auto mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm">
                👤
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-[#0a6b24] py-3 text-white">
      <div className="mx-auto grid w-full max-w-md grid-cols-3 text-center">
        <div>
          <p className="text-[36px] font-black leading-none">19240+</p>
          <p className="mt-1 text-[12px]">منطقة مغطاة</p>
        </div>
        <div>
          <p className="text-[36px] font-black leading-none">18691+</p>
          <p className="mt-1 text-[12px]">عميل راض</p>
        </div>
        <div>
          <p className="text-[36px] font-black leading-none">47+</p>
          <p className="mt-1 text-[12px]">وكيل محلي</p>
        </div>
      </div>
    </section>
  );
}

export function OfferSection() {
  return (
    <section id="offer" className="mx-auto w-full max-w-md bg-white py-3 text-center">
      <h3 className="text-[38px] font-black">العرض يستحق التجربة</h3>
      <p className="text-[13px] text-neutral-700">التقييمات مأخوذة من استطلاعات ما بعد البيع</p>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="noise-bg py-4">
      <div className="mx-auto w-full max-w-md px-4 text-center">
        <h3 className="text-[44px] font-black text-[#15321b]">أسئلة شائعة</h3>
        <div className="mt-3 space-y-2 rounded-xl border border-[#d7e5d5] bg-white p-3 text-right">
          {faqs.map((item, idx) => (
            <details key={idx} className="rounded-lg border border-[#e8efe6] px-3 py-2">
              <summary className="cursor-pointer list-none text-[14px] font-bold text-neutral-900">{item.q}</summary>
              <p className="mt-2 text-[12px] leading-5 text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="dots-bg py-6 text-center">
      <div className="mx-auto w-full max-w-md px-3">
        <p className="text-[30px] font-black text-white">كمية قليلة جدا متبقية</p>
        <button className="mt-3 rounded-lg bg-white px-5 py-2 text-[16px] font-bold text-brand shadow-soft">
          اغتنم العرض الآن
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-6 text-right">
      <div className="mx-auto w-full max-w-md px-6 pb-6">
        <h4 className="text-[30px] font-black text-[#15321b]">جهات اتصال</h4>
        <p className="mt-2 text-[14px] text-neutral-700">الهاتف: +222 33713957</p>
        <p className="text-[14px] text-neutral-700">الواتساب: +222 33713957</p>
        <p className="text-[14px] text-neutral-700">الإيميل: support@zeinaa.net</p>
      </div>
      <div className="bg-[#0a6b24] py-4 text-center text-white">
        <p className="text-[42px] font-black leading-none">زينة</p>
        <p className="mt-1 text-[12px]">جميع الحقوق محفوظة 2026</p>
      </div>
    </footer>
  );
}
