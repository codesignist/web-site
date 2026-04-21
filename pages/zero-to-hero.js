import Icon from "components/atoms/Icon";
import LinkButton from "components/atoms/LinkButton";
import LessonsMap from "components/organisms/LessonsMap";
import lessons from "data/lessons.json";
import types from "data/types.json";

export default function ZeroToHero() {
  return (
    <div className="relative bg-[url('/svg/top-right.svg'),url('/svg/left.svg'),url('/svg/bottom-right.svg')] bg-no-repeat [background-position:top_right,center_left,bottom_right] max-lg:bg-none">
      <div className="mx-auto px-6 max-w-[768px] max-[320px]:px-4">
        <h1 className="text-center m-0 pt-16 pb-20">
          <span className="text-[32px] font-light max-[425px]:text-[8vw]">
            Zero to Hero
          </span>
          <div className="text-[64px] font-black leading-none max-[425px]:text-[16vw]">
            FrontEnd
            <br />
            Developer
          </div>
          <div className="mt-4 text-base font-light">1 Ağustos 2022</div>
          <LinkButton icon="chevron-left" href="/">
            Ana sayfa
          </LinkButton>
        </h1>
      </div>
      <div className="mx-auto px-6 max-w-[1200px] max-[320px]:px-4">
        <h2 className="mt-10">Ders Haritası</h2>
        <LessonsMap lessons={lessons} types={types} />
      </div>
      <div className="mx-auto px-6 max-w-[768px] max-[320px]:px-4">
        <h2 className="mt-10">Tanıtım</h2>
        <p className="leading-[1.8] mb-6">
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
        <p className="leading-[1.8] mb-6">
          1 Ağustos 2022 Pazartesi başlıyoruz.
          <br />
          Görüşmek üzere.
        </p>
        <h2 className="mt-10">Giriş</h2>
        <p className="leading-[1.8] mb-6">
          Hızla gelişen dünyada yazılımcı ihtiyacı günden güne artmaktadır.
          Şirketler iyi yetişmiş eleman bulamamaktan şikayetçiyken, çalışanlar
          veya yeni bir işe girecek olanlar da şirketlerin yüksek
          beklentilerinden şikayetçidirler. Bu durum sonsuz bir döngüye
          dönüşerek insanları mutsuzluğa ve karamsarlığa itmektedir.
        </p>
        <p className="leading-[1.8] mb-6">
          Bunun çözümü olarak pek çok YouTube ve Udemy eğitimi mevcuttur ancak
          asıl öğrenme yöntemi olan katılımcının bizzat kendi çabası ve
          uygulamasıyla öğrenmesi konusunda pek az eğitim programı vardır.
          <br />
          <b>Zero to Hero FrontEnd Developer</b> programı işte bu eğitim
          eksiğini tamamlamak üzere hazırlanmıştır.
        </p>
        <h2 className="mt-10">Amaç</h2>
        <p className="leading-[1.8] mb-6">
          Temel bilgisayar kullanım bilgisi olan bir katılımcıyı önce FrontEnd
          dünyasına katıp daha sonra oyun geliştirici, mobil geliştirici, gömülü
          sistem geliştirici ve bunun gibi diğer alanlara yönlendirerek yazılım
          dünyasına giriş yapmasını sağlamaktır.
        </p>
        <h2 className="mt-10">Eğitim Hakkında</h2>
        <p className="leading-[1.8] mb-6">
          Dersler önceden belirlenmiş öğrencilere uygulamalı anlatımla
          işlenecek, YouTube canlı yayını üzerinden de diğer katılımcıların
          izlemesi ve yorumlarla derse katılması sağlanacak şekilde
          hazırlanmıştır. Aşağıdaki linkten kanala abone olarak canlı yayını
          takip edebilirsiniz.
        </p>
        <p className="leading-[1.8] mb-6">
          <a
            className="text-white relative before:content-[''] before:absolute before:block before:top-[5px] before:left-[2px] before:w-5 before:h-2.5 before:bg-white before:-z-1"
            href="https://www.youtube.com/yunuses"
            target="_blank"
          >
            <Icon icon="youtube" size={24} color="red" />
            <span className="pl-1.5 hover:underline">
              youtube.com/yunuses
            </span>
          </a>
        </p>
        <p className="leading-[1.8] mb-6">
          Dersler 1 Ağustos 2022'de başlamak üzere;
          <br />
          Pazartesi - Perşembe saat 22:00'de düzenli olarak işlenecektir.
        </p>
        <p className="leading-[1.8] mb-6">
          Ödev ağırlıklı eğitim programı olduğu için katılımcılara yoğun
          görevler düşmektedir. Ödevleri ve dersleri takip etmenin en iyi yolu
          aynı amaçla bir araya gelmiş topluluğa katılmaktır.
          <br />
          Discord kanalımıza aşağıdaki linkten katılabilirsiniz:
        </p>
        <p className="leading-[1.8] mb-6">
          <a
            className="text-white"
            href="https://discord.gg/N72tKgSVV3"
            target="_blank"
          >
            <Icon icon="discord" size={24} color="#fff" />
            <span className="pl-1.5 hover:underline">discord.com</span>
          </a>
        </p>
        <h2 className="mt-10">Teknolojiler</h2>
        <p className="leading-[1.8] mb-6">
          Eğitim programı içerisinde olacak konular, teknolojiler ve npm
          paketlerin bir kısmı:
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
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
          ].map((item, key) => (
            <span
              key={key}
              className="px-1.5 py-1 rounded text-black bg-white/30"
            >
              {item}
            </span>
          ))}
        </div>
        <h2 className="mt-10">Kazanımlar</h2>
        <p className="leading-[1.8] mb-6">
          Eğitim programı sonucunda hedeflenen kazanımlar:
        </p>
        <ul className="grid grid-cols-2 gap-2.5 list-none p-0 max-md:grid-cols-1">
          {[
            "Temel yazılım bilgisi",
            "Kendi kendine öğrenme becerisi",
            "Araştırma becerisi",
            "Problem çözme becerisi",
            "Dokümantasyon okuma becerisi",
            "Teknoloji okur yazarlığı",
            "Diğer yazılım dillerinin önünün açılması",
          ].map((achieve, key) => (
            <li
              key={key}
              className="p-2.5 rounded bg-white/10"
            >
              <Icon icon="check" size={16} color="#fff" />
              <span className="ml-2.5">{achieve}</span>
            </li>
          ))}
        </ul>
        <h2 className="mt-10">Sık Sorulan Sorular</h2>
        {[
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
        ].map(({ q, a }, index) => (
          <div
            key={index}
            className="p-2.5 mb-4 rounded bg-white/10"
          >
            <div className="font-semibold mb-1">{q}</div>
            <div className="font-light">{a}</div>
          </div>
        ))}
        <div className="pt-32" />
      </div>
    </div>
  );
}
