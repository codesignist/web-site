import styled from "styled-components";
import Social from "../molecules/Social";
import device from "/utils/device";

const SocialAreaDiv = styled.div`
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

const SocialArea = ({
  data: { next_sosyal, youtube, github, linkedin, twitter, instagram },
}) => (
  <SocialAreaDiv>
    {next_sosyal && <Social icon="next_sosyal" href={next_sosyal} />}
    {youtube && <Social icon="youtube" href={youtube} />}
    {github && <Social icon="github" href={github} />}
    {linkedin && <Social icon="linkedin" href={linkedin} />}
    {twitter && <Social icon="twitter" href={twitter} />}
    {instagram && <Social icon="instagram" href={instagram} />}
  </SocialAreaDiv>
);

export default SocialArea;
