import Icon from "components/atoms/Icon";
import LinkButton from "components/atoms/LinkButton";
import LessonsMap from "components/organisms/LessonsMap";
import lessons from "data/lessons.json";
import types from "data/types.json";

const H2 = ({ children }) => (
  <h2 className="mt-12 mb-5 text-2xl font-bold text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary after:rounded-full">
    {children}
  </h2>
);

const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js (Silindi)",
  "git",
  "npm",
  "CLI",
  "Node.js",
  "ESLint",
  "Prettier",
  "Responsive",
  "Testing",
  "SVG",
  "JSON",
  "XML",
  "lodash",
  "VS Code",
  "Styled Components",
  "Mantine",
  "Ant Design",
];

const achievements = [
  "Temel yazılım bilgisi",
  "Kendi kendine öğrenme becerisi",
  "Araştırma becerisi",
  "Problem çözme becerisi",
  "Dokümantasyon okuma becerisi",
  "Teknoloji okur yazarlığı",
  "Diğer yazılım dillerinin önünün açılması",
];

const faq = [
  { q: "Eğitim ücretli mi?", a: "Ücretsiz" },
  { q: "Ne zaman başlayacak?", a: "1 Ağustos 2022" },
  {
    q: "Haftada kaç gün?",
    a: "Pazartesi - Perşembe saat 22:00 olmak üzere haftada 2 gün ders işlenecek.",
  },
  {
    q: "Canlı yayın kayıtları daha sonra izlenebilecek mi?",
    a: "Evet. YouTube kanalı üzerinde kayıtlar daha sonra da izlenebilir olacak.",
  },
  {
    q: "Eğitim hangi programlama dili üzerinde olacak?",
    a: "JavaScript",
  },
  {
    q: "Eğitim sonrası iş garantisi var mı?",
    a: "İş garantisi yok ancak pek çok firmanın yazılımcı arayışı mevcut. İş bulma potansiyeli yüksek.",
  },
  {
    q: "Eğitim sonrası sertifika var mı?",
    a: "Sertifika yok malesef.",
  },
];

