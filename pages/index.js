import styled, { keyframes } from "styled-components";
import SocialArea from "/components/organisms/SocialArea";
import device from "/utils/device";
import Link from "next/link";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeArea = styled.div`
  margin: auto;
  padding: 32px 24px;
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: column;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: start;
  box-sizing: border-box;
  position: relative;

  &::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(2, 159, 237, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }

  @media ${device.tablet} {
    max-width: 100%;
    min-height: 100vh;
    align-content: start;
    text-align: center;
    grid-auto-flow: row;
    grid-gap: 32px;
    padding: 24px 16px;
    padding-top: 32px;
    padding-bottom: 24px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: both;
`;

const AvatarContainer = styled.div`
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-fill-mode: both;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--primary);
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

const TextContent = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: both;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(2, 159, 237, 0.2);
  }

  @media ${device.tablet} {
    padding: 24px;
    border-radius: 12px;
  }
`;

const Hello = styled.span`
  display: block;
  line-height: 1.2em;
  letter-spacing: 2px;
  font-size: 18px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: both;

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;

const H1 = styled.h1`
  margin: 0 0 24px 0;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.1em;
  color: #fff;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: both;

  @media ${device.mobileL} {
    font-size: 28px;
  }
`;

const Color = styled.span`
  color: var(--primary);
`;

const Paragraph = styled.p`
  line-height: 1.8em;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 20px 0;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.7s;
  animation-fill-mode: both;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media ${device.tablet} {
    font-size: 15px;
    line-height: 1.7em;
  }

  @media ${device.mobileL} {
    font-size: 13px;
    line-height: 1.6em;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.8s;
  animation-fill-mode: both;
`;

const LogoImage = styled.img`
  height: 80px;
  width: auto;
  margin: 0 auto;
  display: block;
`;

const SocialContainer = styled.div`
  margin-top: 32px;
  animation: ${fadeInUp} 0.8s ease-out;
  animation-delay: 0.9s;
  animation-fill-mode: both;
`;

export default function Home() {
  return (
    <HomeArea>
      <AvatarContainer>
        <Avatar src="Avatar.png" width={200} height={200} alt="Yunus Eş" />
      </AvatarContainer>
      <ContentWrapper>
        <TextContent>
          <Hello>Merhaba Dünya,</Hello>
          <H1>
            Ben <Color>Yunus EŞ</Color>
          </H1>
          <Paragraph>
            25 yılı aşkın süredir yazılım dünyasının içerisindeyim. Bu süre
            boyunca 100'ün üzerinde irili ufaklı projede, kimi zaman tek başıma,
            kimi zaman da bir ekibin parçası olarak görev aldım. Kariyerimin ilk
            yıllarında uzun süre ActionScript / Flash teknolojileriyle çalıştım.
            2016 yılından bu yana ise React, Node.js ve MongoDB gibi modern web
            teknolojileri üzerine çalışıyorum.
          </Paragraph>
          <Paragraph>
            2024 yılının son çeyreğinde, edindiğim birikimi müşterilerimize daha
            iyi sunabilmek için CodeCube Software'i kurdum.
          </Paragraph>
          <ButtonContainer>
            <Link href="https://codecube.com.tr" target="_blank">
              <LogoImage src="/codecube-logo-h.svg" alt="CodeCube Software" />
            </Link>
          </ButtonContainer>
          <SocialContainer>
            <SocialArea
              data={{
                next_sosyal: "https://sosyal.teknofest.app/@codesignist",
                youtube: "https://www.youtube.com/yunuses",
                github: "https://github.com/codesignist",
                linkedin: "https://www.linkedin.com/in/codesignist/",
                twitter: "https://twitter.com/codesignist",
                instagram: "https://www.instagram.com/codesignist",
              }}
            />
          </SocialContainer>
        </TextContent>
      </ContentWrapper>
    </HomeArea>
  );
}
