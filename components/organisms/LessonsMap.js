import Lessons from "../molecules/Lessons";
import Types from "../molecules/Types";

const LessonsMap = ({ lessons, types }) => (
  <>
    {lessons && <Lessons lessons={lessons} />}
    {types && <Types types={types} />}
  </>
);

export default LessonsMap;
