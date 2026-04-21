import Social from "../molecules/Social";

const SocialArea = ({
  data: { next_sosyal, youtube, github, linkedin, twitter, instagram },
}) => (
  <div className="grid grid-flow-col gap-2 justify-center max-[425px]:grid-flow-row max-[425px]:justify-items-center max-[425px]:grid-cols-[repeat(3,50px)]">
    {next_sosyal && <Social icon="next_sosyal" href={next_sosyal} />}
    {youtube && <Social icon="youtube" href={youtube} />}
    {github && <Social icon="github" href={github} />}
    {linkedin && <Social icon="linkedin" href={linkedin} />}
    {twitter && <Social icon="twitter" href={twitter} />}
    {instagram && <Social icon="instagram" href={instagram} />}
  </div>
);

export default SocialArea;
