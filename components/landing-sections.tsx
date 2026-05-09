import Image from "next/image";

type Feature = { title: string; subtitle: string };
type Testimonial = { name: string; text: string };
type Faq = { q: string; a: string };

const features: Feature[] = [
  { title: "أيقونة", subtitle: "ميزة" },
  { title: "أيقونة", subtitle: "ميزة" },
  { title: "أيقونة", subtitle: "ميزة" },
  { title: "أيقونة", subtitle: "ميزة" }
];

const testimonials: Testimonial[] = Array.from({ length: 8 }).map((_, idx) => ({
  name: idx === 0 ? "محمد مصطفى" : "زهراء علي",
  text: "لقد كنت أستخدم جهاز قياس السكر، والآن أنا معجب جدا بدقته وسهولة استخدامه."
}));

const faqs: Faq[] = [
  { q: "هل الجهاز سهل الاستخدام؟", a: "نعم، سهل جدا ويعطي النتيجة خلال ثوان بخطوات بسيطة." },
  { q: "هل النتائج دقيقة؟", a: "نعم، الجهاز يوفر قراءة دقيقة لمتابعة مستوى السكر يوميا." },
  { q: "ماذا يحتوي الصندوق؟", a: "الجهاز + شرائط قياس + إبر وخز + دليل استخدام." },
  { q: "هل يوجد توصيل والدفع عند الاستلام؟", a: "نعم، نوفر التوصيل مع إمكانية الدفع عند الاستلام." }
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-md items-center justify-between px-2 py-2">
      <button className="rounded-md bg-brand px-3 py-1.5 text-[11px] font-semibold text-white shadow">
        اغتنم العرض الآن
      </button>
      <div className="flex items-center gap-2">
        <div className="h-px w-16 bg-black/60" />
        <span className="text-[14px] font-semibold">متجرك</span>
      </div>
      <Image src="/logo.png" alt="زينة" width={74} height={30} className="h-7 w-auto" />
    </header>
  );
}

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-md px-3 pb-2 pt-3 text-center">
      <h1 className="text-[44px] font-black leading-none text-brand">نص عرض القيمة</h1>
      <p className="mt-1 text-[14px] text-neutral-700">مثل: راقب سكر الدم بدقة وراحة في المنزل</p>

      <div className="dots-bg mt-4 rounded-md p-4">
        <div className="flex h-48 items-center justify-center rounded-md border border-black/30 bg-black/5 text-4xl font-semibold text-white">
          صورة أو فيديو
        </div>
        <div className="mt-2 grid grid-cols-3 rounded-full bg-[#6fa76f] px-3 py-1 text-[22px] font-black text-white">
          <span>الخصم</span>
          <span className="text-center">السعر</span>
          <span className="text-left">البيع</span>
        </div>
      </div>

      <h2 className="mt-2 text-[48px] font-black leading-none">اسم المنتج</h2>
      <p className="text-[26px] leading-none text-neutral-800">شرح المنتج</p>

      <div className="mx-1 mt-3 rounded-2xl bg-[#bfd1be] p-3 shadow-soft">
        <div className="flex items-center gap-2">
          <div className="text-left text-sm leading-none text-yellow-500">★★★★★</div>
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-brand">
            <div className="flex h-full w-full items-center justify-center text-xl">👤</div>
          </div>
          <div className="flex-1 text-right">
            <div className="text-[38px] font-black leading-none">اسم شخص</div>
            <p className="mt-1 text-[24px] leading-none">تفاصيل تقييم المنتج</p>
          </div>
        </div>
      </div>

      <p className="mt-2 text-[16px]">—</p>
      <a
        href="#offer"
        className="inline-block rounded-md bg-brand px-4 py-1.5 text-[42px] font-black leading-none text-white shadow"
      >
        اغتنم العرض الآن
      </a>
      <p className="mt-1 text-[13px] text-neutral-700">ادفع عند الاستلام</p>
    </section>
  );
}

