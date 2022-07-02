import styled from "styled-components";
import LinkButton from "/components/LinkButton";
import device from "/utils/device";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 768px;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 64px;
  margin-bottom: 80px;
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

const Question = styled.div`
  font-weight: 600;
`;

const Answer = styled.div`
  font-weight: 300;
  margin-bottom: 1em;
`;

const Footer = styled.div`
  padding-top: 128px;
`;

export default function ZeroToHero() {
  return (
    <>
      <Wrapper>
        <H1>
          <Mini>Zero to Hero</Mini>
          <Big>
            FrontEnd
            <br />
            Developer
          </Big>
          <StartDate>1 Ağustos 2022</StartDate>
          <LinkButton icon="back" href="/">
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
          hazırlanmıştır.
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
        <H2>Kazanımlar</H2>
        <P>
          Eğitim programı sonucunda hedeflenen kazanımlar:
          <ul>
            <li>Temel yazılım bilgisi</li>
            <li>Kendi kendine öğrenme becerisi</li>
            <li>Araştırma becerisi</li>
            <li>Dokümantasyon okuma becerisi</li>
            <li>Teknoloji okur yazarlığı</li>
            <li>Diğer yazılım dillerinin önünün açılması</li>
          </ul>
        </P>
        <H2>Sık Sorulan Sorular</H2>
        <Question>Eğitim ücretli mi?</Question>
        <Answer>Ücretsiz</Answer>
        <Question>Ne zaman başlayacak?</Question>
        <Answer>1 Ağustos 2022</Answer>
        <Question>Haftada kaç gün?</Question>
        <Answer>
          Pazartesi - Perşembe saat 22:00 olmak üzere haftada 2 gün ders
          işlenecek.
        </Answer>
        <Question>Eğitim hangi programlama dili üzerinde olacak?</Question>
        <Answer>JavaScript</Answer>
        <Question>Eğitim sonrası iş garantisi var mı?</Question>
        <Answer>
          İş garantisi yok ancak pek çok firmanın yazılımcı arayışı mevcut. İş
          bulma potansiyeli yüksek.
        </Answer>
        <Footer />
      </Wrapper>
    </>
  );
}
