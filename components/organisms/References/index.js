import styled from "styled-components";

import aa from "./assets/aa.png";
import ihh from "./assets/ihh.png";
import plusstand from "./assets/plusstand.png";
import qarint from "./assets/qarint.png";

const commentsData = [
  {
    img: aa.src,
    title: "Anadolu Ajansı",
  },
  {
    img: ihh.src,
    title: "IHH",
  },
  {
    img: plusstand.src,
    title: "Plusstand",
  },
  {
    img: qarint.src,
    title: "Qarint",
  },
];

const ReferencesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const LogoContainer = styled.div`
  justify-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transition: transform 2s ease;
  transform-style: preserve-3d;

  &:hover {
    animation: rotateAroundCylinder 5s infinite linear;
  }

  @keyframes rotateAroundCylinder {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  height: 100px;
  transition: transform 0.1s ease;
`;

const LogoTitle = styled.h3``;

export default function References() {
  return (
    <ReferencesContainer>
      {commentsData.map((comment, index) => (
        <div key={index}>
          <LogoContainer>
            <Logo src={comment.img} alt={comment.title} />
            <h3>{comment.title}</h3>
          </LogoContainer>
        </div>
      ))}
    </ReferencesContainer>
  );
}