export function Features() {
  return (
    <section className="mx-auto w-full max-w-md rounded-2xl bg-white px-2 py-4">
      <h3 className="pb-2 text-center text-[42px] font-black text-brand">أهم ميزات</h3>
      <div className="grid grid-cols-4 gap-2">
        {features.map((item, idx) => (
          <article key={idx} className="rounded-3xl border border-[#b8c9b7] p-2 text-center">
            <div className="mx-auto h-16 w-16 rounded-full border border-[#7ea47c] bg-[#f8fff6]" />
            <h4 className="mt-2 text-[20px] font-black">{item.title}</h4>
            <p className="text-[14px] leading-tight">{item.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductMedia({ title = "صورة" }: { title?: string }) {
  return (
    <section className="dots-bg mt-3 py-10">
      <div className="mx-auto w-full max-w-md text-center">
        <div className="h-48 rounded-none border-y border-black/30 bg-black/10" />
        <h3 className="stroke-title -mt-28 text-[52px] font-black text-white">{title}</h3>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="noise-bg px-1 py-4">
      <div className="mx-auto w-full max-w-md text-center">
        <h3 className="text-[38px] font-black">تقييم 4.8 من أكثر 5000 مستخدم</h3>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {testimonials.map((item, idx) => (
            <article key={idx} className="rounded-md bg-brand px-1 py-2 text-white">
              <div className="text-left text-[11px] text-yellow-400">★★★★★</div>
              <p className="mt-1 h-14 overflow-hidden text-[10px] leading-tight">{item.text}</p>
              <h4 className="mt-1 text-[14px] font-black">{item.name}</h4>
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
    <section className="bg-[#00631f] py-2 text-white">
      <div className="mx-auto grid w-full max-w-md grid-cols-3 text-center">
        <div>
          <p className="text-[44px] font-black leading-none">19240+</p>
          <p className="text-[14px]">منطقة مغطاة</p>
        </div>
        <div>
          <p className="text-[44px] font-black leading-none">18691+</p>
          <p className="text-[14px]">عميل راض</p>
        </div>
        <div>
          <p className="text-[44px] font-black leading-none">47+</p>
          <p className="text-[14px]">وكيل محلي</p>
        </div>
      </div>
    </section>
  );
}

export function OfferSection() {
  return (
    <section id="offer" className="bg-white py-3 text-center">
      <h3 className="text-[46px] font-black">عنوان الجائزة/ العرض</h3>
      <p className="text-[14px]">—</p>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="noise-bg py-4">
      <div className="mx-auto w-full max-w-md text-center">
        <h3 className="stroke-title text-[52px] font-black text-brand">أسئلة شائعة</h3>
        <div className="mx-auto mt-2 max-w-[330px] space-y-1">
          {faqs.map((item, idx) => (
            <details key={idx} className="border-b border-neutral-700 pb-1 text-right">
              <summary className="cursor-pointer list-none text-[20px] font-black">{item.q}</summary>
              <p className="mt-1 text-[14px] text-neutral-700">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="dots-bg py-5 text-center">
      <p className="text-3xl font-black text-white">حمولة قليلة</p>
      <button className="mt-2 rounded-md bg-white px-4 py-1 text-[18px] font-bold text-brand">
        اغتنم العرض الآن
      </button>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#f3f3f3] pt-5 text-right">
      <div className="mx-auto w-full max-w-md px-6">
        <h4 className="text-[34px] font-black">جهات اتصال</h4>
        <p className="mt-1 text-[14px]">الهاتف: +222 33713957</p>
        <p className="text-[14px]">الواتساب: +222 33713957</p>
        <p className="text-[14px]">الإيميل: support@zeinaa.net</p>
      </div>
      <div className="mt-5 bg-[#00631f] py-3 text-center text-white">
        <p className="text-[44px] font-black leading-none">زينة</p>
        <p className="text-[12px]">جميع الحقوق محفوظة 2026</p>
      </div>
    </footer>
  );
}
