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
    <header className="sticky top-0 z-30 border-b border-black/5 bg-[#eef5ed]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
        <button className="rounded-lg bg-brand px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-brandDark">
          اطلب الآن
        </button>
        <div className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          <a href="#features">المميزات</a>
          <a href="#testimonials">آراء العملاء</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </div>
        <Image src="/logo.png" alt="زينة" width={84} height={32} className="h-8 w-auto" />
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 pt-8 md:grid-cols-2 md:items-center md:px-8 md:pt-12">
      <div className="text-center md:text-right">
        <div className="mb-3 inline-block rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
          خصم %50 - لفترة محدودة
        </div>
        <h1 className="text-4xl font-black leading-tight text-[#15321b] md:text-5xl">راقب صحتك الآن من منزلك</h1>
        <p className="mt-3 text-sm leading-7 text-neutral-700 md:text-base">
          جهاز قياس السكر يراقب الجلوكوز في الدم عبر شريط اختبار سريع ودقيق، مما يساعد مرضى السكري على متابعة مستويات السكر اليومية بسهولة.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#offer"
            className="rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-brandDark"
          >
            اغتنم العرض الآن
          </a>
          <span className="text-xs font-medium text-neutral-600">الدفع عند الاستلام</span>
        </div>
        <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-[#d7e5d5] bg-white px-3 py-3 shadow-sm">
          <div className="rounded-lg bg-[#f1f7f1] px-3 py-1 text-sm font-black text-brand">1500 MRU</div>
          <div className="text-xs text-neutral-500 line-through">2000 MRU</div>
          <div className="text-xs font-semibold text-brand">وفر 500 أوقية اليوم فقط</div>
        </div>
      </div>
      <div className="rounded-2xl border border-[#d5e6d2] bg-white p-4 shadow-soft">
        <div className="dots-bg flex h-64 items-center justify-center rounded-xl text-3xl font-bold text-white md:h-[350px]">
          صورة أو فيديو
        </div>
        <div className="mt-4 rounded-xl border border-[#dae8d7] bg-[#f7fbf6] p-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 text-left text-sm text-yellow-500">★★★★★</div>
            <div className="h-10 w-10 rounded-full bg-brand/80 text-center leading-10 text-white">👤</div>
            <div className="text-right">
              <p className="text-base font-black text-neutral-900">محمد عالي</p>
              <p className="text-sm text-neutral-700">منتج فعلا يستحق التجربة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8">
      <h3 className="text-center text-3xl font-black text-[#15321b] md:text-4xl">المميزات</h3>
      <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {features.map((item, idx) => (
          <article key={idx} className="rounded-2xl border border-[#d7e5d5] bg-white p-4 text-center shadow-sm">
            <div className="mx-auto h-14 w-14 rounded-full border border-[#b8d1b4] bg-[#f1f8ef]" />
            <h4 className="mt-3 text-base font-black text-neutral-900">{item.title}</h4>
            <p className="mt-1 text-xs leading-5 text-neutral-600">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductMedia({ title = "صورة" }: { title?: string }) {
  return (
    <section className="dots-bg mt-2 py-10">
      <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-8">
        <div className="flex h-56 items-center justify-center rounded-2xl border border-white/20 bg-black/10 md:h-80">
          <h3 className="stroke-title text-4xl font-black text-white md:text-6xl">{title}</h3>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="noise-bg py-8">
      <div className="mx-auto w-full max-w-6xl px-4 text-center md:px-8">
        <h3 className="text-3xl font-black text-[#15321b] md:text-4xl">تقييم 4.8 من أكثر 5000 مستخدم</h3>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {testimonials.map((item, idx) => (
            <article key={idx} className="rounded-xl bg-brand p-3 text-white shadow-soft">
              <div className="text-left text-xs text-yellow-300">★★★★★</div>
              <p className="mt-2 min-h-16 text-xs leading-5 text-white/95">{item.text}</p>
              <h4 className="mt-2 text-sm font-black">{item.name}</h4>
              <div className="mx-auto mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm">
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
    <section className="bg-[#0a6b24] py-4 text-white">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-3 gap-2 px-4 text-center md:px-8">
        <div>
          <p className="text-3xl font-black leading-none md:text-4xl">19240+</p>
          <p className="mt-1 text-xs md:text-sm">منطقة مغطاة</p>
        </div>
        <div>
          <p className="text-3xl font-black leading-none md:text-4xl">18691+</p>
          <p className="mt-1 text-xs md:text-sm">عميل راض</p>
        </div>
        <div>
          <p className="text-3xl font-black leading-none md:text-4xl">47+</p>
          <p className="mt-1 text-xs md:text-sm">وكيل محلي</p>
        </div>
      </div>
    </section>
  );
}

export function OfferSection() {
  return (
    <section id="offer" className="mx-auto w-full max-w-6xl px-4 py-10 md:px-8">
      <div className="rounded-2xl border border-[#d7e5d5] bg-white p-6 text-center shadow-sm">
        <h3 className="text-3xl font-black text-[#15321b] md:text-4xl">العرض يستحق التجربة</h3>
        <p className="mt-2 text-sm text-neutral-600">التقييمات مأخوذة من استطلاعات ما بعد البيع</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="rounded-lg bg-[#ecf6ea] px-3 py-1 text-sm font-bold text-brand">1500 MRU</span>
          <span className="text-sm text-neutral-500 line-through">2000 MRU</span>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="noise-bg py-8">
      <div className="mx-auto w-full max-w-3xl px-4 text-center md:px-8">
        <h3 className="text-3xl font-black text-[#15321b] md:text-4xl">أسئلة شائعة</h3>
        <div className="mt-5 space-y-2 rounded-2xl border border-[#d7e5d5] bg-white p-4 text-right shadow-sm">
          {faqs.map((item, idx) => (
            <details key={idx} className="rounded-lg border border-[#e8efe6] px-3 py-2">
              <summary className="cursor-pointer list-none text-sm font-bold text-neutral-900 md:text-base">{item.q}</summary>
              <p className="mt-2 text-xs leading-6 text-neutral-700 md:text-sm">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="dots-bg py-10 text-center">
      <div className="mx-auto max-w-xl px-4">
        <p className="text-3xl font-black text-white md:text-4xl">كمية قليلة جدا متبقية</p>
        <p className="mt-2 text-sm text-white/90">احجز جهازك الآن واستفد من السعر المخفض قبل انتهاء العرض</p>
        <button className="mt-4 rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-brand shadow-soft">
          اغتنم العرض الآن
        </button>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-8 text-right">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-8 md:grid-cols-2 md:px-8">
        <div>
          <h4 className="text-2xl font-black text-[#15321b]">جهات اتصال</h4>
          <p className="mt-2 text-sm text-neutral-700">الهاتف: +222 33713957</p>
          <p className="text-sm text-neutral-700">الواتساب: +222 33713957</p>
          <p className="text-sm text-neutral-700">الإيميل: support@zeinaa.net</p>
        </div>
        <div className="text-sm text-neutral-600 md:text-left">
          <p>زينة منصة تسوق تهتم بتقديم منتجات صحية موثوقة بجودة عالية وأسعار مناسبة.</p>
        </div>
      </div>
      <div className="bg-[#0a6b24] py-4 text-center text-white">
        <p className="text-4xl font-black leading-none">زينة</p>
        <p className="mt-1 text-xs">جميع الحقوق محفوظة 2026</p>
      </div>
    </footer>
  );
}
