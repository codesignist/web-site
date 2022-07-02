import styled from "styled-components";
import Icon from "/components/Icon";
import LinkButton from "/components/LinkButton";
import device from "/utils/device";

const Page = styled.div`
  position: relative;
  background-image: url("/svg/top-right.svg"), url("/svg/left.svg"),
    url("/svg/bottom-right.svg");
  background-repeat: no-repeat;
  background-position: top right, center left, bottom right;
  @media ${device.laptop} {
    background-image: none;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 768px;
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 64px;
  padding-bottom: 80px;
`;

const Mini = styled.span`
  font-size: 32px;
  font-weight: 300;
  @media ${device.mobileL} {
    font-size: 8vw;
  }
`;

const Big = styled.div`
  font-size: 64px;
  font-weight: 900;
  line-height: 1em;
  @media ${device.mobileL} {
    font-size: 16vw;
  }
`;

const StartDate = styled.div`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 300;
`;

const H2 = styled.h2`
  margin-top: 2.5rem;
`;

const P = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const YouTube = styled.a`
  color: #fff;
  span {
    padding-left: 6px;
  }
  :hover {
    span {
      text-decoration: underline;
    }
  }
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Block = styled.span`
  padding: 4px 6px;
  border-radius: 4px;
  color: #000;
  background-color: var(--primary);
`;

const QABlock = styled.div`
  padding: 10px;
  margin-bottom: 1em;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const Question = styled.div`
  font-weight: 600;
  margin-bottom: 4px;
`;

const Answer = styled.div`
  font-weight: 300;
`;

const Footer = styled.div`
  padding-top: 128px;
`;

export default function ZeroToHero() {
  return (
    <Page>
      <Wrapper>
        <H1>
          <Mini>Zero to Hero</Mini>
          <Big>
            FrontEnd
            <br />
            Developer
          </Big>
          <StartDate>1 Ağustos 2022</StartDate>
          <LinkButton icon="chevron-left" href="/">
            Ana sayfa
          </LinkButton>
        </H1>
      </Wrapper>
      <Wrapper>
        <H2>Giriş</H2>
        <P>
          Hızla gelişen dünyada yazılımcı ihtiyacı günden güne artmaktadır.
          Şirketler iyi yetişmiş eleman bulamamaktan şikayetçiyken, çalışanlar
          veya yeni bir işe girecek olanlar da şirketlerin yüksek
          beklentilerinden şikayetçidirler. Bu durum sonsuz bir döngüye
          dönüşerek insanları mutsuzluğa ve karamsarlığa itmektedir.
        </P>
        <P>
          Bunun çözümü olarak pek çok YouTube ve Udemy eğitimi mevcuttur ancak
          asıl öğrenme yöntemi olan katılımcının bizzat kendi çabası ve
          uygulamasıyla öğrenmesi konusunda pek az eğitim programı vardır.
          <br />
          <b>Zero to Hero FrontEnd Developer</b> programı işte bu eğitim
          eksiğini tamamlamak üzere hazırlanmıştır.
        </P>
        <H2>Amaç</H2>
        <P>
          Temel bilgisayar kullanım bilgisi olan bir katılımcıyı önce FrontEnd
          dünyasına katıp daha sonra oyun geliştirici, mobil geliştirici, gömülü
          sistem geliştirici ve bunun gibi diğer alanlara yönlendirerek yazılım
          dünyasına giriş yapmasını sağlamaktır.
        </P>
        <H2>Eğitim Hakkında</H2>
        <P>
          Dersler önceden belirlenmiş öğrencilere uygulamalı anlatımla
          işlenecek, YouTube canlı yayını üzerinden de diğer katılımcıların
          izlemesi ve yorumlarla derse katılması sağlanacak şekilde
          hazırlanmıştır. Aşağıdaki linkten kanala abone olarak canlı yayını
          takip edebilirsiniz.
        </P>
        <P>
          <YouTube href="https://www.youtube.com/yunuses" target="_blank">
            <Icon icon="youtube" size={24} color="red" />
            <span>youtube.com/yunuses</span>
          </YouTube>
        </P>
        <P>
          Dersler 1 Ağustos 2022'de başlamak üzere;
          <br />
          Pazartesi - Perşembe saat 22:00'de düzenli olarak işlenecektir.
        </P>
        <P>
          Ödev ağırlıklı eğitim programı olduğu için katılımcılara yoğun
          görevler düşmektedir.
        </P>
        <H2>Teknolojiler</H2>
        <P>
          Eğitim programı içerisinde olacak konu ve teknolojilerin bir kısmı:
        </P>
        <Blocks>
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "git",
            "npm",
            "CLI",
            "Node.js",
            "Styled Components",
            "Mantine",
            "ESLint",
            "Prettier",
            "Responsive",
            "Testing",
            "SVG",
            "JSON",
            "XML",
            "lodash",
            "VS Code",
            "Ant Design",
          ].map((item, key) => (
            <Block key={key}>{item}</Block>
          ))}
        </Blocks>
        <H2>Kazanımlar</H2>
        <P>Eğitim programı sonucunda hedeflenen kazanımlar:</P>
        <ul>
          <li>Temel yazılım bilgisi</li>
          <li>Kendi kendine öğrenme becerisi</li>
          <li>Araştırma becerisi</li>
          <li>Problem çözme becerisi</li>
          <li>Dokümantasyon okuma becerisi</li>
          <li>Teknoloji okur yazarlığı</li>
          <li>Diğer yazılım dillerinin önünün açılması</li>
        </ul>
        <H2>Sık Sorulan Sorular</H2>
        {[
          { q: "Eğitim ücretli mi?", a: "Ücretsiz" },
          { q: "Ne zaman başlayacak?", a: "1 Ağustos 2022" },
          {
            q: "Haftada kaç gün?",
            a: "Pazartesi - Perşembe saat 22:00 olmak üzere haftada 2 gün ders işlenecek.",
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
          <QABlock key={index}>
            <Question>{q}</Question>
            <Answer>{a}</Answer>
          </QABlock>
        ))}
        <Footer />
      </Wrapper>
    </Page>
  );
}
