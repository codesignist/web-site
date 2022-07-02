import styled from "styled-components";
import LinkButton from "/components/LinkButton";
import Social from "/components/Social";
import device from "/utils/device";

const HomeArea = styled.div`
  margin-left: 50%;
  max-width: 360px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  @media ${device.tablet} {
    margin: auto;
    text-align: center;
  }
`;

const Hello = styled.span`
  line-height: 1em;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
`;

const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 42px;
  font-weight: 900;
`;

const Color = styled.span`
  color: var(--primary);
`;

const SocialArea = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
  justify-content: start;
  @media ${device.tablet} {
    justify-content: center;
  }
  @media ${device.mobileL} {
    grid-auto-flow: row;
    justify-items: center;
    grid-template-columns: repeat(3, 50px);
  }
`;

export default function Home() {
  return (
    <HomeArea>
      <div>
        <Hello>Merhaba Dünya,</Hello>
        <H1>
          Ben <Color>Yunus Eş</Color>
        </H1>
        <p>
          Yazılımcıyım, Kırklareli'de yaşıyorum.
          <br />
          Yaklaşık 25 yılda 100'ün üzerinde çeşitli ölçülerde ve platformlarda
          projeler tamamlandım.
        </p>
        <p>Güncel proje:</p>
        <p>
          <LinkButton icon="chevron-right" href="/zero-to-hero">
            Zero to Hero <b>FrontEnd Developer</b>
          </LinkButton>
        </p>
        <SocialArea>
          <Social icon="youtube" href="https://www.youtube.com/yunuses" />
          <Social icon="github" href="https://github.com/codesignist" />
          <Social
            icon="linkedin"
            href="https://www.linkedin.com/in/codesignist/"
          />
          <Social icon="twitter" href="https://twitter.com/codesignist" />
          <Social icon="facebook" href="https://www.facebook.com/codesignist" />
          <Social
            icon="instagram"
            href="https://www.instagram.com/codesignist"
          />
        </SocialArea>
      </div>
    </HomeArea>
  );
}
