import Head from "next/head";
import styled from "styled-components";
import Social from "/components/Social";

const HomeArea = styled.div`
  margin-left: 50%;
  width: 360px;
  height: 100%;
  display: flex;
  align-items: center;
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
`;

export default function Home() {
  return (
    <HomeArea>
      <Head>
        <title>Yunus Eş</title>
      </Head>
      <div>
        <Hello>Merhaba Dünya,</Hello>
        <H1>
          Ben <Color>Yunus Eş</Color>
        </H1>
        <p>
          Yazılımcıyım, Kırklareli / Türkiye'de yaşıyorum. Yaklaşık 25 yılda
          100'ün üzerinde çeşitli platformlarda projeler tamamlandım.
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
