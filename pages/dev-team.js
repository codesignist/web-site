import styled, { css } from "styled-components";
import Icon from "/components/atoms/Icon";
import LinkButton from "/components/atoms/LinkButton";
import device from "/utils/device";
import References from "/components/organisms/References";

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
  padding: 0 24px;
  max-width: ${({ $full }) => ($full ? 1200 : 768)}px;
  justify-items: center;
  @media ${device.mobileS} {
    padding: 0 16px;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0;
  padding-top: 64px;
  padding-bottom: 80px;
`;

const Logo = styled.img`
  font-size: 32px;
  font-weight: 300;
  @media ${device.mobileL} {
    font-size: 8vw;
  }
`;

const H2 = styled.h2`
  margin-top: 2.5rem;
`;

const P = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const Blocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;
`;

const Block = styled.span`
  padding: 4px 6px;
  border-radius: 4px;
  color: #000;
  background-color: rgba(255, 255, 255, 0.3);
`;

const AchieveList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  list-style-type: none;
  padding: 0;
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Achieve = styled.li`
  padding: 10px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  span {
    margin-left: 10px;
  }
`;

const Footer = styled.div`
  padding-top: 128px;
`;

export default function DevTeam() {
  return (
    <Page>
      <Wrapper>
        <H1>
          <Logo src="/svg/DevTeam.svg" />
        </H1>
        <LinkButton icon="chevron-left" href="/">
          Ana sayfa
        </LinkButton>
      </Wrapper>
      <Wrapper>
        <H2>Referanslarımız</H2>
        <References />
        <H2>Bizimle tanışarak;</H2>
        <AchieveList>
          {[
            "Fütüristik;",
            "İnovatif",
            "Dinamik",
            "Akılcı;",
            "Yenilikçi;",
            "Çözüm odaklı;",
            "Modern teknolojiye uyumlu",
            "Zamanı verimli kullanabilen;",
          ].map((achieve, key) => (
            <Achieve key={key}>
              <Icon icon="check" size={16} color="#fff" />
              <span>{achieve}</span>
            </Achieve>
          ))}
        </AchieveList>
        <P> Profesyonel bir ekip ile çalışma fırsatı bulabilirsiniz.</P>
        <H2>Kullandığımız Teknolojiler</H2>
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
            <Block key={key}>{item}</Block>
          ))}
        </Blocks>
        <Footer />
      </Wrapper>
    </Page>
  );
}
