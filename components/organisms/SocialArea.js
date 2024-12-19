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
`;

const SocialArea = ({
  data: { youtube, github, linkedin, twitter, facebook, instagram },
}) => (
  <SocialAreaDiv>
    {youtube && <Social icon="youtube" href={youtube} />}
    {github && <Social icon="github" href={github} />}
    {linkedin && <Social icon="linkedin" href={linkedin} />}
    {twitter && <Social icon="twitter" href={twitter} />}
    {facebook && <Social icon="facebook" href={facebook} />}
    {instagram && <Social icon="instagram" href={instagram} />}
  </SocialAreaDiv>
);

export default SocialArea;
