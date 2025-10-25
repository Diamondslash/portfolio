import { TimeLine } from "../components/TimeLine.jsx";
import { experiences } from "../constants";
const Experiences = () => {
  return (
    <div className="w-full">
      <TimeLine data={experiences} />
    </div>
  );
};

export default Experiences;
