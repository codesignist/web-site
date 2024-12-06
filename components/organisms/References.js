import styled from "styled-components";

const commentsData = [
  {
    img: "/references/aa.png",
    title: "Anadolu Ajansı",
  },
  {
    img: "/references/ihh.png",
    title: "IHH",
  },
  {
    img: "/references/plusstand.png",
    title: "Plusstand",
  },
  {
    img: "/references/qarint.png",
    title: "Qarint",
  },
];

const ReferencesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const Logo = styled.img`
  height: 40px;
  opacity: 0.5;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export default function References() {
  return (
    <ReferencesContainer>
      {commentsData.map((comment, index) => (
        <Logo key={index} src={comment.img} alt={comment.title} />
      ))}
    </ReferencesContainer>
  );
}
