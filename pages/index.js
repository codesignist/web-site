import styled from "styled-components";

const HomeArea = styled.div`
  margin-left: 50%;
  width: 400px;
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

export default function Home() {
  return (
    <HomeArea>
      <div>
        <Hello>Merhaba Dünya,</Hello>
        <H1>
          Ben <Color>Yunus Eş</Color>
        </H1>
        <p>
          Yazılımcıyım, Kırklareli / Türkiye'de yaşıyorum. Yaklaşık 25 yılda
          100'ün üzerinde çeşitli platformlarda projeler tamamlandım.
        </p>
      </div>
    </HomeArea>
  );
}
