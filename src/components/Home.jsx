import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center font-Montserrat">
      <div className="bg-[#FAFAFA] min-h-[720px] w-[1280px] rounded-3xl grid grid-cols-4">
        {/* First Part  */}
        <LeftSide></LeftSide>
        {/* Second Part  */}
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default Home;