export default function ZeroToHero() {
  return (
    <div className="relative bg-[url('/svg/top-right.svg'),url('/svg/left.svg'),url('/svg/bottom-right.svg')] bg-no-repeat [background-position:top_right,center_left,bottom_right] max-lg:bg-none">
      <div className="mx-auto px-6 max-w-[768px] max-[320px]:px-4">
        <div className="text-center pt-16 pb-20">
          <span className="block text-[32px] font-light text-white/70 max-[425px]:text-[8vw]">
            Zero to Hero
          </span>
          <h1 className="m-0 text-[64px] font-black leading-none text-white max-[425px]:text-[16vw]">
            FrontEnd
            <br />
            <span className="text-primary">Developer</span>
          </h1>
          <div className="mt-4 text-sm font-light text-white/50 tracking-wider">
            1 Ağustos 2022
          </div>
          <div className="mt-6">
            <LinkButton icon="chevron-left" href="/">
              Ana sayfa
            </LinkButton>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 max-w-[1200px] max-[320px]:px-4">
        <H2>Ders Haritası</H2>
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 max-md:p-4">
          <LessonsMap lessons={lessons} types={types} />
        </div>
      </div>

      <div className="mx-auto px-6 max-w-[768px] max-[320px]:px-4">
        <H2>Tanıtım</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          En temel bilgisayar kullanımıyla başlayıp gelişmiş web sistemleri
          yapacak seviyeye uygulamalı olarak birlikte çıkıyoruz. HTML, CSS, JS
          konularını ödevlerle en uygun hızda temellendirip, Next.js (silindi),
          React, npm gibi teknolojileri kullanarak modern JavaScript dünyasına
          geçiş yapıyoruz. Sıfırdan başlayacak olan seçili bir kaç öğrenciyle
          ekran paylaşımı da yaparak sınıf ortamını canlı yayında izleyicilerle
          buluşturuyoruz. Ayrıca teorik konuları hızla geçip, gerçek web
          uygulamalarını açık kaynak kodlu olarak birlikte yapıyoruz. Böylelikle
          sadece anlatımdan ibaret olan video eğitimlerden çok daha farklı,
          dinamik, eğlenceli ve sonuç alan eğitim modeliyle katılımcılara yeni
          bir ufuk açıyor, hobi veya meslek kazandırıyoruz.
        </p>
        <p className="leading-[1.8] mb-6 text-white/80">
          1 Ağustos 2022 Pazartesi başlıyoruz.
          <br />
          Görüşmek üzere.
        </p>

        <H2>Giriş</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          Hızla gelişen dünyada yazılımcı ihtiyacı günden güne artmaktadır.
          Şirketler iyi yetişmiş eleman bulamamaktan şikayetçiyken, çalışanlar
          veya yeni bir işe girecek olanlar da şirketlerin yüksek
          beklentilerinden şikayetçidirler. Bu durum sonsuz bir döngüye
          dönüşerek insanları mutsuzluğa ve karamsarlığa itmektedir.
        </p>
        <p className="leading-[1.8] mb-6 text-white/80">
          Bunun çözümü olarak pek çok YouTube ve Udemy eğitimi mevcuttur ancak
          asıl öğrenme yöntemi olan katılımcının bizzat kendi çabası ve
          uygulamasıyla öğrenmesi konusunda pek az eğitim programı vardır.
          <br />
          <b className="text-white">Zero to Hero FrontEnd Developer</b> programı
          işte bu eğitim eksiğini tamamlamak üzere hazırlanmıştır.
        </p>

        <H2>Amaç</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          Temel bilgisayar kullanım bilgisi olan bir katılımcıyı önce FrontEnd
          dünyasına katıp daha sonra oyun geliştirici, mobil geliştirici, gömülü
          sistem geliştirici ve bunun gibi diğer alanlara yönlendirerek yazılım
          dünyasına giriş yapmasını sağlamaktır.
        </p>

        <H2>Eğitim Hakkında</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          Dersler önceden belirlenmiş öğrencilere uygulamalı anlatımla
          işlenecek, YouTube canlı yayını üzerinden de diğer katılımcıların
          izlemesi ve yorumlarla derse katılması sağlanacak şekilde
          hazırlanmıştır. Aşağıdaki linkten kanala abone olarak canlı yayını
          takip edebilirsiniz.
        </p>
        <p className="leading-[1.8] mb-6">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white hover:border-[rgba(255,0,0,0.4)] hover:bg-white/[0.05] transition-all"
            href="https://www.youtube.com/yunuses"
            target="_blank"
          >
            <Icon icon="youtube" size={20} color="red" />
            <span>youtube.com/yunuses</span>
          </a>
        </p>
        <p className="leading-[1.8] mb-6 text-white/80">
          Dersler 1 Ağustos 2022'de başlamak üzere;
          <br />
          Pazartesi - Perşembe saat 22:00'de düzenli olarak işlenecektir.
        </p>
        <p className="leading-[1.8] mb-6 text-white/80">
          Ödev ağırlıklı eğitim programı olduğu için katılımcılara yoğun
          görevler düşmektedir. Ödevleri ve dersleri takip etmenin en iyi yolu
          aynı amaçla bir araya gelmiş topluluğa katılmaktır.
          <br />
          Discord kanalımıza aşağıdaki linkten katılabilirsiniz:
        </p>
        <p className="leading-[1.8] mb-6">
          <a
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-white hover:border-[rgba(88,101,242,0.5)] hover:bg-white/[0.05] transition-all"
            href="https://discord.gg/N72tKgSVV3"
            target="_blank"
          >
            <Icon icon="discord" size={20} color="#fff" />
            <span>discord.com</span>
          </a>
        </p>

        <H2>Teknolojiler</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          Eğitim programı içerisinde olacak konular, teknolojiler ve npm
          paketlerin bir kısmı:
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((item) => (
            <span
              key={item}
              className="px-3 py-1.5 rounded-full text-sm text-primary bg-[rgba(2,159,237,0.08)] border border-[rgba(2,159,237,0.25)]"
            >
              {item}
            </span>
          ))}
        </div>

        <H2>Kazanımlar</H2>
        <p className="leading-[1.8] mb-6 text-white/80">
          Eğitim programı sonucunda hedeflenen kazanımlar:
        </p>
        <ul className="grid grid-cols-2 gap-3 list-none p-0 max-md:grid-cols-1">
          {achievements.map((achieve) => (
            <li
              key={achieve}
              className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3 transition-all hover:border-[rgba(2,159,237,0.3)] hover:bg-white/[0.05]"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(2,159,237,0.15)] shrink-0">
                <Icon icon="check" size={14} color="var(--color-primary)" />
              </span>
              <span className="text-white/90">{achieve}</span>
            </li>
          ))}
        </ul>

        <H2>Sık Sorulan Sorular</H2>
        <div className="flex flex-col gap-3">
          {faq.map(({ q, a }, index) => (
            <details
              key={index}
              className="group rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden transition-all hover:border-[rgba(2,159,237,0.3)] open:border-[rgba(2,159,237,0.4)] open:bg-white/[0.05]"
            >
              <summary className="cursor-pointer p-4 flex items-center justify-between gap-4 select-none list-none [&::-webkit-details-marker]:hidden">
                <span className="font-semibold text-white">{q}</span>
                <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-200 group-open:rotate-45 shrink-0 text-white/70 leading-none">
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 text-white/70 font-light leading-[1.7]">
                {a}
              </div>
            </details>
          ))}
        </div>

        <div className="pt-32" />
      </div>
    </div>
  );
}
