import styled from "styled-components";
import LinkButton from "/components/atoms/LinkButton";
import SocialArea from "/components/organisms/SocialArea";
import device from "/utils/device";

const HomeArea = styled.div`
  margin: auto;
  padding: 16px;
  max-width: 570px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 24px;
  grid-auto-flow: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  box-sizing: border-box;
  @media ${device.tablet} {
    max-width: 400px;
    align-content: center;
    text-align: center;
    grid-auto-flow: row;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 8px solid var(--primary);
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const Hello = styled.span`
  line-height: 1em;
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 300;
`;

const H1 = styled.h1`
  margin-top: -10px;
  margin-bottom: 16px;
  font-size: 42px;
  font-weight: 900;
  @media ${device.mobileL} {
    font-size: 36px;
  }
`;

const Color = styled.span`
  color: var(--primary);
`;

const LinkFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;
  align-items: baseline;
  @media ${device.tablet} {
    align-items: center;
  }
`;

export default function Home() {
  return (
    <HomeArea>
      <Avatar src="Avatar.png" width={200} height={200} />
      <div>
        <Hello>Merhaba Dünya,</Hello>
        <H1>
          Ben <Color>Yunus Eş</Color>
        </H1>
        <p>
          Yazılımcıyım, Kırklareli'de yaşıyorum.
          <br />
          25 yıldır 100'ün üzerinde çeşitli boyutlarda ve platformlarda projeler
          tamamladım.
        </p>
        <p>
          Üzerinde titizlikle durduğum ve çok güzel bir ekiple desteklenen en
          güncel projelerimiz:
        </p>
        <LinkFlex>
          <LinkButton href="/dev-team">{"<DevTeam />"}</LinkButton>
          <LinkButton href="https://yerlimi.net" target="_blank">
            Yerli mi?
          </LinkButton>
          <LinkButton href="/zero-to-hero">
            Zero to Hero <b>FrontEnd Developer</b>
          </LinkButton>
        </LinkFlex>
        <SocialArea
          data={{
            youtube: "https://www.youtube.com/yunuses",
            github: "https://github.com/codesignist",
            linkedin: "https://www.linkedin.com/in/codesignist/",
            twitter: "https://twitter.com/codesignist",
            instagram: "https://www.instagram.com/codesignist",
          }}
        />
      </div>
    </HomeArea>
  );
}
